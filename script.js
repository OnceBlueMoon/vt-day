  const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });

const yesBtn = document.getElementById("yesBtn");

  yesBtn.addEventListener("click", () => {
    createHearts();

      setTimeout(() => {
        window.location.href = "https://www.thecheesecakefactory.com/menu/cheesecakes-specialty-desserts";
      }, 300);
    }, 3000);
  });

  function createHearts() {
    const duration = 3000;
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "💖";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, 150);

    setTimeout(() => clearInterval(interval), duration);
  }
