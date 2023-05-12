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
  if (s < 10) {
    s = "0" + s;
  }

  let dd = dateNow.getUTCDate();
  if (dd < 10) {
    dd = "0" + dd;
  }

  let MM = dateNow.getUTCMonth();
  MM = +1;
  if (MM < 10) {
    MM = "0" + MM;
  }

  let clockNow =  dd + " / " + MM + " - " + hh + ":" + m ;
   
  clock.innerHTML = clockNow;

}

setInterval(() => {
  dateAll();
}, 200);

// page prajects, show work 1 when click a folder button company geradores

const showWork1 = document.querySelector("#show-work-1");
const work1 = document.querySelector("#work1");
const btnClose1 = document.querySelector("#btn-close-1");

showWork1.addEventListener("click", () => {
  work1.classList.add("fade-in");
  work1.classList.remove("fade-out");

  setTimeout(() => {
    work1.style.display = "block";
  }, 200);

  btnClose1.addEventListener("click", () => {
    work1.classList.remove("fade-in");
    work1.classList.add("fade-out");
    setTimeout(() => {
      work1.style.display = "none";
    }, 200);
  });
});

// page prajects, show work 2 when click a folder button BAT eDocs

const showWork2 = document.querySelector("#show-work-2");
const work2 = document.querySelector("#work2");
const btnClose2 = document.querySelector("#btn-close-2");

showWork2.addEventListener("click", () => {
  work2.classList.add("fade-in");
  work2.classList.remove("fade-out");

  setTimeout(() => {
    work2.style.display = "block";
  }, 200);

  btnClose2.addEventListener("click", () => {
    work2.classList.remove("fade-in");
    work2.classList.add("fade-out");
    setTimeout(() => {
      work2.style.display = "none";
    }, 200);
  });
});

// page prajects, show work 3 when click a folder button BAT eDocs

const showWork3 = document.querySelector("#show-work-3");
const work3 = document.querySelector("#work3");
const btnClose3 = document.querySelector("#btn-close-3");

showWork3.addEventListener("click", () => {
  work3.classList.add("fade-in");
  work3.classList.remove("fade-out");

  setTimeout(() => {
    work3.style.display = "block";
  }, 200);

  btnClose3.addEventListener("click", () => {
    work3.classList.remove("fade-in");
    work3.classList.add("fade-out");
    setTimeout(() => {
      work3.style.display = "none";
    }, 200);
  });
});

// page prajects, show work 4 when click a folder button Lit Academy landing page

const showWork4 = document.querySelector("#show-work-4");
const work4 = document.querySelector("#work4");
const btnClose4 = document.querySelector("#btn-close-4");

showWork4.addEventListener("click", () => {
  work4.classList.add("fade-in");
  work4.classList.remove("fade-out");

  setTimeout(() => {
    work4.style.display = "block";
  }, 200);

  btnClose4.addEventListener("click", () => {
    work4.classList.remove("fade-in");
    work4.classList.add("fade-out");
    setTimeout(() => {
      work4.style.display = "none";
    }, 200);
  });
});

// page prajects, show work 4 when click a folder button Lit Academy landing page

const showWork5 = document.querySelector("#show-work-5");
const work5 = document.querySelector("#work5");
const btnClose5 = document.querySelector("#btn-close-5");

showWork5.addEventListener("click", () => {
  work5.classList.add("fade-in");
  work5.classList.remove("fade-out");

  setTimeout(() => {
    work5.style.display = "block";
  }, 200);

  btnClose5.addEventListener("click", () => {
    work5.classList.remove("fade-in");
    work5.classList.add("fade-out");
    setTimeout(() => {
      work5.style.display = "none";
    }, 200);
  });
});