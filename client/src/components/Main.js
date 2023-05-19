import BookFilter from "./BookFilter";
import BookLists from "./BookLists";

export default function Main() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <BookFilter />
        <BookLists />
      </div>
    </main>
  );
}
