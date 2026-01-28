const hoursEl = document.getElementById("hours");
const rateEl = document.getElementById("rate");
const totalEl = document.getElementById("total");
const yearEl = document.getElementById("year");

function formatMoney(n) {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function updateTotal() {
  const hours = Number(hoursEl.value);
  const rate = Number(rateEl.value);
  const total = hours * rate;
  totalEl.textContent = formatMoney(total);
}

hoursEl.addEventListener("input", updateTotal);
rateEl.addEventListener("input", updateTotal);

yearEl.textContent = new Date().getFullYear();
updateTotal();