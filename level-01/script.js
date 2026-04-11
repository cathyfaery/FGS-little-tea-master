fetch("flashcards.csv")
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split("\n").slice(1);
    const container = document.getElementById("card-container");

    lines.forEach(line => {
      const [zhName, enName, zhDesc, enDesc] = line.split(",");

      const row = document.createElement("div");
      row.className = "card-row";

      // 中文卡片
      const zhCard = document.createElement("div");
      zhCard.className = "card";
      zhCard.innerHTML = `
        <div class="card-inner">
          <div class="card-face front-zh">${zhName}</div>
          <div class="card-face back-zh">${zhDesc}</div>
        </div>
      `;
      zhCard.addEventListener("click", () =>
        zhCard.classList.toggle("flipped")
      );

      // 英文卡片
      const enCard = document.createElement("div");
      enCard.className = "card";
      enCard.innerHTML = `
        <div class="card-inner">
          <div class="card-face front-en">${enName}</div>
          <div class="card-face back-en">${enDesc}</div>
        </div>
      `;
      enCard.addEventListener("click", () =>
        enCard.classList.toggle("flipped")
      );

      row.appendChild(zhCard);
      row.appendChild(enCard);
      container.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading CSV:", error));
