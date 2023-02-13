import Title from "./Title";
import Author from "./Author";
import Image from "./Image";

const Book = (props) => {
    const { title, author, image, getBook, id } = props;
    return (
        <div className="bookBox">
            <Image image={image} />
            <Title title={title} />
            <Author author={author} />
            <button onClick={() => {getBook(id)}}>Click Me</button>
        </div>
    )
}
export default Book