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

// page prajects, show work 1 when click a folder button

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