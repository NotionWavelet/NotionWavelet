document.addEventListener("DOMContentLoaded", function() {

    // Contenido de la barra de navegación
    var navbarContent = `
    <div class="header_inner header_inner-expand-sm header_inner-custom d-flex flex-row align-items-center justify-content-start">
			<nav class="main_nav">
				<ul>
					<li><img src="images/logo.png" alt="Notion Wavelet Logo" width="30"><a href="index.html">Notion Wavelet</a></li>
					<li><a href="contact.html">Contacto</a></li>
				</ul>
			</nav>

		</div>
    `;


    // Selecciona el elemento donde quieres incluir la barra de navegación
    var navbarContainer = document.querySelector("#navbar_container");

    // Inserta el contenido de la barra de navegación en el contenedor
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarContent;
    }


});
