function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')
  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');
  deslizadorrojo = document.getElementById('deslizadorrojo');
  deslizadorverde = document.getElementById('deslizadorverde');
  deslizadorazul = document.getElementById('deslizadorazul');

  valordeslizrojo = document.getElementById('valordeslizrojo');
  valordeslizverde = document.getElementById('valordeslizverde');
  valordeslizazul = document.getElementById('valordeslizazul');
  grey = document.getElementById('grey');
  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;
  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  grey.onclick=()=>{
      var imgDataGris = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //-- Obtener el array con todos los píxeles
      var data = imgDataGris.data;
      //-- Filtrar la imagen según el nuevo umbral
      for (var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var v = 0.2126*r + 0.7152*g + 0.0722*b;
        data[i] = data[i+1] = data[i+2] = v
        }
        ctx.putImageData(imgDataGris, 0, 0);
}


deslizadorrojo.oninput = () => {
  //--Nuevo valor deslizador
  valordeslizrojo.innerHTML = deslizadorrojo.value
  ctx.drawImage(img, 0,0);
  //-- Obtener la imagen del canvas en pixeles
  var imgDataRojo = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  var data = imgDataRojo.data
  var umbralrojo = deslizadorrojo.value
  for (var i = 0; i < data.length; i+=4) {
    if (data[i] > umbralrojo)
        data[i] = umbralrojo;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgDataRojo, 0, 0);
}


deslizadorverde.oninput = () => {
  valordeslizverde.innerHTML = deslizadorverde.value
  ctx.drawImage(img, 0,0);
  //-- Obtener la imagen del canvas en pixeles
  var imgDataVerde = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  var data = imgDataVerde.data
  var umbralverde = deslizadorverde.value
  for (var i = 0; i < data.length; i+=4) {
    if (data[i+1] > umbralverde)
        data[i+1] = umbralverde;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgDataVerde, 0, 0);
}


deslizadorazul.oninput = () => {
  valordeslizazul.innerHTML = deslizadorazul.value
  ctx.drawImage(img, 0,0);
  //-- Obtener la imagen del canvas en pixeles
  var imgDataAzul = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  var data = imgDataAzul.data
  var umbralazul = deslizadorazul.value
  for (var i = 0; i < data.length; i+=4) {
    if (data[i+2] > umbralazul)
        data[i+2] = umbralazul;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgDataAzul, 0, 0);
}
}
