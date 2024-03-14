window.onload = () => {
  main();
};

function main() {
  const root = document.querySelector(".container");
  const btn = document.querySelector("#change-btn");
  const output = document.querySelector("input");
  btn.addEventListener("click", function () {
    const bgColor = generateHexaColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  const generateHexaColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  };
  console.log(generateHexaColor());
}
