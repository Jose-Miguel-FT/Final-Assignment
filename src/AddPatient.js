import React from 'react';
import './style.css';
import FilterCategory from './FilterCategory';

function AddPatient() {
  // React hooks to input new patients.
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [prescription, setPrescription] = React.useState('');
  const [allergy, setAllergy] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [newPatientsArray, setNewPatientsArray] = React.useState([]);

  // This will just update the array with the new patients that get added.
  const addPatient = () => {
    setNewPatientsArray([
      ...newPatientsArray,
      [
        treatId,
        treatCourseId,
        type,
        category,
        name,
        prescription,
        allergy,
        startDate,
      ],
    ]);
  };

  // Stringifying the array of the patients in order to pass it
  // on to the FilterCategory component.
  const jsonData = JSON.stringify(newPatientsArray);

  // Boxes to write the input of the new patients.
  return (
    <div>
      <div className="main">
        <p>Add patient form:</p>
        <input
          placeholder="Treatment ID"
          type="text"
          value={treatId}
          onChange={(event) => setTreatId(event.target.value)}
        />
        <input
          placeholder="Treatment Course ID"
          type="text"
          value={treatCourseId}
          onChange={(event) => setTreatCourseId(event.target.value)}
        />
        <input
          placeholder="Type"
          type="text"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <input
          placeholder="Category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Prescription"
          type="text"
          value={prescription}
          onChange={(event) => setPrescription(event.target.value)}
        />
        <input
          placeholder="Allergy"
          type="text"
          value={allergy}
          onChange={(event) => setAllergy(event.target.value)}
        />
        <input
          placeholder="Start Date"
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <button onClick={addPatient}> ADD PATIENT </button>
      </div>
      <br />
      {/* Calling the FilterCategory component inside another div
      tag in order to render the app with both components in 
      different containers.  */}
      <div className="main">
        <FilterCategory string={jsonData} />
      </div>
    </div>
  );
}

export default AddPatient;
