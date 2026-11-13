// Locks books and shows an animated padlock. No other file needs changing.
// To UNLOCK a book later, delete its number from this list (0 = Book 1, 1 = Book 2, 2 = Book 3, 3 = Book 4).
const LOCKED_BOOKS = [2, 3];

(function () {
  const css = `
  .book-card.locked{cursor:not-allowed}
  .book-card.locked .book-body{filter:grayscale(.55) brightness(.72)}
  .book-card.locked:hover .book-body{transform:none;box-shadow:5px 0 0 -1px #efe4cd,7px 0 0 -1px #cdbb99,12px 16px 24px rgba(40,25,15,.3)}
  .book-card.locked:hover .book3d::after{opacity:1;transform:none}
  .lock-veil{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;border-radius:2px 7px 7px 2px;background:rgba(15,10,6,.4);color:#f6ecd8;pointer-events:none}
  .lock-icon{width:48px;height:48px;border-radius:50%;background:#17110d;border:1px solid #d9b778;display:flex;align-items:center;justify-content:center;animation:lockPulse 2.8s ease-out infinite}
  .lock-icon svg{width:22px;height:22px}
  .lock-text{font-size:10px;letter-spacing:.22em}
  .book-card.shake .book3d{animation:lockShake .5s}
  .book-card.shake .lock-icon{animation:lockWiggle .5s}
  @keyframes lockPulse{0%{box-shadow:0 0 0 0 rgba(217,183,120,.55)}70%,100%{box-shadow:0 0 0 16px rgba(217,183,120,0)}}
  @keyframes lockShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-9px)}40%{transform:translateX(9px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}
  @keyframes lockWiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}75%{transform:rotate(-8deg)}}
  @media (prefers-reduced-motion:reduce){.lock-icon,.book-card.shake .book3d,.book-card.shake .lock-icon{animation:none}}
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const padlock = '<svg viewBox="0 0 24 24" fill="none" stroke="#d9b778" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

  document.querySelectorAll(".book-card").forEach(function (card) {
    const index = Number(card.dataset.book);
    if (!LOCKED_BOOKS.includes(index)) return;
    card.classList.add("locked");
    card.setAttribute("aria-label", "Locked book, coming soon");
    const holder = card.querySelector(".book3d") || card;
    holder.insertAdjacentHTML("beforeend",
      '<div class="lock-veil"><span class="lock-icon">' + padlock + '</span><span class="lock-text">COMING SOON</span></div>');
    const hint = card.querySelector(".book-hint");
    if (hint) hint.textContent = "LOCKED · COMING SOON";
  });

  // Runs before script.js, so a locked book never opens. It just shakes.
  document.addEventListener("click", function (e) {
    const card = e.target.closest(".book-card.locked");
    if (!card) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
  }, true);
})();