import { useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([{ name: "", lastName: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      lastName: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      <h1>User Records</h1>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="First Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
