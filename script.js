//Função de proxima foto
function nextImg() {
  let fotoMyself = document.getElementById("Myself");
  if (fotoMyself) {
    let imgMyself = "img/pictureMyself.jpg";
    let altImg = "Foto de mim mesmo";
    let button = document.getElementById("button-icon");
    let button2 = document.getElementById("button-icon2");

    // Adiciona uma transição suave para fora da tela
    fotoMyself.style.transform = "translateX(105%)"; // Desloca 105% para fora da tela
    fotoMyself.style.opacity = 0;

    setTimeout(() => {
      // Muda a imagem e a descrição
      fotoMyself.src = imgMyself;
      fotoMyself.alt = altImg;
      fotoMyself.id = "pictureMyself"; // Corrigido aqui

      // Inicializa fora da tela à esquerda
      fotoMyself.style.transform = "translateX(-105%)";
      fotoMyself.style.opacity = 0;

      // Adiciona uma transição suave para dentro da tela
      setTimeout(() => {
        fotoMyself.style.transform = "translateX(0)"; // Move para a posição original
        fotoMyself.style.opacity = 1;
      }, 50); // Pequeno atraso para garantir a transição

      button.style.display = "none";
      button2.style.display = "";
    }, 100); // Tempo da transição em milissegundos
  } else {
    console.error("Elemento com id 'Myself' não encontrado.");
  }
}
//Função de voltar a foto
function prevImg() {
  let fotoMyself = document.getElementById("pictureMyself");
  if (fotoMyself) {
    let imgMyself = "img/img-logo.jpg";
    let altImg = "Logo";
    let button = document.getElementById("button-icon");
    let button2 = document.getElementById("button-icon2");

    // Adiciona uma transição suave para fora da tela
    fotoMyself.style.transform = "translateX(105%)"; // Desloca 105% para fora da tela
    fotoMyself.style.opacity = 0;

    setTimeout(() => {
      // Muda a imagem e a descrição
      fotoMyself.src = imgMyself;
      fotoMyself.alt = altImg;
      fotoMyself.id = "Myself"; // Corrigido aqui

      // Inicializa fora da tela à esquerda
      fotoMyself.style.transform = "translateX(-105%)";
      fotoMyself.style.opacity = 0;

      // Adiciona uma transição suave para dentro da tela
      setTimeout(() => {
        fotoMyself.style.transform = "translateX(0)"; // Move para a posição original
        fotoMyself.style.opacity = 1;
      }, 50); // Pequeno atraso para garantir a transição

      button.style.display = "";
      button2.style.display = "none";
    }, 500); // Tempo da transição em milissegundos
  } else {
    console.error("Elemento com id 'pictureMyself' não encontrado.");
  }
}
