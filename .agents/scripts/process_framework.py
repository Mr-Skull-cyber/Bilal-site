import fitz, os
pdf='VAPT Company Setup & Operational Framework.pdf'
out='.agents/outputs/framework-pages'
os.makedirs(out, exist_ok=True)
doc=fitz.open(pdf)
print('pages', doc.page_count)
for i,page in enumerate(doc):
    pix=page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
    path=f'{out}/page-{i+1}.png'
    pix.save(path)
    print('rendered', path, page.rect)
    print(f'--- PAGE {i+1} TEXT ---')
    print(page.get_text())
