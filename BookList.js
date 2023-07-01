import BookShow from "./BookShow";
function BookList({ books, ondelete, onTitleEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        book={book}
        key={book.id}
        ondelete={ondelete}
        onTitleEdit={onTitleEdit}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
