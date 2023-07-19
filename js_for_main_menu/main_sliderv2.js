let inputSlider = document.querySelectorAll(".slide");
let mainSliders = document.querySelectorAll(".main_slider");
let btnNext = document.querySelectorAll(".arrow_right");
let btnPrev = document.querySelectorAll(".arrow_left");
let inputIdName = 1;

function mainSliderWow() {
  prevSlide();
  nextSlide();
  inputSlider.forEach((e) => {
    e.addEventListener("click", () => {
      inputIdName = e.id;

      if (inputIdName == 1) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 2) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 3) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 4) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 5) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 6) {
        hiddenAll();
        showChecked();
      } else if (inputIdName == 0) {
      }
    });
  });

  function hiddenAll() {
    let mainSlider = document.querySelectorAll(".main_slider");
    mainSlider.forEach((e) => {
      e.classList.add("hidden");
      if (e.id == inputIdName) {
        e.classList.remove("hidden");
      }
    });
  }

  function nextSlide() {
    btnNext.forEach((e) => {
      e.addEventListener("click", () => {
        nextSix();
        if (inputIdName >= 6) {
          inputIdName = 0;
        } else {
          inputIdName = parseInt(inputIdName) + 1;

          hiddenAll();
          showChecked();
        }
      });
    });
  }

  function prevSlide() {
    btnPrev.forEach((e) => {
      e.addEventListener("click", () => {
        inputIdName = parseInt(inputIdName) - 1;

        hiddenAll();
        prevNull();
        showChecked();
      });
    });
  }

  function nextSix() {
    if (inputIdName >= 6) {
      inputIdName = 0;
    }
  }

  function prevNull() {
    if (inputIdName == 0) inputIdName = 6;
    hiddenAll();
  }
  function showChecked() {
    mainSliders.forEach((e) => {
      if (inputIdName == e.id) {
        e.querySelector(`input[id="${e.id}"]`).checked = true;
      }
    });
  }
}

mainSliderWow();
