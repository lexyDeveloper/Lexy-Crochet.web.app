const CarritoDeCompras = document.getElementById('carrito');
const CarritoVacio = document.getElementById('carrito-vacio');

// Recuperar carrito desde localStorage si existe
let ProductosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || [];


const listaProductos = [
  {titulo: 'My melody',precio: 100,imagen: '/imagenes--/productos/Merodi.jpg', tipo: 'peluche'},
  {titulo: 'Mimikyu',precio: 100,imagen: '/imagenes--/productos/Mimikiu.jpg', tipo: 'peluche', tipo2:'Pokemon'},
  {titulo: 'Coraje',precio: 100,imagen: '/imagenes--/productos/CorajeElPerroCobarde.jpg', tipo: 'peluche'},
  {titulo: 'Stitch Grande',precio: 450,imagen: '/imagenes--/productos/StitchG.jpeg', tipo: 'peluche'},
  {titulo: 'Chimuelo',precio: 140,imagen: '/imagenes--/productos/Chimuelo.jpg', tipo: 'peluche'},
  {titulo: 'Llavero Ditto',precio: 50,imagen: '/imagenes--/productos/DittoLlavero.jpg', tipo: 'llavero', tipo2:'Pokemon'},
  {titulo: 'Llavero Kirby',precio: 50,imagen: '/imagenes--/productos/KirbyLlavero.jpg', tipo: 'llavero'},
  {titulo: 'Ramo Graduacion',precio: 460,imagen: 'imagenes--/productos/ramoGraduacion.jpeg', tipo: 'flores'},
  {titulo: 'Ramo 6 flores',precio: 160,imagen: 'imagenes--/productos/Ramo6flores.jpeg', tipo: 'flores'},
  {titulo: 'Ramo 10 flores',precio: 240,imagen: 'imagenes--/productos/Ramo10flores.jpeg', tipo: 'flores'},
  {titulo: 'flor individual',precio: 40,imagen: 'imagenes--/productos/florindividual.jpeg', tipo: 'flores'},
  {titulo: 'Beisbolista',precio: 300,imagen: 'imagenes--/productos/Beisbolista.jpeg', tipo: 'peluche'},
  {titulo: 'LLavero de buo',precio: 50,imagen: 'imagenes--/productos/Buo.jpeg', tipo: 'llavero'}
];

mostrarCarrito();

// Productos Nuevos Apareciendo de forma dinámica
const seccionProductos = document.getElementById('productosNuevos');

function actualizar(){
  seccionProductos.innerHTML = "";
  for (let producto of listaProductos) {
    const div = document.createElement('div');
    div.classList.add('producto');

    const img = document.createElement('img');
    img.classList.add('imgProducto');
    img.src = producto.imagen;
    img.alt = producto.titulo;

    const h3 = document.createElement('h3');
    h3.textContent = producto.titulo;

    const p = document.createElement('p');
    p.textContent = `$${producto.precio}`;

    const boton = document.createElement('button');
    boton.textContent = 'Agregar al Carrito';

    boton.onclick = () => {  
      if (confirm(`¿Deseas agregar ${producto.titulo} al carrito?`)) {
        ProductosDelCarrito.push({titulo: producto.titulo, precio: producto.precio});
        guardarCarrito();
        mostrarCarrito();
      }
    }

    const Whatsapp = document.createElement('img');
    Whatsapp.classList.add('enlaseLogo2');
    Whatsapp.src = 'imagenes--/marca/WhatsappLogo.png';
    Whatsapp.alt = 'Encargar';
    
    const mensajeWhatsApp = `Hola me interesa el ${producto.titulo} por $${producto.precio} %0Ahttps://lexy-crochet.web.app`;
    const enlaceWhatsApp = `https://wa.me/4452156956?text=${mensajeWhatsApp}`;

    const enlace = document.createElement('a');
    enlace.href = enlaceWhatsApp;
    enlace.target = '_blank';
    enlace.appendChild(Whatsapp);

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(boton);
    div.appendChild(enlace);

    seccionProductos.appendChild(div);
  }

}
  

for (let producto of listaProductos) {
  const div = document.createElement('div');
  div.classList.add('producto');

  const img = document.createElement('img');
  img.classList.add('imgProducto');
  img.src = producto.imagen;
  img.alt = producto.titulo;

  const h3 = document.createElement('h3');
  h3.textContent = producto.titulo;

  const p = document.createElement('p');
  p.textContent = `$${producto.precio}`;

  const boton = document.createElement('button');
  boton.textContent = 'Agregar al Carrito';

  boton.onclick = () => {  
    if (confirm(`¿Deseas agregar ${producto.titulo} al carrito?`)) {
      ProductosDelCarrito.push({titulo: producto.titulo, precio: producto.precio});
      guardarCarrito();
      mostrarCarrito();
    }
  }

  const Whatsapp = document.createElement('img');
  Whatsapp.classList.add('enlaseLogo2');
  Whatsapp.src = 'imagenes--/marca/WhatsappLogo.png';
  Whatsapp.alt = 'Encargar';
  
  const mensajeWhatsApp = `Hola me interesa el ${producto.titulo} por $${producto.precio} %0Ahttps://lexy-crochet.web.app`;
  const enlaceWhatsApp = `https://wa.me/4452156956?text=${mensajeWhatsApp}`;

  const enlace = document.createElement('a');
  enlace.href = enlaceWhatsApp;
  enlace.target = '_blank';
  enlace.appendChild(Whatsapp);

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(boton);
  div.appendChild(enlace);

  seccionProductos.appendChild(div);
}

// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(ProductosDelCarrito));
}

// Mostrar carrito
function mostrarCarrito() {

  if (ProductosDelCarrito.length === 0) {
    CarritoVacio.style.display = 'block';
    CarritoDeCompras.innerHTML = "";
  }else{
    CarritoVacio.style.display = 'none';
  }

  CarritoDeCompras.innerHTML = "";
  let total = 0;
  ProductosDelCarrito.forEach((producto, index) => {
    const div = document.createElement('div');
    div.classList.add('producto-Carrito');

    const h3 = document.createElement('h3');
    h3.textContent = producto.titulo;

    const p = document.createElement('p');
    p.textContent = `$${producto.precio}`;

    total += producto.precio;

    // Botón para borrar
    const borrarBtn = document.createElement('div');
    borrarBtn.classList.add('borrarElemento');
    borrarBtn.title = "Eliminar este producto";

    const borrarfoto = document.createElement('img');
    borrarfoto.classList.add('borrarFoto');
    borrarfoto.src = 'imagenes--/usuario/borrar.png';
    borrarfoto.alt = 'Eliminar';
    borrarBtn.appendChild(borrarfoto);
    borrarBtn.addEventListener("click", () => {
      if (confirm(`¿Eliminar ${producto.titulo} del carrito?`)) {
        ProductosDelCarrito.splice(index, 1);
        guardarCarrito();
        mostrarCarrito();
      }
    });

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(borrarBtn);
    CarritoDeCompras.appendChild(div);
  });
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('totalTotal');
  totalDiv.textContent = `Total: $${total}`;

  const img = document.createElement('img');
  img.classList.add('enlaseLogo2');
  img.src = 'imagenes--/marca/WhatsappLogo.png';
  img.alt = 'Encargar';

  const Encargar = document.createElement('div');
  Encargar.classList.add('totalTotal2');
  Encargar.textContent = `Encargar por Whatsapp`;

  const mensajeWhatsApp = `Hola me interesa lo siguiente%0A${ProductosDelCarrito.map(p => `- ${p.titulo} por $${p.precio}`).join(",%0A")} %0Apor un total de $${total}%0Ahttps://lexy-crochet.web.app`;
  const enlaceWhatsApp = `https://wa.me/4452156956?text=${mensajeWhatsApp}`;

  const enlace = document.createElement('a');
  enlace.href = enlaceWhatsApp;
  enlace.target = '_blank';
  enlace.appendChild(img);

  CarritoDeCompras.appendChild(totalDiv);
  CarritoDeCompras.appendChild(enlace);
  CarritoDeCompras.appendChild(Encargar);
  if (ProductosDelCarrito.length === 0) {
    CarritoVacio.style.display = 'block';
    CarritoDeCompras.innerHTML = "";
  }
}


function  filtraproductos(name){
  seccionProductos.innerHTML = "";
  for (let producto of listaProductos) {
    if (name == producto.tipo || name == producto.tipo2){
        const div = document.createElement('div');
        div.classList.add('producto');

        const img = document.createElement('img');
        img.classList.add('imgProducto');
        img.src = producto.imagen;
        img.alt = producto.titulo;

        const h3 = document.createElement('h3');
        h3.textContent = producto.titulo;

        const p = document.createElement('p');
        p.textContent = `$${producto.precio}`;

        const boton = document.createElement('button');
        boton.textContent = 'Agregar al Carrito';

        boton.onclick = () => {  
          if (confirm(`¿Deseas agregar ${producto.titulo} al carrito?`)) {
            ProductosDelCarrito.push({titulo: producto.titulo, precio: producto.precio});
            guardarCarrito();
            mostrarCarrito();
          }
        }

        const Whatsapp = document.createElement('img');
        Whatsapp.classList.add('enlaseLogo2');
        Whatsapp.src = 'imagenes--/marca/WhatsappLogo.png';
        Whatsapp.alt = 'Encargar';
        
        const mensajeWhatsApp = `Hola me interesa el ${producto.titulo} por $${producto.precio} %0Ahttps://lexy-crochet.web.app`;
        const enlaceWhatsApp = `https://wa.me/4452156956?text=${mensajeWhatsApp}`;

        const enlace = document.createElement('a');
        enlace.href = enlaceWhatsApp;
        enlace.target = '_blank';
        enlace.appendChild(Whatsapp);

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(boton);
        div.appendChild(enlace);

        seccionProductos.appendChild(div);
      }
      if(name == ""){
        actualizar();
      } 
  }
}




//peluche  llavero  flores  Pokemon