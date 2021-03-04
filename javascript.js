





dugme.addEventListener("click", function () {
  let unos = document.getElementById("unos");
  let cifre = (unos.value).toString();
  let zbir = 0;

  for (i = 0; i < cifre.length; i++) {
    element = cifre[i];
    zbir = Number(element) + zbir;
    console.log(element);
  };


  document.getElementById("rezultat").innerHTML = zbir;
  console.log(zbir);
});

