import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, ondelete, onTitleEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const deleteBook = () => {
    ondelete(book.id);
  };

  const handleClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (id, title) => {
    onTitleEdit(book.id, title);
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} handleEditSubmit={handleEditSubmit} />;
  }

  return (
    <div className="book-show">
      {content}
      <img alt="images" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div className="actions">
        <button onClick={handleClick} className="edit">
          Edit
        </button>
        <button onClick={deleteBook} className="delete">
          delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
