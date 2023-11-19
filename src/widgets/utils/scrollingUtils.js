/**
 * Variables for scrolling navigation menu section-2 on mobile
 */
let isDragging = false;
let startX;
let scrollLeft;

const scrollContainer = document.querySelector(".navigation-scroll");

/**
 * Adds a mousedown event listener to enable dragging when the mouse button is pressed on the scroll container.
 * @param {MouseEvent} e - The mousedown event object.
 */
scrollContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

/**
 * Adds a mouseleave event listener to stop dragging when the mouse leaves the scroll container.
 */
scrollContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});

/**
 * Adds a mouseup event listener to stop dragging when the mouse button is released.
 */
scrollContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

/**
 * Adds a mousemove event listener to handle the drag movement and scroll the container accordingly.
 * @param {MouseEvent} e - The mousemove event object.
 */
scrollContainer.addEventListener("mousemove", (e) => {
  // Check if dragging is not active, exit the function
  if (!isDragging) return;

  // Calculate the new position of the mouse
  const x = e.pageX - scrollContainer.offsetLeft;

  // Calculate the distance moved and update the scrollLeft property of the scroll container
  const walk = (x - startX) * 1;
  scrollContainer.scrollLeft = scrollLeft - walk;
});
