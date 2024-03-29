
    const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
    const smallMenu = document.querySelector(".header__sm-menu");
    const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
    const headerHamMenuCloseBtn = document.querySelector(
      ".header__main-ham-menu-close"
    );
    const headerSmallMenuLinks = document.querySelectorAll(
      ".header__sm-menu-link"
    );

    hamMenuBtn.addEventListener("click", () => {
      smallMenu.classList.toggle("header__sm-menu--active");
      headerHamMenuBtn.classList.toggle("d-none");
      headerHamMenuCloseBtn.classList.toggle("d-none");
    });

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      });
    }

    const headerLogoConatiner = document.querySelector(
      ".header__logo-container"
    );

    headerLogoConatiner.addEventListener("click", () => {
      location.href = "/";
    });
  