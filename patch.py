import os

content = open('menu.html', 'r', encoding='utf-8').read()
target = '''                <button class="cat-tab" data-filter="Cake Rusk">
                    <span class="cat-emoji">🍞</span>
                    <span>Cake Rusk</span>
                </button>'''

replacement = '''                <button class="cat-tab" data-filter="Cake Rusk">
                    <span class="cat-emoji">🍞</span>
                    <span>Cake Rusk</span>
                </button>
                <button class="cat-tab" data-filter="Tea Rusk">
                    <span class="cat-emoji">☕</span>
                    <span>Tea Rusk</span>
                </button>'''

if target in content:
    content = content.replace(target, replacement)
    open('menu.html', 'w', encoding='utf-8').write(content)
    print("Success")
else:
    print("Target not found")
