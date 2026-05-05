import os
import glob
import re

directories = ['app/products/**/*.tsx', 'app/company/**/*.tsx', 'app/impact-studies/**/*.tsx']
files = []
for d in directories:
    files.extend(glob.glob(d, recursive=True))

for f in set(files):
    with open(f, 'r') as file:
        content = file.read()
    
    original = content
    # Remove border from image-placeholder and add border-radius
    content = re.sub(r'\.image-placeholder \{([^\}]+)border:\s*1px\s*solid\s*#000;([^\}]+)\}', r'.image-placeholder {\1\2 border-radius: 16px; overflow: hidden; border: none;}', content, flags=re.IGNORECASE)
    
    content = re.sub(r'\.feature-visual \{([^\}]+)border:\s*1px\s*solid\s*#000;([^\}]+)\}', r'.feature-visual {\1\2 border-radius: 16px; overflow: hidden; border: none;}', content, flags=re.IGNORECASE)

    content = content.replace('.img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; }',
                              '.img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }')
    
    content = content.replace('.img-box.dark { background: #222; }', '.img-box.dark { background: #222; border-radius: 12px; border: none; }')

    # Specific fixes for surfaces
    content = content.replace('border: 1px solid #eee; border-radius: 4px; box-shadow', 'border: none; border-radius: 16px; box-shadow')
    content = content.replace('border: 1px solid #000; border-radius: 4px; box-shadow', 'border: none; border-radius: 16px; box-shadow')
    content = content.replace('border: 1px solid #111; border-radius: 4px;', 'border: none; border-radius: 16px;')

    content = re.sub(r'border-radius:\s*4px;', 'border-radius: 16px;', content)
    content = re.sub(r'border-radius:\s*2px;', 'border-radius: 12px;', content)
    content = re.sub(r'border:\s*1px\s*solid\s*#000;', 'border: 1px solid transparent;', content)

    if content != original:
        print(f"Updated {f}")
        with open(f, 'w') as file:
            file.write(content)

