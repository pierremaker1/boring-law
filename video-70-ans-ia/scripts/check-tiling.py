"""Détecte les frames corrompues par des "bandes dupliquées" dans un MP4.

Symptôme connu de Chrome sous forte charge : une bande de l'image est
répétée verticalement au lieu du vrai contenu. Une frame saine ne se répète
jamais à l'identique d'une bande à l'autre ; une frame corrompue, si.

Usage : python3 scripts/check-tiling.py out/70-ans-ia.mp4
Code de sortie 1 si au moins une frame est suspecte.
"""
import subprocess
import sys

import numpy as np

W, H = 270, 480  # résolution d'analyse (1/4)
path = sys.argv[1] if len(sys.argv) > 1 else "out/70-ans-ia.mp4"

proc = subprocess.Popen(
    ["ffmpeg", "-loglevel", "error", "-i", path, "-vf", f"scale={W}:{H}", "-f", "rawvideo", "-pix_fmt", "gray", "-"],
    stdout=subprocess.PIPE,
)

suspects = []
index = 0
while True:
    raw = proc.stdout.read(W * H)
    if len(raw) < W * H:
        break
    img = np.frombuffer(raw, dtype=np.uint8).reshape(H, W).astype(np.float32)
    spread = img.std()
    best = None
    # Périodes de 40 à 240 px à cette échelle (160 à 960 px en 1080x1920).
    for p in range(40, 241):
        diff = np.abs(img[: H - p] - img[p:]).mean()
        if best is None or diff < best[0]:
            best = (diff, p)
    # Une répétition quasi parfaite sur une image qui a du contenu = corruption.
    if spread > 8 and best[0] < 0.6:
        suspects.append((index, best[1] * 4, round(float(best[0]), 3)))
    index += 1

proc.wait()
print(f"{index} frames analysées, {len(suspects)} suspectes.")
for f, period, diff in suspects[:40]:
    print(f"  frame {f} : motif répété toutes les {period} px (écart moyen {diff})")
sys.exit(1 if suspects else 0)
