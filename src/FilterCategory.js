import React from 'react';

function FilterCategory(props) {
  // Parsing the data to operate with the array of the patients.
  const patientsArray = JSON.parse(props.string);

  // Using hooks to manipulate the input the user writes
  // for the category filter.
  const [filter, setFilter] = React.useState('');

  // This will only show the elements of the item inside the patientsArray
  // array which include whatever the user inputs as the filter.
  const filtered = patientsArray
    .filter((f) => f[3].includes(filter))
    .map((f) => (
      <li key={f}>
        Treatment ID: {f[0]}
        <br />
        Treatment Course ID: {f[1]}
        <br />
        Type: {f[2]}
        <br />
        Category: {f[3]}
        <br />
        Name: {f[4]}
        <br />
        Prescription:
        <span className="prescription">{f[5]}</span>
        <br />
        Allergy:<span className="allergy">{f[6]}</span>
        <br />
        Date: {f[7]}
      </li>
    ));

  // Input tag for the user to input the category to filter.
  return (
    <div>
      <p>Filter patient based on the category:</p>
      <input
        id="filter"
        placeholder="Category"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul className="filteredList">{filtered}</ul>
    </div>
  );
}

export default FilterCategory;
