import React, { useState } from "react";
import "./Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("vi");
  const [result, setResult] = useState("");

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setResult("⚠ Please enter some text.");
      return;
    }

    setResult("⏳ Translating...");

    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}&langpair=${sourceLang}|${targetLang}`;

      const res = await fetch(url);
      const data = await res.json();
      setResult(data.responseData.translatedText);
    } catch (err) {
      console.error("Translation failed:", err);
      setResult("Translation failed.");
    }
  };

  return (
    <div className="container">
      <h1>English ↔ Vietnamese Translator</h1>

      <textarea
        placeholder="Type text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <div className="lang-select">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
        </select>

        <span>→</span>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="vi">Vietnamese</option>
          <option value="en">English</option>
        </select>
      </div>

      <button onClick={handleTranslate}>Translate</button>

      <div id="result">{result}</div>
    </div>
  );
};

export default Translator;