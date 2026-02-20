import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function CollapsibleReferences({ references }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="references-container">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="references-button"
      >
        {isOpen ? 'Hide References' : 'Show References'}
      </button>

      {isOpen && (
        <div className="references-list-wrapper">
          <ol className="references-list">
            {references.map((ref, index) => (
              <li key={index}>{ref}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

const reference_1 = (
  <>Toledano, Y.; Knobler, H. Not All Patients with Type 2 Diabetes Are Equal. <em>Am J Med</em> <strong>2021</strong>, 134, 707-709, <a href ="https://doi.org/10.1016/j.amjmed.2021.02.005">doi:10.1016/j.amjmed.2021.02.005</a></>
);

const reference_2 = (
  <>Herder, C.; Roden, M. A novel diabetes typology: towards precision diabetology from pathogenesis to treatment. <em>Diabetologia</em> <strong>2022</strong>, 65, 1770-1781, <a href ='https://doi.org/10.1007/s00125-021-05625-x'>doi:10.1007/s00125-021-05625-x</a></>
);

const reference_3 = (
  <>Asplund, O.; Thangam, M.; Prasad, R.B.; Lejonberg, C.; Ekstrom, O.; Hakaste, L.; Smith, J.G.; Rosengren, A.H.; Oscarsson, J.; Carlsson, B.; et al. \
  Comorbidities and mortality in subgroups of adults with diabetes with up to 14 years follow-up: a prospective cohort study in Sweden. <em>Lancet Diabetes Endocrinol</em> <strong>2026</strong>, 14, 29-40, <a href ="https://doi.org/10.1016/S2213-8587(25)00283-9">doi:10.1016/S2213-8587(25)00283-9</a></>
);

const reference_4 = (
  <>American Diabetes Association Professional Practice Committee for, D. 9. 
  Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes-2026. 
  <em>Diabetes Care</em> <strong>2026</strong>, 49, S183-S215, <a href = "doi:10.2337/dc26-S009">doi:10.2337/dc26-S009</a></>
);

const reference_5 = (
  <>Buzzetti, R.; Tuomi, T.; Mauricio, D.; Pietropaolo, M.; Zhou, Z.; Pozzilli, P.; Leslie, R.D. Management of Latent Autoimmune Diabetes in Adults: 
  A Consensus Statement From an International Expert Panel. <em>Diabetes</em> <strong>2020</strong>, 69, 2037-2047, <a href ="https://doi.org/10.2337/dbi20-0017">doi:10.2337/dbi20-0017</a></>
);

const reference_6 = (
  <>Misra, S.; Wagner, R.; Ozkan, B.; Schon, M.; Sevilla-Gonzalez, M.; Prystupa, K.; Wang, C.C.; Kreienkamp, R.J.; Cromer, S.J.; Rooney, M.R.; et al.
  Precision subclassification of type 2 diabetes: a systematic review. <em>Commun Med (Lond)</em> <strong>2023</strong>, 3, 138, <a href ="https://doi.org/10.1038/s43856-023-00360-3">doi:10.1038/s43856-023-00360-3</a></>
);

const reference_7 = (
  <>Li, X.; Donnelly, L.A.; Slieker, R.C.; Beulens, J.W.J.; t Hart, L.M.; Elders, P.J.M.; Pearson, E.R.; van Giessen, A.; Leal, J.; Feenstra, T. 
  Trajectories of clinical characteristics, complications and treatment choices in data-driven subgroups of type 2 diabetes. <em>Diabetologia</em> <strong>2024</strong>, 67, 1343-1355, <a href ="https://doi.org/10.1007/s00125-024-06147-y">doi:10.1007/s00125-024-06147-y</a></>
);

const reference_8 = (
  <>Lu, B.; Li, P.; Crouse, A.B.; Grimes, T.; Might, M.; Ovalle, F.; Shalev, A. 
  Data-driven Cluster Analysis Reveals Increased Risk for Severe Insulin-deficient Diabetes in Black/African Americans. <em>J Clin Endocrinol Metab</em> <strong>2025</strong>, 110, 387-395, <a href ="https://doi.org/10.1210/clinem/dgae516">doi:10.1210/clinem/dgae516</a></>
);

const reference_9 = (
  <>Gomez-Peralta, F.; Pines-Corrales, P.J.; Santos, E.; Cuesta, M.; Gonzalez-Albarran, O.; Azriel, S.; On Behalf The Agora Diabetes Collaborative, G. Diabetes Management Based on the Phenotype and Stage of the Disease: 
  An Expert Proposal from the AGORA Diabetes Collaborative Group. <em>J Clin Med</em> <strong>2024</strong>, 13, <a href ="https://doi.org/10.3390/jcm13164839">doi:10.3390/jcm13164839</a></>
);

const reference_10 = (
  <>Xing, L.; Peng, F.; Liang, Q.; Dai, X.; Ren, J.; Wu, H.; Yang, S.; Zhu, Y.; Jia, L.; Zhao, S. Clinical Characteristics and Risk of Diabetic Complications in Data-Driven Clusters Among Type 2 Diabetes. 
  <em> Front Endocrinol (Lausanne)</em> <strong>2021</strong>, 12, 617628, <a href ="https://doi.org/10.3389/fendo.2021.617628">doi:10.3389/fendo.2021.617628</a></>
);

const reference_11 = (
  <>American Diabetes Association Professional Practice Committee for, D. 13. 
  Older Adults: Standards of Care in Diabetes-2026. 
  <em>Diabetes Care</em> <strong>2026</strong>, 49, S277-S296, <a href ="https://doi.org/10.2337/dc26-S013">doi:10.2337/dc26-S013</a></>
);

const reference_SAID = [
  reference_1, 
  reference_2, 
  reference_3, 
  reference_4,
  reference_5,    
];

const reference_SIDD = [
  reference_2,
  reference_3,
  reference_6,
  reference_7,
  reference_8,
  reference_1,
  reference_9,
  reference_4
];
  

const reference_SIRD = [
  reference_1,
  reference_2,
  reference_3,
  reference_6,
  reference_7,
  reference_9
];

const reference_MOD = [
  reference_8,
  reference_10,
  reference_2,
  reference_9
];  

const reference_MARD = [ 
 reference_8,
 reference_10,
 reference_2,
 reference_9,
 reference_11
]; 

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5001' // Local Flask server
    : 'https://diabetes-cluster-b062f200dfdc.herokuapp.com/'; // Deployed Flask server

function App() {
  const [inputs, setInputs] = useState({
    gad: '',
    hba1c: '',
    bmi: '',
    age: '',
    cpeptide: '',
    glucose: ''
  });
  const [glucoseUnit, setGlucoseUnit] = useState('');
  const [cpeptideUnit, setCpeptideUnit] = useState('');

  const clusterExplanations = {
    SAID: (
      <>The provided input most closely aligns with the <strong> Severe Autoimmune Diabetes (SAID) cluster. </strong>
       SAID is defined by the presence of positive glutamic acid decarboxylase autoantibodies at the time of diagnosis, so cases meeting this criterion are always classified as such. 
       SAID is consistent with type 1 diabetes (T1D), characterized by the autoimmune destruction of insulin-producing beta cells and reliance on insulin replacement therapy. 
       The SAID cluster is associated with an elevated risk of diabetic ketoacidosis, often at diagnosis, and development of microvascular complications [1-3].

       For most individuals with T1D, early and aggressive insulin replacement is recommended, and the use of SGLT2 inhibitors is potentially unsafe [1,4]. 
       For individuals with latent autoimmune diabetes in adults (LADA), a subset of T1D [5], approved guidelines for T1D or modified guidelines for type 2 diabetes may be considered depending on the individual’s remaining beta cell function [5].  
      <CollapsibleReferences references={reference_SAID} />
      </>
    ),
    SIDD: (
      <>The provided input most closely aligns with <strong> Severe Insulin-Deficient Diabetes (SIDD) </strong>, a subset of type 2 diabetes. 
      The SIDD cluster is characterized by high HbA1c, insulin deficiency as indicated by low C-peptide, and absence of glutamic acid decarboxylase autoantibodies. 
      This cluster has been associated with the highest risk of micro- and macrovascular complications [1,2,3-5]. 
      Aggressive glucose control is recommended [6]. 
      Insulin secretagogues, including incretin-based therapies, could be considered [6,7], and early treatment with insulin might be needed and beneficial [3,6,7,8]. 
      SGLT2 inhibitors may also be considered in those with heart or kidney disease, but their use should be carefully weighed against the risk of diabetic ketoacidosis and closely monitored [8].
      <CollapsibleReferences references={reference_SIDD} />
      </>
    ),
    SIRD: (
      <>The provided input most closely aligns with <strong>Severe Insulin-Resistant Diabetes (SIRD)</strong>, a subset of type 2 diabetes. 
      The SIRD cluster is characterized by high insulin resistance as indicated by high C-peptide and glucose, and the absence of glutamic acid decarboxylase autoantibodies. 
      Individuals in this cluster may be at higher risk for complications including nephropathy, metabolic dysfunction-associated steatotic liver disease, and cardiovascular disease [1-3,4,5]. 
      Aggressive glucose control is recommended [1].
      Early treatment with SGLT2 inhibitors or GLP1 RAs as well as adjuvant therapy with metformin could be considered [1,2,6]. 
      Insulin may be considered later in the disease process to help achieve better glycemic control [6].
      <CollapsibleReferences references={reference_SIRD} />
      </>
    ),
    MOD: (
      <>The provided input most closely aligns with <strong>Mild Obesity-Related Diabetes (MOD)</strong>, a subset of type 2 diabetes. 
      The MOD cluster is characterized by higher BMI, the absence of glutamic acid decarboxylase autoantibodies, and a lower complication risk [1,2]. 
      Weight loss with diet and exercise could be considered [3,4].
      Metformin, SGLT2 inhibitors, and GLP1 RAs might be beneficial as first line pharmacological therapies [3,4].
      <CollapsibleReferences references={reference_MOD} />
      </>
    ),
    MARD: (
      <>The provided input most closely aligns with <strong>Mild Age-Related Diabetes (MARD)</strong>, a subset of type 2 diabetes. 
      The MARD cluster is characterized by higher age at diagnosis, the absence of glutamic acid decarboxylase autoantibodies, and a lower complication risk [1,2].
      A more conservative therapeutic approach with lifestyle modifications and medications with low risk of hypoglycemia might be appropriate [3,4,5].
      <CollapsibleReferences references={reference_MARD} />
      </>
    ) 
  };
  
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "glucose" || name === "cpeptide") {
      if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setInputs({ ...inputs, [name]: value });
      }
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
  };

  

  const isIOSCap = window.Capacitor?.getPlatform?.() === 'ios';

  const onlySelectCleanlyOnIOS = (e) => {
    if (!isIOSCap) return;

    const y = window.scrollY || 0;       // remember where we are
    const selectEl = e.currentTarget;

    // If an input is focused, blur it first so the keyboard closes
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
      active.blur();
    }

    // Prevent the first tap from getting "eaten" by the scroll jump
    e.preventDefault();

    // After iOS does its scroll adjustment, restore and focus the select
    setTimeout(() => window.scrollTo(0, y), 0);
    setTimeout(() => {
      window.scrollTo(0, y);
      selectEl.focus();  // opens the picker on the same tap
    }, 50);
  };

  const keepScrollPositionOnBlurIOS = () => {
    if (!isIOSCap) return;
    const y = window.scrollY || 0;
    // iOS may jump after blur/keyboard close, so restore a few times
    setTimeout(() => window.scrollTo(0, y), 0);
    setTimeout(() => window.scrollTo(0, y), 80);
    setTimeout(() => window.scrollTo(0, y), 200);
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

    try {
      let glucoseValue = parseFloat(inputs.glucose);
      let cpeptideValue = parseFloat(inputs.cpeptide);

      if (glucoseUnit === 'mg/dL') {
        glucoseValue = glucoseValue / 18.0182;
      }

      if (cpeptideUnit === 'ng/mL') {
        cpeptideValue = cpeptideValue * 0.3312;
      }

      const someInputs = {
        gad: inputs.gad === 'Positive' ? 1 : 0,
        hba1c: parseFloat(inputs.hba1c),
        bmi: parseFloat(inputs.bmi),
        age: parseFloat(inputs.age),
        cpeptide: cpeptideValue,
        glucose: glucoseValue, 
      };

      // Send the request to the prediction endpoint  
      const response = await axios.post(`${API_URL}/predict`, someInputs);
      
      // Check if we have a successful response and handle it
      if (response.data) {
        // Store the entire result
        setResult(response.data);

      }

    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(`${error.response.data.error}`);
      } else if (error.response && error.response.status === 400) {
        setErrorMessage('The input values are out of range. Please enter valid values within the accepted range.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="app-container app-shell">
      <div className="form-container">
        <h2>Diabetes Cluster Prediction Tool</h2>
        <p className="app-description">
          This tool uses machine learning to classify patients into one of five diabetes subtypes based on clinical measurements at diagnosis. Understanding a patient's cluster may help guide personalized treatment decisions. (Average sensitivity: 93%, specificity: 98%).
        </p>
        <div className="notice-box">
          <strong>Instructions:</strong>
          <ul>
            <li>This tool should not be used for monogenic or gestational forms of diabetes.</li>
            <li>Please enter all values as recorded at or near the time of the patient's <strong>initial diabetes diagnosis</strong>.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="input-group">
            <label>GAD antibodies:</label>
            <select
              name="gad"
              value={inputs.gad}
              onChange={handleChange}
              required
              className={inputs.gad === '' ? 'placeholder' : 'valid'}
            >
              <option value="" disabled hidden>Select GAD Status</option>
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>
          </div>

          <div className="input-group">
            <label>HbA1c (%):</label>
            <input
              type="number"
              name="hba1c"
              value={inputs.hba1c}
              onChange={handleChange}
              onBlur={keepScrollPositionOnBlurIOS}
              placeholder="HbA1c (%)"
              required
            />
          </div>

          <div className="input-group">
            <label>BMI (kg/m²):</label>
            <input
              type="number"
              name="bmi"
              value={inputs.bmi}
              onChange={handleChange}
              onBlur={keepScrollPositionOnBlurIOS}
              placeholder="BMI (kg/m²)"
              required
            />
          </div>

          <div className="input-group">
            <label>Age (years):</label>
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleChange}
              onBlur={keepScrollPositionOnBlurIOS}
              placeholder="Age (years)"
              required
            />
          </div>

          <div className="input-group">
            <label>C-peptide:</label>
            <div className="input-row">
              <input
                type="number"
                name="cpeptide"
                value={inputs.cpeptide}
                onChange={handleChange}
                onBlur={keepScrollPositionOnBlurIOS}
                placeholder="C-peptide"
                required
              />
              <select
                name="cpeptideUnit"
                value={cpeptideUnit}
                onChange={(e) => setCpeptideUnit(e.target.value)}
                onMouseDown={onlySelectCleanlyOnIOS}
                onTouchStart={onlySelectCleanlyOnIOS}
                required
                className={cpeptideUnit === '' ? 'placeholder' : 'valid'}
              >
                <option value="" disabled hidden>Select Unit</option>
                <option value="ng/mL">ng/mL</option>
                <option value="nmol/L">nmol/L</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Glucose:</label>
            <div className="input-row">
              <input
                type="number"
                name="glucose"
                value={inputs.glucose}
                onChange={handleChange}
                onBlur={keepScrollPositionOnBlurIOS}
                placeholder="Glucose"
                required
              />
              <select
                name="glucoseUnit"
                value={glucoseUnit}
                onChange={(e) => setGlucoseUnit(e.target.value)}
                onMouseDown={onlySelectCleanlyOnIOS}
                onTouchStart={onlySelectCleanlyOnIOS}
                required
                className={glucoseUnit === '' ? 'placeholder' : 'valid'}
              >
                <option value="" disabled hidden>Select Unit</option>
                <option value="mg/dL">mg/dL</option>
                <option value="mmol/L">mmol/L</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-button">Predict</button>
        </form>

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
        
        {result && (
          <div className="result-container">
            {/* Display the resulting cluster */}
            <h3>Prediction Result</h3>
            <p><strong>Predicted Cluster:</strong> {result.cluster_label}</p>

            {/* Display the explanation for the cluster */}
            <div className="explanation-box">
              <h4>Cluster Explanation:</h4>
              {clusterExplanations[result.cluster_label] || (
                <p>No explanation available for this cluster.</p>
              )}
            </div>

            {/* Display the probabilities */}
            <div className="probabilities-section">
              <h4>Probability Per Cluster:</h4>
              <div className="probabilities-list">
                <div className="probability-item">
                  <span className="label">Severe Autoimmune Diabetes (SAID)</span>
                  <span className="value">{(result.probabilities[0] * 100).toFixed(2)}%</span>
                </div>
                <div className="probability-item">
                  <span className="label">Severe Insulin-Deficient Diabetes (SIDD)</span>
                  <span className="value">{(result.probabilities[1] * 100).toFixed(2)}%</span>
                </div>
                <div className="probability-item">
                  <span className="label">Severe Insulin-Resistant Diabetes (SIRD)</span>
                  <span className="value">{(result.probabilities[2] * 100).toFixed(2)}%</span>
                </div>
                <div className="probability-item">
                  <span className="label">Mild Obesity-Related Diabetes (MOD)</span>
                  <span className="value">{(result.probabilities[3] * 100).toFixed(2)}%</span>
                </div>
                <div className="probability-item">
                  <span className="label">Mild Age-Related Diabetes (MARD)</span>
                  <span className="value">{(result.probabilities[4] * 100).toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* Display SHAP explanation plot */}
            {result.shap_plot && (
              <div className="shap-section">
                <h4>Feature Importance (SHAP Analysis):</h4>
                <img
                  src={`data:image/png;base64,${result.shap_plot}`}
                  alt="SHAP Feature Importance"
                  className="shap-image"
                />
                <p>
                  This chart shows how each input feature contributed to this specific prediction.
                  Features pushing the prediction higher are shown in red, while features pushing it lower are shown in blue.
                </p>
              </div>
            )}
          </div>
        )}
    
    </div>
  </div> 
  );
}

export default App;