/* =====================================================================
   WATANABESTUDIO — LÓGICA DO SITE
   Lê tudo de js/config.js e monta a página. Normalmente você NÃO
   precisa editar este arquivo.
   ===================================================================== */
(function () {
  "use strict";
  var C = window.SITE_CONFIG;
  if (!C) { console.error("config.js não carregou."); return; }
  document.documentElement.classList.add("js");

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var brl = function (n) { return "R$ " + Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };

  /* ---------- Ícones ---------- */
  var ICONS = {
    whatsapp: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.01L4 29l8.14-1.56a12 12 0 0 0 3.9.65h.01C22.68 28.09 28 22.69 28 16.05 28 9.4 22.68 3 16.04 3zm0 22.07h-.01c-1.19 0-2.36-.32-3.38-.92l-.24-.14-4.83.93.96-4.7-.16-.25a10 10 0 0 1-1.53-5.33c0-5.53 4.5-10.03 10.04-10.03 5.52 0 10.02 4.5 10.02 10.03 0 5.53-4.5 10.41-10.87 10.41zm5.5-7.5c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    carro: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 30v-5c0-2 1-3 3-3.6l6-1.6 5-7c.7-1 1.8-1.5 3-1.5h10c1.2 0 2.3.5 3 1.4l5.2 6.2 4 1c2 .5 3.8 2 3.8 4.2V30"/><path d="M5 30h4M17 30h14M39 30h4"/><circle cx="13" cy="31" r="4.5"/><circle cx="35" cy="31" r="4.5"/><path d="M16 21h16"/></svg>',
    moto: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="11" cy="32" r="7"/><circle cx="37" cy="32" r="7"/><path d="M11 32l7-12h10l5 12"/><path d="M28 20l-3-6h-5"/><path d="M33 20l4-5 4 1"/><path d="M18 32h12"/></svg>'
  };
  $$("[data-ico]").forEach(function (el) { el.innerHTML = ICONS[el.dataset.ico] || ""; });

  /* ---------- WhatsApp ---------- */
  var waLink = function (msg) { return "https://wa.me/" + C.whatsapp.numero + "?text=" + encodeURIComponent(msg); };
  var waServico = function (servico, categoria) {
    return waLink(C.whatsapp.mensagemServico.replace("{servico}", servico).replace("{categoria}", categoria));
  };
  $$("[data-wa]").forEach(function (a) {
    a.href = waLink(C.whatsapp.mensagemPadrao);
    a.target = "_blank"; a.rel = "noopener noreferrer";
  });

  /* ---------- Empresa / marca ---------- */
  var E = C.empresa, T = C.textos;
  document.title = E.seoTitulo;
  var brandHTML = function (big) {
    if (E.logo) return '<img src="' + esc(E.logo) + '" alt="' + esc(E.nome) + '"' + (big ? ' width="520"' : ' height="56"') + '>';
    var parts = E.nome.replace(/studio$/i, "");
    return '<span class="brand-word" aria-label="' + esc(E.nome) + '">' + esc(parts) + "<small>Studio</small></span>";
  };
  $$("[data-brand]").forEach(function (el) { el.innerHTML = brandHTML(el.hasAttribute("data-brand-big")); });

  /* ---------- Hero ---------- */
  $("#heroEtiqueta").textContent = T.hero.etiqueta;
  $("#heroTitulo").textContent = T.hero.titulo;
  $("#heroSub").textContent = T.hero.subtitulo;
  $("#heroBtn1").textContent = T.hero.botaoPrincipal;
  $("#heroBtn2").textContent = T.hero.botaoSecundario;
  if (T.hero.imagemFundo) {
    $("#heroPhoto").style.backgroundImage = "url('" + T.hero.imagemFundo + "')";
    $(".hero-car").style.display = "none";
  }

  /* Faixa em movimento (duplicada para o loop ficar contínuo) */
  var faixa = T.faixa.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
  $("#marquee").innerHTML = faixa + faixa + faixa + faixa;

  /* ---------- Sobre ---------- */
  $("#sobreTitulo").textContent = T.sobre.titulo;
  $("#sobreTexto").innerHTML = T.sobre.paragrafos.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("#pilares").innerHTML = T.sobre.diferenciais.map(function (d, i) {
    return '<li data-n="0' + (i + 1) + '"><h3>' + esc(d.titulo) + "</h3><p>" + esc(d.texto) + "</p></li>";
  }).join("");

  /* ---------- Serviços ---------- */
  $("#servTitulo").textContent = T.servicos.titulo;
  $("#servSub").textContent = T.servicos.subtitulo;
  var todosServicos = [];
  $("#servicosWrap").innerHTML = ["carros", "motos"].map(function (chave) {
    var g = C.servicos[chave];
    if (!g) return "";
    var tipo = g.icone === "moto" ? "moto" : "carro";
    var cards = g.itens.map(function (s) {
      todosServicos.push({ nome: s.nome, categoria: g.titulo, grupo: chave });
      return '<article class="card reveal">' +
        (s.destaque ? '<span class="tag">Mais pedido</span>' : "") +
        "<h4>" + esc(s.nome) + "</h4><p>" + esc(s.descricao) + "</p>" +
        '<div class="price">' + (s.aPartirDe ? "<small>A partir de</small>" : "") + "<strong>" + brl(s.preco) + "</strong></div>" +
        '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener noreferrer" href="' + waServico(s.nome, g.titulo) + '"><span class="ico">' + ICONS.whatsapp + "</span>Agendar este serviço</a></article>";
    }).join("");
    return '<div class="svc-group" data-tipo="' + tipo + '">' +
      '<div class="svc-head reveal"><span class="svc-badge">' + ICONS[tipo] + "</span><h3 class=\"chrome-text\">" + esc(g.titulo) + "</h3></div>" +
      '<div class="svc-grid">' + cards + "</div>" +
      (g.observacao ? '<p class="svc-note reveal">' + esc(g.observacao) + "</p>" : "") + "</div>";
  }).join("");

  /* ---------- Galeria ---------- */
  $("#galTitulo").textContent = T.galeria.titulo;
  $("#galSub").textContent = T.galeria.subtitulo;
  var usadas = {}; C.galeria.forEach(function (f) { usadas[f.categoria] = 1; });
  var cats = C.galeriaCategorias.filter(function (c) { return c.id === "todos" || usadas[c.id]; });
  if (cats.length <= 2) $("#galChips").hidden = true;
  $("#galChips").innerHTML = cats.map(function (c, i) {
    return '<button class="chip" role="tab" aria-selected="' + (i === 0) + '" data-cat="' + esc(c.id) + '">' + esc(c.nome) + "</button>";
  }).join("");
  $("#galGrid").innerHTML = C.galeria.map(function (f, i) {
    return '<button class="g-item reveal" data-cat="' + esc(f.categoria) + '" data-i="' + i + '" aria-label="Ampliar: ' + esc(f.titulo) + '">' +
      '<img src="' + esc(f.src) + '" alt="' + esc(f.titulo) + '" loading="lazy" decoding="async"' + (f.foco ? ' style="object-position:' + esc(f.foco) + '"' : "") + '><span class="g-cap">' + esc(f.titulo) + "</span></button>";
  }).join("");

  var visiveis = C.galeria.map(function (_, i) { return i; });
  $("#galChips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    $$(".chip").forEach(function (c) { c.setAttribute("aria-selected", c === b); });
    var cat = b.dataset.cat;
    visiveis = [];
    $$(".g-item").forEach(function (it) {
      var ok = cat === "todos" || it.dataset.cat === cat;
      it.classList.toggle("hide", !ok);
      if (ok) visiveis.push(+it.dataset.i);
    });
  });

  /* Lightbox */
  var lb = $("#lightbox"), pos = 0;
  var mostrar = function () {
    var f = C.galeria[visiveis[pos]];
    $("#lbImg").src = f.src; $("#lbImg").alt = f.titulo; $("#lbCap").textContent = f.titulo;
    var multi = visiveis.length > 1;
    $("#lbPrev").style.visibility = $("#lbNext").style.visibility = multi ? "visible" : "hidden";
  };
  var abrir = function (i) {
    pos = Math.max(0, visiveis.indexOf(i)); mostrar();
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  };
  var passo = function (d) { pos = (pos + d + visiveis.length) % visiveis.length; mostrar(); };
  $("#galGrid").addEventListener("click", function (e) { var b = e.target.closest(".g-item"); if (b) abrir(+b.dataset.i); });
  $("#lbClose").onclick = function () { lb.close(); };
  $("#lbPrev").onclick = function () { passo(-1); };
  $("#lbNext").onclick = function () { passo(1); };
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") passo(-1); if (e.key === "ArrowRight") passo(1); });
  var tx = 0;
  lb.addEventListener("touchstart", function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) passo(dx > 0 ? -1 : 1); }, { passive: true });

  /* ---------- Agendar (select de serviço) ---------- */
  $("#agTitulo").textContent = T.agendar.titulo;
  $("#agTexto").textContent = T.agendar.texto;
  $("#agLabel").textContent = T.agendar.rotuloSelect;
  var opts = '<option value="">' + esc(T.agendar.opcaoPadrao) + "</option>";
  ["carros", "motos"].forEach(function (k) {
    var g = C.servicos[k]; if (!g) return;
    opts += '<optgroup label="' + esc(g.titulo) + '">' + g.itens.map(function (s) {
      return '<option value="' + esc(k + "|" + s.nome) + '">' + esc(s.nome) + "</option>";
    }).join("") + "</optgroup>";
  });
  $("#agSelect").innerHTML = opts;
  $("#agSelect").setAttribute("aria-labelledby", "agLabel");
  $("#agForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = $("#agSelect").value;
    var url = waLink(C.whatsapp.mensagemPadrao);
    if (v) { var p = v.split("|"); url = waServico(p.slice(1).join("|"), C.servicos[p[0]].titulo); }
    window.open(url, "_blank", "noopener");
  });

  /* ---------- Localização ---------- */
  var A = C.endereco;
  $("#locTitulo").textContent = T.localizacao.titulo;
  $("#locSub").textContent = T.localizacao.subtitulo;
  var endHTML = "<strong>" + esc(A.rua) + "</strong>" + esc(A.bairro) + "<br>" + esc(A.cidade) + " - " + esc(A.uf);
  $("#locEndereco").innerHTML = endHTML;
  $("#mapa").src = "https://www.google.com/maps?q=" + encodeURIComponent(A.buscaMapa) + "&output=embed&hl=pt-BR";
  $("#btnRota").href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(A.buscaMapa);

  /* ---------- Rodapé ---------- */
  $("#fNome").textContent = E.nome;
  $("#fSlogan").textContent = E.slogan;
  $("#fEndereco").innerHTML = esc(A.rua) + "<br>" + esc(A.bairro) + "<br>" + esc(A.cidade) + " - " + esc(A.uf);
  $("#fWa").textContent = "WhatsApp: " + C.whatsapp.numeroExibicao;
  $("#fDireitos").textContent = "© " + new Date().getFullYear() + " " + E.nome + ". " + T.rodape.direitos;

  /* ---------- Menu mobile ---------- */
  var burger = $("#burger"), menu = $("#menu");
  var fechar = function () { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Abrir menu"); };
  burger.addEventListener("click", function () {
    var aberto = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", aberto); burger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", fechar); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });

  /* ---------- Cabeçalho ao rolar ---------- */
  var header = $(".site-header");
  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Animações de entrada ---------- */
  var reveals = $$(".reveal");
  reveals.forEach(function (el, i) { el.style.setProperty("--d", (i % 4) * 0.07 + "s"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { var t = en.target; t.classList.add("in"); io.unobserve(t); setTimeout(function () { t.classList.remove("reveal", "in"); }, 1200); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add("in"); }); }
})();
