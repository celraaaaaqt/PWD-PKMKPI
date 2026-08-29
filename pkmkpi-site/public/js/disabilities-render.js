// public/js/disabilities-render.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("disabilities-grid");
  if (!grid || typeof DISABILITY_CLASSIFICATIONS === "undefined") return;

  function cardHTML(d) {
    return `
      <article class="card-hover-lift hc-surface bg-white border border-hairline rounded-sm p-6 sr-item">
        <div class="w-12 h-12 rounded-xs text-primary-light mb-5 flex items-center justify-center mb-4" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            ${d.iconSvg}
          </svg>
        </div>
        <h3 class="text-title-md text-primary mb-2">${d.name}</h3>
        <p class="text-body-sm text-ink-muted leading-relaxed mb-3">${d.summary}</p>
        <p class="text-body-sm text-ink-light leading-relaxed"><span class="font-semibold text-ink">Rights &amp; support:</span> ${d.rights}</p>
      </article>
    `;
  }

  grid.innerHTML = DISABILITY_CLASSIFICATIONS.map(cardHTML).join("");

  grid.querySelectorAll(".sr-item").forEach(el => {
    el.classList.remove("sr-item");
    el.style.opacity = "1";
    el.style.transform = "none";
  });
});