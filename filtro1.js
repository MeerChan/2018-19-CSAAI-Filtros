function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  deslizadorrojo = document.getElementById('deslizadorrojo');
  valordeslizrojo = document.getElementById('valordeslizrojo');

  deslizadorverde = document.getElementById('deslizadorverde');
  valordeslizverde = document.getElementById('valordeslizverde');

  deslizadorazul = document.getElementById('deslizadorazul');
  valordeslizazul = document.getElementById('valordeslizazul');

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;
  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");
  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  var data = imgData.data
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

deslizadorrojo.oninput = () => {
  valordeslizrojo.innerHTML = deslizadorrojo.value
  ctx.drawImage(img, 0,0);
  umbralrojo = deslizadorrojo.value
  for (var i = 0; i < data.length; i+=4) {
    //var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
    if (data[i] > umbralrojo)
        data[i] = umbralrojo;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

deslizadorverde.oninput = () => {
  valordeslizverde.innerHTML = deslizadorverde.value
  ctx.drawImage(img, 0,0);
  umbralverde = deslizadorverde.value
  for (var i = 0; i < data.length; i+=4) {
  //var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
    if (data[i+1] > umbralverde)
        data[i+1] = umbralverde;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}



deslizadorazul.oninput = () => {
  valordeslizazul.innerHTML = deslizadorazul.value
  ctx.drawImage(img, 0,0);
  umbralazul = deslizadorazul.value
  for (var i = 0; i < data.length; i+=4) {
  //var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
    if (data[i+2] > umbralazul)
        data[i+2] = umbralazul;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

}
