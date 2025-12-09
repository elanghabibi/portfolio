function toggleMenu() {
  const navMobile = document.querySelector("#navMobile");
  navMobile.classList.toggle("active");
}

function myAge() {
  const myBornYear = 2009;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const myAgeText = document.getElementById("myAge");

  const myAge = currentYear - myBornYear;

  myAgeText.textContent = myAge;
}

function updateKetDate() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const year = currentDate.getFullYear();

  const ketWaktu = document.getElementById("ketWaktu");
  ketWaktu.textContent = "";

  if (hours >= 5 && hours <= 11) {
    ketWaktu.textContent = "Morning";
  } else if (hours >= 12 && hours <= 16) {
    ketWaktu.textContent = "Afternoon";
  } else if (hours >= 17 && hours <= 23) {
    ketWaktu.textContent = "Evening";
  } else if (hours >= 0 && hours <= 4) {
    ketWaktu.textContent = "Evening";
  }

  const currentYearInf = document.getElementById("currentYearInf");
  currentYearInf.textContent = year;
}

function goUp() {
    const goUpBtn = document.getElementById('goUp');

    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            goUpBtn.classList.add('show')
        } else {
            goUpBtn.classList.remove('show')
        }
    })
}

goUp()

myAge();
updateKetDate();
setInterval(updateKetDate, 1000);



// Toggle Dark Mode
const toggle = document.getElementById("toggleTheme");
const toggleCircle = document.getElementById("toggleCircle");
const html = document.documentElement;
const toggleIcon = document.createElement("i");
toggleIcon.classList.add("bx");

// Cek apakah dark mode tersimpan
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggleIcon.classList.remove("bx-sun");
  toggleIcon.classList.add("bx-moon");
} else {
  html.classList.remove("dark");
  toggleIcon.classList.remove("bx-moon");
  toggleIcon.classList.add("bx-sun");
}

toggle.addEventListener("click", function () {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleIcon.classList.remove("bx-sun");
    toggleIcon.classList.add("bx-moon");
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.classList.remove("bx-moon");
    toggleIcon.classList.add("bx-sun");
  }
});

toggleCircle.appendChild(toggleIcon);