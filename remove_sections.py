import os

filepath = 'about.html'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:156] + lines[234:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("Removed sections from about.html")
