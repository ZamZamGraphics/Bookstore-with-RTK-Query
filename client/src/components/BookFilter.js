import { useDispatch, useSelector } from "react-redux";
import { featured } from "../features/filter/filterSlice";

export default function BookFilter() {
  const dispatch = useDispatch();
  const { featured: filter } = useSelector((state) => state.filter);

  let featuredActiveClass = filter ? "active-filter" : "";
  let allActiveClass = filter ? "" : "active-filter";

  const handleFeatured = () => {
    if (filter) {
      dispatch(featured(false));
    } else {
      dispatch(featured(true));
    }
  };

  const handleAll = () => dispatch(featured(false));

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${allActiveClass}`}
          onClick={handleAll}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${featuredActiveClass}`}
          onClick={handleFeatured}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
