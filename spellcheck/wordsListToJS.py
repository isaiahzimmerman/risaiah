lines = []

with open("C:/Users/ZIMMERMANIT23/OneDrive - Grove City College/Documents/GitHub/risaiah/spellcheck/words_alpha.txt") as f:
    lines = f.readlines()

with open("C:/Users/ZIMMERMANIT23/OneDrive - Grove City College/Documents/GitHub/risaiah/spellcheck/words_alpha.js", "w") as f:
    f.write("wordsAlphaList = [")
    for line in lines:
        line = line.strip()
        f.write('"'+line+'",\n')
    f.write("]")