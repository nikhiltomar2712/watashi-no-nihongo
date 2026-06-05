kanji_list = [
    # Numbers & basic
    "一","二","三","四","五","六","七","八","九","十","百","千","万","円",
    # Time / calendar
    "年","日","月","火","水","木","金","土","曜","今","先","前","後","午","半","時","分","間","朝","昼","夜","夕","早","毎",
    # Directions / position
    "上","下","左","右","中","外","北","南","東","西",
    # People / family
    "人","子","女","男","友","父","母","兄","姉","弟","妹",
    # School / names / groups
    "学","校","生","名","字","会","社",
    # Common verbs / actions
    "行","来","見","聞","言","話","読","書","食","飲","買","売","作","使","歩","走","立","入","出","帰",
    # Places / transport
    "家","物","所","店","駅","車","電",
    # Nature / elements (selected)
    "山","川","海","空","天","気","雨","花",
    # Body parts
    "目","耳","口","手","足",
    # Colors / basic others
    "金","赤","白","青"
]

assert len(kanji_list) == 110, f"Expected 110 kanji, got {len(kanji_list)}"

def write_files():
    # Write the kanji file
    with open("kanji_n5.txt", "w", encoding="utf-8") as f:
        for k in kanji_list:
            f.write(k + "\n")

    # Write a brief README
    readme = """# JLPT N5 Kanji (110)

This repository file set contains the 110 kanji commonly listed for JLPT N5 level.

Files generated:
- kanji_n5.txt: One kanji per line (110 kanji).
- README.md: This summary.

Usage:
- The file `kanji_n5.txt` can be used for flashcards, study lists, or processing in language tools.

License:
- Public domain / CC0 (kanji characters are provided for educational use).
"""
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(readme)

if __name__ == "__main__":
    write_files()
