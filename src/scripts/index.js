// all pages header clock

const clock = document.querySelector("#clock");

function dateAll() {
  var dateNow = new Date();

  let hh = dateNow.getHours();

  if (hh < 10) {
    hh = "0" + hh;
  }

  let m = dateNow.getMinutes();

  if (m < 10) {
    m = "0" + m;
  }

  let s = dateNow.getSeconds();
  if (s < 0) {
    s = "0" + s;
  }

  let dd = dateNow.getUTCDate();
  if (dd < 0) {
    dd = "0" + dd;
  }

  let MM = dateNow.getUTCMonth();
  MM = +1;
  if (MM < 10) {
    MM = "0" + MM;
  }

  let clockNow = hh + ":" + m + " " + "-" + " " + dd + "/" + MM;

  clock.innerHTML = clockNow;

  console.log(MM);
}

setInterval(() => {
  dateAll();
}, 1000);

// page prajects, show work 1 when click a folder button

const showWork1 = document.querySelector("#show-work-1");
const work1 = document.querySelector("#work1");
const btnClose = document.querySelector("#btn-close");

showWork1.addEventListener("click", () => {
  work1.classList.add("fadeInJS");
  work1.classList.remove("fadeOutJS");

  setTimeout(() => {
    work1.style.display = "block";
  }, 200);

  btnClose.addEventListener("click", () => {
    work1.classList.remove("fadeInJS");
    work1.classList.add("fadeOutJS");
    setTimeout(() => {
      work1.style.display = "none";
    }, 200);
  });
});

// page prajects, show work 2 when click a folder button

const showWork2 = document.querySelector("#show-work-2");
const work2 = document.querySelector("#work2");
const btnClose2 = document.querySelector("#btn-close-2");

showWork2.addEventListener("click", () => {
  work2.classList.add("fadeInJS");
  work2.classList.remove("fadeOutJS");

  setTimeout(() => {
    work2.style.display = "block";
  }, 200);

  btnClose2.addEventListener("click", () => {
    work2.classList.remove("fadeInJS");
    work2.classList.add("fadeOutJS");
    setTimeout(() => {
      work2.style.display = "none";
      console.log(" botao fechar");
    }, 200);
  });
});
