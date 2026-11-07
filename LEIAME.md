# WatanabeStudio — Site

Site estático (HTML + CSS + JavaScript puro). Sem banco de dados, sem mensalidade de servidor, sem instalar nada para usar.
**Para ver o site:** dê dois cliques em `index.html`.

## Estrutura de pastas

```
watanabestudio/
├── index.html            Estrutura da página (não precisa mexer)
├── js/
│   ├── config.js         ★ ARQUIVO CENTRAL: preços, textos, WhatsApp, endereço, fotos
│   └── main.js           Lógica do site (não precisa mexer)
├── css/style.css         Cores, fontes e layout
├── admin/index.html      Painel simples para editar o config.js sem mexer em código
├── assets/
│   ├── logo.png          Logo oficial (fundo transparente)
│   ├── favicon.png       Ícone da aba do navegador
│   ├── og-image.png      Imagem que aparece ao compartilhar o link no WhatsApp/Google
│   ├── fonts/            Fontes (já incluídas, funcionam offline)
│   └── img/galeria/      Fotos reais da galeria
├── tools/atualizar-seo.js  Atualiza título/descrição do Google a partir do config.js
├── robots.txt, sitemap.xml, _headers
└── LEIAME.md
```

## 1) Alterar preços, textos, telefone e endereço → `js/config.js`

Abra `js/config.js` em qualquer editor de texto (Bloco de Notas serve). Tudo está comentado.

| Quero mudar…                          | Onde, dentro do config.js                       |
|---------------------------------------|-------------------------------------------------|
| Preço de um serviço                   | `servicos` → `carros`/`motos` → `preco: 1300`   |
| Nome ou descrição de um serviço       | `nome` / `descricao` do mesmo item              |
| Mostrar "A partir de"                 | `aPartirDe: true` no item                       |
| Selo "Mais pedido"                    | `destaque: true` no item                        |
| Incluir/remover um serviço            | Copie/apague o bloco `{ nome: ..., preco: ... }`|
| Observação abaixo dos cards           | `observacao` do grupo                           |
| WhatsApp                              | `whatsapp.numero` (55 + DDD + número) e `numeroExibicao` |
| Mensagem automática do WhatsApp       | `whatsapp.mensagemPadrao` e `mensagemServico`   |
| Endereço                              | bloco `endereco` (e `buscaMapa` para o mapa/rota) |
| Frase de impacto, textos do estúdio   | bloco `textos`                                  |

**Exemplo:** vitrificação de carro de R$ 1.300 para R$ 1.400 → procure `Vitrificação 1 ano` no bloco `carros` e troque `preco: 1300` por `preco: 1400`. Só isso — o card, o menu de seleção e o botão do WhatsApp usam esse mesmo dado.

> Preço é sempre número, sem "R$" e sem aspas. Centavos com ponto: `1300.50`.
> Cuidado para não apagar vírgulas, aspas e chaves. Se o site "sumir", há erro de digitação no config.js — desfaça a última mudança.

## 2) Logo

A logo oficial já está no site: `assets/logo.png` (letreiro com fundo transparente, usado no topo, na capa e no rodapé), `assets/logo-circulo.png` (versão redonda, igual ao perfil do Instagram) e `assets/favicon.png` (ícone da aba).
Para trocar: substitua `assets/logo.png` por outro PNG transparente (mantendo o mesmo nome) ou aponte um novo arquivo em `empresa.logo` no `config.js`. Se deixar `empresa.logo` vazio, o site usa um letreiro cromado automático.

## 3) Fotos da galeria

As fotos reais já estão em `assets/img/galeria/` e listadas em `galeria` no `config.js`.
Para **adicionar** uma foto:
1. Copie a foto para `assets/img/galeria/` (`.webp` ou `.jpg`, até ~1400 px de largura — use squoosh.app para reduzir o peso).
2. No `config.js`, copie uma linha de `galeria` e mude `src`, `categoria` e `titulo`:
   `{ src: "assets/img/galeria/minha-foto.jpg", categoria: "carros", titulo: "Legenda" },`
3. `foco: "50% 30%"` (opcional) escolhe qual parte da foto aparece no quadrado da galeria; ao clicar, a foto abre inteira.
4. Categorias: `carros`, `interior`, `detalhes`, `motos`, `polimento`, `vitrificacao`. Categorias sem foto ficam escondidas sozinhas — assim que você colocar a primeira foto de moto, o filtro "Motos" aparece.

Para **remover**, apague a linha (e o arquivo da pasta). A foto da capa é `assets/img/hero/capa.webp` (`textos.hero.imagemFundo`).

## 4) Painel administrativo simples → `admin/index.html`

Abra `admin/index.html`, edite os campos (preços, serviços, fotos, textos), clique em **Baixar config.js** e substitua o arquivo `js/config.js` do projeto. Depois, publique novamente (passo abaixo).
Ele roda só no seu computador e **não publica nada sozinho** — por isso é gratuito e não tem risco de ser invadido.
*Alternativa futura:* se quiser editar direto pelo celular e publicar com um clique, dá para ligar o projeto a um CMS leve (Decap CMS + GitHub + Netlify/Cloudflare, ainda gratuito). Posso montar quando você quiser.

## 5) SEO (Google)

O título e a descrição que aparecem no Google ficam em `empresa.seoTitulo` / `seoDescricao`.
Para o Google enxergá-los, rode uma vez, na pasta do projeto: `node tools/atualizar-seo.js` (precisa do Node.js; se não tiver, peça para alguém rodar — leva 1 segundo).
**Importante:** `empresa.urlSite` está com `https://watanabestudio.com.br/` apenas como **exemplo**. Troque pelo endereço real do site antes de publicar e rode o script de novo.
Depois de publicado: cadastre o site no **Google Search Console** e mantenha o **Perfil da Empresa no Google** (Google Meu Negócio) com o mesmo endereço — é o que mais ajuda a aparecer em "estética automotiva Suzano".

## 6) Publicar de graça

**Opção mais simples — Netlify Drop (sem conta técnica):**
1. Acesse https://app.netlify.com/drop e crie uma conta gratuita.
2. Arraste a **pasta `watanabestudio`** inteira para a página.
3. Em segundos você recebe um link (`algo.netlify.app`). Para atualizar depois, arraste a pasta de novo em *Deploys*.

**Alternativas gratuitas:** Cloudflare Pages ou GitHub Pages (envie a pasta para um repositório e ative o Pages; o arquivo `.nojekyll` já está incluso).

**Domínio próprio (ex.: watanabestudio.com.br):** registre em registro.br (~R$ 40/ano) e, no painel do Netlify/Cloudflare, use *Domain settings → Add custom domain*. O HTTPS é gratuito e automático.

## 7) Observações técnicas

- Todos os botões de agendamento usam `https://wa.me/55XXXXXXXXXXX?text=...` com a mensagem codificada. Ao escolher um serviço (nos cards ou no seletor da seção "Bora deixar o seu no ponto?"), o nome já vai na mensagem.
- O mapa usa o Google Maps embutido sem chave de API; se o pino ficar fora do lugar, acrescente o CEP em `endereco.buscaMapa`.
- Fontes (Permanent Marker, Rubik Spray Paint e Inter) são hospedadas junto com o site — nada depende de serviços externos além do mapa.
- Animações respeitam a opção "reduzir movimento" do aparelho.
