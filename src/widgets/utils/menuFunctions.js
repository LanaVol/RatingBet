const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const bg = document.querySelector(".bground");
const s1navigationList = document.querySelector(".forecasts__navigation");
const s2navigationList = document.querySelector(".match__navigation");

/**
 * Event listener for the 'click' event on the body element.
 * @param {MouseEvent} e - The click event object.
 */
body.addEventListener("click", handleClick);

/**
 * Handles click events on the body, performing actions based on the clicked elements.
 * @param {MouseEvent} e - The click event object.
 */
function handleClick(e) {
  // Open mobile menu
  if (e.target.classList.contains("header__burger")) {
    bg.classList.add("bg_active");
    menu.classList.add("header__menu_mobile-active");
  }

  // Close mobile menu
  if (
    e.target.classList.contains("close-btn") ||
    (e.target.classList.contains("bg_active") && menu.classList.contains("header__menu_mobile-active"))
  ) {
    bg.classList.remove("bg_active");
    menu.classList.remove("header__menu_mobile-active");
  }

  // Toggle active navigation link
  if (e.target.parentElement.classList.contains("navigation__link")) {
    if (e.target.parentElement.parentElement.classList.contains("forecasts__navigation")) {
      setActiveNavigationLink(e, s1navigationList);
    } else if (e.target.parentElement.parentElement.classList.contains("match__navigation")) {
      setActiveNavigationLink(e, s2navigationList);
    }
  }
}

/**
 * Sets the active state for the clicked navigation link.
 * @param {MouseEvent} e - The click event object.
 * @param {HTMLElement} currentNavigationElement - The current navigation element.
 */
function setActiveNavigationLink(e, currentNavigationElement) {
  const navigationList = Array.from(currentNavigationElement.children);

  navigationList.forEach((item) => {
    if (item.classList.contains("navigation__link_active")) {
      item.classList.remove("navigation__link_active");
    }
    if (item === e.target.parentElement) {
      item.classList.add("navigation__link_active");
    }
  });
}
