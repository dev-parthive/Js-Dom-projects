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
  //Change button functionaltiy
  btn.addEventListener("click", () => {
    const bgColor = GenerateRGBColor();
    root.style.backgroundColor = bgColor;
    textColor.innerText = bgColor;
  });

  //   auto color change button functionality
  autoBtn.addEventListener("click", function () {
    autoBtn.style.display = "none";
    autoBtnStop.style.display = "block";
    const intervalId = window.setInterval(() => {
      const bgColor = GenerateRGBColor();
      root.style.backgroundColor = bgColor;
      textColor.innerText = bgColor;
    }, 5000);

    autoBtnStop.addEventListener("click", function () {
      autoBtnStop.style.display = "none";
      autoBtn.style.display = "block";
      clearInterval(intervalId);
      textColor.innerText = "rgb(0, 0, 0)";
    });
  });

  // Change the background color by RGB
  function GenerateRGBColor() {
    const Red = Math.floor(Math.random() * 255);
    const Green = Math.floor(Math.random() * 255);
    const Blue = Math.floor(Math.random() * 255);

    return `rgb(${Red}, ${Green}, ${Blue})`;
  }
}
