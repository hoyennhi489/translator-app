const inputText = document.getElementById("inputText");
const translateBtn = document.getElementById("translateBtn");
const resultDiv = document.getElementById("result");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

translateBtn.addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) {
    resultDiv.textContent = "⚠ Please enter some text.";
    return;
  }

  resultDiv.textContent = "⏳ Translating...";
});