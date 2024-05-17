document.addEventListener("DOMContentLoaded", function() {
    // Contenido del footer
    var footerContent = `
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="footer_social">
                    <ul>
                        <li><a href="https://twitter.com/NotionWavelet"><img src="images/twitter.png" alt="" width="35"></a></li>
                        <li><a href="https://www.instagram.com/notionwavelet/"><img src="images/instagram.png" alt="" width="35"></a></li>
                        <li><a href="https://www.tiktok.com/@notion.wavelet"><img src="images/tiktok.png" alt="" width="35"></a></li>
                        <li><a href="https://www.pinterest.es/notionwavelet/"><img src="images/pinterest.png" alt="" width="35"></a></li>
                    </ul>
                </div>
                <div class="copyright">
                    &copy 2024 All rights reserved
                </div>
            </div>
        </div>
    </div>
    `;

    // Selecciona el elemento donde quieres incluir el footer
    var footerContainer = document.querySelector("#footer_container");

    // Inserta el contenido del footer en el contenedor
    if (footerContainer) {
        footerContainer.innerHTML = footerContent;
    }
});
