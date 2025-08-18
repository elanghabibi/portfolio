function mainPage(pageId) {
  let mainContent = document.querySelectorAll(".main-content");
  mainContent.forEach((p) => {
    p.classList.remove("active");
  });

  let mainNav = document.querySelectorAll(".main-nav")
  mainNav.forEach((n) => {
    n.classList.remove("active")
  })

  let targetNav = document.querySelector(`.main-nav-${pageId}`)
  targetNav.classList.add("active")

  let targetContent = document.getElementById(pageId);
  targetContent.classList.add("active");
}

function aboutPage(pageId) {
  let aboutContent = document.querySelectorAll(".about-content");
  aboutContent.forEach((p) => {
    p.classList.remove("active");
  });

  let aboutNav = document.querySelectorAll(".about-nav")
  aboutNav.forEach((n) => {
    n.classList.remove("active")
  })

  let targetNav = document.querySelector(`.about-nav-${pageId}`)
  targetNav.classList.add("active")


  let targetContent = document.getElementById(pageId);
  targetContent.classList.add("active");
}
