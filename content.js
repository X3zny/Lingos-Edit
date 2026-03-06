function injectCSS() {
  const style = document.createElement("style");

  style.textContent = `
.btn:not([class^=btn-outline-]):not([class*=" btn-outline-"]):not(.btn-secondary):not(.btn-light):not(.btn-link) {
    --ar-btn-color: #0000009e;
}

[data-bs-theme="dark"] body.bg-secondary {
    background: #000000 url('link do zdiecia') center center / cover no-repeat fixed !important;
    background-color: #000000 !important;
}

.card {
    --ar-card-bg: #00000075;
}
`;

  document.head.appendChild(style);
}

function removeElements() {
  const header = document.querySelector("#main-header");
  if (header) header.remove();

  const premiumAlert = document.querySelector(".alert-danger.custom-mb");
  if (premiumAlert) premiumAlert.remove();
}

injectCSS();
removeElements();

const observer = new MutationObserver(() => {
  removeElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
