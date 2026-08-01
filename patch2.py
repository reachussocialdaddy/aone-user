content = open('menu.html', 'r', encoding='utf-8').read()
content = content.replace('data-filter="Tea Rusk"', 'data-filter="Tea Rusks"').replace('<span>Tea Rusk</span>', '<span>Tea Rusks</span>')
open('menu.html', 'w', encoding='utf-8').write(content)
print("Updated to Tea Rusks")
