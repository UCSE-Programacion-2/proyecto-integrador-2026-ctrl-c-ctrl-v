/* inserta el footer en el elemento con id="footer" */
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div>
          <p class="footer__marca-nombre">Prendas Gauchas Demetria</p>
          <p class="footer__marca-desc">
            Indumentaria tradicional gaucha de calidad.<br />
            San Salvador de Jujuy, Argentina.
          </p>
        </div>

        <div>
          <h3 class="footer__titulo">Navegación</h3>
          <ul class="footer__lista">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="catalogo.html">Catálogo</a></li>
            <li><a href="carrito.html">Carrito</a></li>
            <li><a href="checkout.html">Checkout</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer__titulo">Categorías</h3>
          <ul class="footer__lista">
            <li><a href="catalogo.html">Bombachas</a></li>
            <li><a href="catalogo.html">Camisas</a></li>
            <li><a href="catalogo.html">Sombreros</a></li>
            <li><a href="catalogo.html">Botas</a></li>
            <li><a href="catalogo.html">Accesorios</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer__titulo">Contacto</h3>
          <p class="footer__contacto-item">📍 San Salvador de Jujuy</p>
          <p class="footer__contacto-item">📸 @prendasgauchasdemetria</p>
          <p class="footer__contacto-item">📘 Prendas Gauchas Demetria</p>
        </div>
      </div>

      <div class="footer__base">
        <p>© 2026 Prendas Gauchas Demetria. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
}
