import React, { useState } from "react";
import "./AIDiagnostic.css"; 
import aipic from "../../assets/aiPic.png"


const AIDiagnostic = () => {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);

  const getDummyDiagnosis = () => {
    const responses = [
      "It could be a mild cold. Stay hydrated and get some rest.",
      "Possible symptoms of flu. Consider seeing a doctor if symptoms persist.",
      "Might be a case of seasonal allergies. Avoid allergens and take antihistamines.",
      "Could be a stomach virus. Stay hydrated and eat light meals.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptoms.trim() === "") return;
    const response = getDummyDiagnosis();
    setDiagnosis(response);
  };

  return (
    <div className="AIfull">
    <div className="ai-diagnostic-container">
      <h1>AI Medical Diagnosis</h1>
      <p>Enter your symptoms, and our AI will provide possible insights.</p>

      <form onSubmit={handleSubmit} className="symptom-form">
        <textarea
          rows="4"
          placeholder="e.g. fever, cough, sore throat"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button type="submit">Get Diagnosis</button>
      </form>

      {diagnosis && (
        <div className="diagnosis-result">
          <h2 className="diagnosis-label">Possible Diagnosis:</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
    <div className="picContainer">
      <img src= {aipic} alt="" className="aipic" />
    </div>
    </div>
  );
};

export default AIDiagnostic;
