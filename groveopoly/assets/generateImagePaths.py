import os

filePaths = []

baseDir = "C://Users//ZIMMERMANIT23//OneDrive - Grove City College//Documents//GitHub//risaiah//groveopoly"

f = open(baseDir+"//assets//imagePaths.js", "w")

f.write("imagePaths = [")

def writeAllImages(prefix):
    contents = os.listdir(prefix)
    for item in contents:
        if("." not in item):
            newPath = prefix+"//"+item
            writeAllImages(newPath)
        else:
            suffix = item.split(".")[len(item.split("."))-1].lower()
            if suffix in ["svg", "png", "jpg", "jpeg"]:
                f.write("'"+(prefix.removeprefix(baseDir+"//")+"//"+item).replace("//", "/")+"',\n")


writeAllImages(baseDir)

f.write("]")

