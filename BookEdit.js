import { useState } from "react";

function BookEdit({ book, handleEditSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const titleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditSubmit(book.id, newTitle);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input onChange={titleChange} value={newTitle} className="input" />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
