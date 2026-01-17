fetch("flashcards.csv")
  .then(res => res.text())
  .then(text => {
    const lines = text.trim().split("\n").slice(1);
    const container = document.getElementById("card-container");

    lines.forEach(line => {
      const [question, answer] = line.split(",");

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-face front">${question}</div>
          <div class="card-face back">${answer}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });

      container.appendChild(card);
    });
  });
