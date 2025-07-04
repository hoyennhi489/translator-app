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

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang.value}|${targetLang.value}`;
    const res = await fetch(url);
    const data = await res.json();

    const translation = data.responseData.translatedText;
    resultDiv.textContent = `${translation}`;
  } catch (err) {
    console.error("Translation failed:", err);
    resultDiv.textContent = "Translation failed.";
  }
});