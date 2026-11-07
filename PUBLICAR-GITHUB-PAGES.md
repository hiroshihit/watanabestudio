# Publicar o site no GitHub Pages (grátis)

1. Crie uma conta em github.com (ou entre na sua).
2. Clique em **+ → New repository**. Nome: `watanabestudio`. Deixe **Public**. Crie.
3. Na página do repositório, clique em **uploading an existing file**.
4. Extraia o zip e arraste **o conteúdo da pasta** (index.html, css, js, assets, admin, tools, .nojekyll...) — não o zip. Se o `.nojekyll` não aparecer por ser arquivo oculto, tudo bem, o site funciona igual.
5. Clique em **Commit changes**.
6. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** → **Save**.
7. Espere 1–2 minutos. O link fica em: `https://SEU-USUARIO.github.io/watanabestudio/`
8. Depois de publicar: edite `js/config.js`, troque `urlSite` pelo link acima, rode `node tools/atualizar-seo.js` e suba os arquivos de novo (Add file → Upload files).

Atualizar o site depois: edite o config.js (ou use admin/index.html), e envie os arquivos alterados pelo mesmo caminho.
