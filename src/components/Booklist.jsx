import Book from "./Book"
import books from "../data.js"

const Booklist = (props) => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    }

    return (
        <div className="container">
            {books.map((book, index) => {
                return (
                    <Book
                        // title={book.title}
                        // author={book.author}
                        // image={book.image}
                        {...book}
                        key={book.id}
                        getBook={getBook}
                    />
                )
            })}
        </div>
    )
}
export default Booklist