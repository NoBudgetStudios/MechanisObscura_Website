const FORM_ID = "1FAIpQLSfSYgZU62lGugPZfwzO7fjFydnL6xQSW04nfwHlU13seBG7pg";
const ENTRY_EMAIL = "entry.445256754";

(function initInvisibleGoogleForm() {
  const gform = document.getElementById("gform");
  gform.action = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  const emailHidden = document.createElement("input");
  emailHidden.type = "hidden";
  emailHidden.name = ENTRY_EMAIL;
  emailHidden.id = "g_email";
  gform.appendChild(emailHidden);
})();

const emailInput = document.getElementById("emailInput");
const consentChk = document.getElementById("consentChk");
const submitBtn  = document.getElementById("emailSubmit");
const msgOK      = document.getElementById("nlMsg");
const msgErr     = document.getElementById("nlErr");

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

submitBtn.addEventListener("click", () => {
  const v = (emailInput.value || "").trim();
  const ok = isValidEmail(v) && consentChk.checked;

  if (!ok) {
    msgErr.hidden = false;
    msgOK.hidden = true;
    return;
  }

  document.getElementById("g_email").value = v;
  document.getElementById("gform").submit();

  submitBtn.disabled = true;
  emailInput.disabled = true;
  consentChk.disabled = true;
  msgErr.hidden = true;
  msgOK.hidden = false;
});
