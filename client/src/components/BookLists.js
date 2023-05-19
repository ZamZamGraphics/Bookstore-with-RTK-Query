import BookItem from "./BookItem";
import Error from "../components/Error";
import { useGetBooksQuery } from "../features/api/apiSlice";
import { useSelector } from "react-redux";

export default function BookLists() {
  const { featured, search } = useSelector((state) => state.filter);
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ featured, search });

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <h3>Loading ...</h3>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No books found!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books.map((book) => <BookItem key={book.id} book={book} />);
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
}
