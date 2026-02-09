import pandas as pd
import json

df = pd.read_excel('src/assets/Scientific Publication details with links.xlsx')
df = df.dropna(subset=['Title'])

link_col = [c for c in df.columns if 'Link' in c][0]

publications = []
for _, row in df.iterrows():
    pub = {
        'year': int(row['Publication Year']) if pd.notna(row['Publication Year']) else None,
        'authors': str(row['Author']).strip() if pd.notna(row['Author']) else '',
        'title': str(row['Title']).strip() if pd.notna(row['Title']) else '',
        'journal': str(row['Journal']).strip() if pd.notna(row['Journal']) else '',
        'link': str(row[link_col]).strip() if pd.notna(row[link_col]) else '',
        'doi': str(row['DOI']).strip() if pd.notna(row['DOI']) else ''
    }
    publications.append(pub)

publications.sort(key=lambda x: x['year'] if x['year'] else 0, reverse=True)
print(json.dumps(publications, indent=2))
print(f'\nTotal publications: {len(publications)}')
