function cascadaImagen() {

    let cascada = document.createElement('span');
    let size = Math.random() * 200;
    let seccion = document.querySelector('section');

    let imagenes = [
        'url("img/meGusta.png")',
        'url("img/meEncanta.png")',
        'url("img/meDivierte.png")',
        'url("img/meAsombra.png")',
        'url("img/meEntristece.png")',
        'url("img/meEnoja.png")',
    ];

    cascada.style.left = Math.random() * innerWidth + 'px';

    let background = imagenes[Math.floor(Math.random() * imagenes.length)];

    cascada.style.width = 50 + size + 'px';
    cascada.style.height = 50 + size + 'px';
    cascada.style.backgroundImage = background;

    seccion.appendChild(cascada);

    setTimeout(() => {
        cascada.remove();
    }, 6000);

}