function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const countClicks = createCounter();
const button = document.getElementById("clickBtn");
const display = document.getElementById("countDisplay");

button.addEventListener("click", () => {
  const clicks = countClicks();
  display.textContent = `Clicked: ${clicks} times`;
});
