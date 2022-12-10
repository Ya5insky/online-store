
      const button = document.querySelector(".tabsbut");
      button.addEventListener("click", (event) => {
        
        event.preventDefault();
        const { showtext } = event.currentTarget.dataset;
        if (event.currentTarget.textContent === showtext) {
          event.currentTarget.textContent = hidetext;
        } else {
          event.currentTarget.textContent = showtext;
        }
      });