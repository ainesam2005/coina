const amount = document.getElementById("amount");
const amountLabel = document.getElementById("amountLabel");
const traditionalFee = document.getElementById("traditionalFee");
const coinFee = document.getElementById("coinFee");
const saving = document.getElementById("saving");

function updateCalculator(){
  const value = Number(amount.value);
  // Illustrative model based on the public site's $200 example:
  const traditional = value * (13.8 / 200);
  const coin = value * (1 / 200);
  const diff = traditional - coin;
  amountLabel.textContent = `$${value.toLocaleString()}`;
  traditionalFee.textContent = `$${traditional.toFixed(2)}`;
  coinFee.textContent = `$${coin.toFixed(2)}`;
  saving.textContent = `$${diff.toFixed(2)}`;
}
amount.addEventListener("input", updateCalculator);
updateCalculator();

// Keep the navbar compact after scrolling.
const nav = document.querySelector(".site-nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});
