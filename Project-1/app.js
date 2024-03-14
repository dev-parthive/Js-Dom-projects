// dom selection

window.onload = () => {
  Main();
};

function Main() {
  const root = document.querySelector("#root");
  const btn = document.querySelector("#change-btn");
  const autoBtn = document.querySelector("#change-btn-auto");
  const autoBtnStop = document.querySelector("#change-btn-auto-stop");
  const textColor = document.querySelector("#text-color");
  autoBtnStop.style.display = "none";

  //   Event Listeners

  btn.addEventListener("click", () => {
    root.style.backgroundColor = `${GenerateRGBColor()}`;
  });

  // Change the background color by RGB
  function GenerateRGBColor() {
    const Red = Math.floor(Math.random() * 255);
    const Green = Math.floor(Math.random() * 255);
    const Blue = Math.floor(Math.random() * 255);

    return `rgb(${Red}, ${Green}, ${Blue})`;
  }
}
