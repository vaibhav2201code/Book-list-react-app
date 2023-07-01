import { useState } from "react";
function BookCreate({ onSubmit }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
    setName("");
  };
 
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input onChange={handleChange} value={name} className="input" />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
