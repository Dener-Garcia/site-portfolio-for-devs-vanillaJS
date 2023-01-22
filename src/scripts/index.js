// page prajects, show work when click a foldel button

const showWork1 = document.querySelector("#show-work-1");
const work1 = document.querySelector("#work1");
const btnClose = document.querySelector("#btn-close");

showWork1.addEventListener("click", () => {
  work1.classList.add("fadeInJS");
  work1.classList.remove("fadeOutJS");

  setTimeout(() => {
    work1.style.display = "block";
    console.log("clickei para aparecer depois de 2segundos")
  }, 200);

  btnClose.addEventListener("click", () => {
     work1.classList.remove("fadeInJS");
     work1.classList.add("fadeOutJS");
    setTimeout(() => {
     work1.style.display = "none";
        console.log(" botao fechar")
    }, 200);
  });
});




