# site-marcileneramiro

# Marcilene Ramiro — Fisioterapia e Pilates

Site institucional (one-page) desenvolvido para a clínica de Fisioterapia e Pilates da Dra. Marcilene Ramiro, no Rio de Janeiro.

🔗 **Demo:** https://marcileneramiro.netlify.app/

## Sobre o projeto

Site estático, responsivo, feito para apresentar a clínica, suas especialidades, parcerias e canais de contato, com foco em conversão via WhatsApp.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox, `clamp()` para tipografia responsiva)
- JavaScript puro (sem frameworks nem bibliotecas)
- Sem build step — roda direto no navegador

## Funcionalidades

- Layout 100% responsivo (mobile-first nos breakpoints principais)
- Paleta de cores derivada da identidade visual da marca (navy + dourado)
- Botões de contato direto via WhatsApp (deep link `wa.me`)
- Botão com link direto para as avaliações do Google (Place ID da localização real)
- Mapa do Google Maps incorporado na seção de Contato
- Seção de parcerias (profissionais que atendem no mesmo espaço)
- FAQ em acordeão, construído com JavaScript puro (`aria-expanded`, `aria-controls`, animação via `max-height`)
- Banner de cookies com consentimento salvo em `localStorage`
- Google Analytics (GA4) para métricas de visitas
- Dados estruturados (JSON-LD, schema.org `MedicalClinic`) para SEO
- Meta tags completas: SEO, Open Graph e Twitter Card (preview em redes sociais)
- `robots.txt` e `sitemap.xml` para indexação em buscadores
- Acessibilidade: `alt` em imagens, `aria-label` em ícones, `aria-hidden` em elementos decorativos, `:focus-visible` para navegação por teclado

## Estrutura

```
.
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── .gitignore
└── images/
    └── logo.png
```

## Como rodar localmente

Não há dependências nem build. Basta abrir o `index.html` no navegador, ou usar a extensão **Live Server** do VS Code para live-reload durante o desenvolvimento.

## Publicação

Compatível com qualquer hospedagem de arquivos estáticos: Netlify, Vercel ou GitHub Pages. Basta subir todos os itens da estrutura acima mantendo os caminhos relativos.

### Checklist ao trocar de domínio

Ao publicar em um domínio novo ou diferente do atual, atualizar as URLs absolutas nos seguintes pontos:

- `index.html`: `og:image`, `og:url`, `link rel="canonical"`, `twitter:image`, campo `image` do JSON-LD
- `robots.txt`: linha `Sitemap:`
- `sitemap.xml`: tag `<loc>`

## Autor

Desenvolvido por [Matheus Ramiro](https://github.com/MatheusRamiro).