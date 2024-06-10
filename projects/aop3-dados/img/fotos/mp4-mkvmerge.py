#! /usr/bin/env python3

import os
import subprocess
from PIL import Image


# mkvmerge -o output.mkv --title Movie Title input.avi
cwd = os.getcwd()
lst = os.listdir(cwd)
for elem in lst:
    if ".jpg" in elem:
        image = Image.open(elem)
        resized = image.resize((400, 300))

        newname = elem.replace(".jpg", ".jpeg")
        im1 = resized.transpose(Image.ROTATE_270)
        im1.save(newname)

        # title = elem.replace('.mp4', '')
        # novo = title + ".mkv"
        # subprocess.run(['mkvmerge', '-o', novo, '--title', title, elem])
        # os.remove(elem)
