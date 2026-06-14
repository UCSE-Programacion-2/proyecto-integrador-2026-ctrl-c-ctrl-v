/* inserta la navbar en el elemento con id="navbar" */
function renderNavbar(paginaActiva = '') {
  const links = [
    { href: 'index.html', texto: 'Inicio' },
    { href: 'catalogo.html', texto: 'Catálogo' },
    { href: 'carrito.html', texto: 'Carrito' },
  ];

  const linksMobile = [
    ...links,
    { href: 'checkout.html', texto: 'Checkout' },
    { href: 'admin.html', texto: 'Admin' },
  ];

  const navLinks = links
    .map(
      (l) =>
        `<li><a href="${l.href}" class="navbar__nav-link${paginaActiva === l.href ? ' activo' : ''}">${l.texto}</a></li>`,
    )
    .join('');

  const mobileLinks = linksMobile
    .map((l) => `<li><a href="${l.href}" class="navbar__mobile-link">${l.texto}</a></li>`)
    .join('');

  document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
      <div class="navbar__inner">
        <a href="index.html" class="navbar__logo">
          <img
            src="assets/logo.webp"
            alt="Logo Prendas Gauchas Demetria"
            class="navbar__logo-img"
          />
          <div>
            <div class="navbar__logo-texto">Demetria</div>
            <div class="navbar__logo-subtexto">Prendas Gauchas</div>
          </div>
        </a>

        <div class="navbar__nav">
          <ul class="navbar__nav-lista">${navLinks}</ul>
        </div>

        <div class="navbar__acciones">
          <a href="carrito.html" class="navbar__icono" title="Carrito">
            🛒
            <span class="navbar__icono-badge">0</span>
          </a>
          <button
            class="navbar__menu-btn"
            id="menu-btn"
            aria-label="Abrir menú"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div class="navbar__mobile-menu" id="menu-mobile">
        <ul class="navbar__mobile-lista">${mobileLinks}</ul>
      </div>
    </nav>
  `;

  /* toggle menú mobile */
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.toggle('abierto');
  });
}
