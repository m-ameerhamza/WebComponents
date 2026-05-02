    const toggle = document.getElementById("toggle");

    toggle.addEventListener("change", () => {
      document.body.style.transition = "0.5s ease";

      if (toggle.checked) {
        document.body.style.background = "#bfc5d1";
      } else {
        document.body.style.background = "#d8dce5";
      }
    });