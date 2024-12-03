import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import './App.css';

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5000' // Local Flask server
    : 'https://diabetes-cluster-b062f200dfdc.herokuapp.com/'; // Deployed Flask server

function App() {
  const [inputs, setInputs] = useState({
    gad: '',
    hba1c: '',
    bmi: '',
    age: '',
    cpeptide: '',
    glucose: '',
  });
  const [glucoseUnit, setGlucoseUnit] = useState('');
  const [cpeptideUnit, setCpeptideUnit] = useState('');
  const [currentMedications, setCurrentMedications] = useState({
    insulin: false,
    glp1rAgonist: false,
    sglt2Inhibitor: false,
    metformin: false,
    other: false,
    none: false,
  });
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isManagementChanged, setIsManagementChanged] = useState('');
  const [futureMedications, setFutureMedications] = useState({
    insulin: false,
    glp1rAgonist: false,
    sglt2Inhibitor: false,
    metformin: false,
    other: false,
    none: false,
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [medicationError, setMedicationError] = useState('');
  const [userId, setUserId] = useState(null); // Generate a new user ID for each session

  const medicationLabels = {
    insulin: 'Insulin',
    glp1rAgonist: 'GLP-1 Receptor Agonist',
    sglt2Inhibitor: 'SGLT2 Inhibitor',
    metformin: 'Metformin',
    other: 'Other',
    none: 'None',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCurrentMedications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFutureMedicationChange = (e) => {
    const { name, checked } = e.target;
    setFutureMedications((prev) => ({ ...prev, [name]: checked }));
    setMedicationError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setResult(null);

    if (!inputs.gad || !inputs.hba1c || !inputs.bmi || !inputs.age || !inputs.cpeptide || !inputs.glucose) {
      setErrorMessage('All fields must be filled with valid values.');
      return;
    }

    if (!glucoseUnit || !cpeptideUnit) {
      setErrorMessage('Please select units for glucose and C-peptide.');
      return;
    }

    if (!Object.values(currentMedications).some((checked) => checked)) {
      setErrorMessage('Please select the patient\'s current medications.');
      return;
    }

    try {
      const generatedUserId = uuidv4(); // Generate a new user ID for this submission
      setUserId(generatedUserId);

      const response = await axios.post(`${API_URL}/predict`, {
        user_id: generatedUserId,
        gad: inputs.gad === 'Positive' ? 1 : 0,
        hba1c: parseFloat(inputs.hba1c),
        bmi: parseFloat(inputs.bmi),
        age: parseFloat(inputs.age),
        cpeptide: parseFloat(inputs.cpeptide),
        glucose: parseFloat(inputs.glucose),
        cpeptide_unit: cpeptideUnit,
        glucose_unit: glucoseUnit,
        medications: currentMedications,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(`Server Error: ${error.response.data.error}`);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const handleMedicationSubmit = async () => {
    if (!userId) {
      setMedicationError('No patient data available. Please complete the prediction form first.');
      return;
    }

    if (isManagementChanged === 'yes' && !Object.values(futureMedications).some((checked) => checked)) {
      setMedicationError('Please select at least one medication going forward.');
      return;
    }

    try {
      await axios.post(`${API_URL}/submit_medications`, {
        user_id: userId, // Use the same user_id from the initial form submission
        isManagementChanged,
        medications: futureMedications,
      });
      setSubmissionStatus('Medications have been saved successfully.');
    } catch (error) {
      console.error('Error:', error);
      setMedicationError('Failed to save medications. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Diabetes Cluster Prediction</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>GAD Antibodies:</label>
            <select name="gad" value={inputs.gad} onChange={handleChange} required>
              <option value="" disabled hidden>Select GAD Status</option>
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>
          </div>
          <div className="input-group">
            <label>HbA1c (%):</label>
            <input type="number" name="hba1c" value={inputs.hba1c} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>BMI (kg/m²):</label>
            <input type="number" name="bmi" value={inputs.bmi} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Age (Years):</label>
            <input type="number" name="age" value={inputs.age} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>C-peptide:</label>
            <input type="number" name="cpeptide" value={inputs.cpeptide} onChange={handleChange} required />
            <select name="cpeptideUnit" value={cpeptideUnit} onChange={(e) => setCpeptideUnit(e.target.value)} required>
              <option value="" disabled hidden>Select Unit</option>
              <option value="nmol/L">nmol/L</option>
              <option value="ng/mL">ng/mL</option>
            </select>
          </div>
          <div className="input-group">
            <label>Glucose:</label>
            <input type="number" name="glucose" value={inputs.glucose} onChange={handleChange} required />
            <select name="glucoseUnit" value={glucoseUnit} onChange={(e) => setGlucoseUnit(e.target.value)} required>
              <option value="" disabled hidden>Select Unit</option>
              <option value="mmol/L">mmol/L</option>
              <option value="mg/dL">mg/dL</option>
            </select>
          </div>
          <button type="submit">Predict</button>
        </form>
        {result && <p>Prediction: {result.cluster_label}</p>}
        <div>
          <h3>Submit Follow-Up Medications</h3>
          <button onClick={handleMedicationSubmit}>Submit Medications</button>
        </div>
      </div>
    </div>
  );
}

export default App;
