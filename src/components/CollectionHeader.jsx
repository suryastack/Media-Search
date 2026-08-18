import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionHeader = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const handleClearCollection = () => {
    if (collection.length === 0) {
      alert("Your collection is already empty.");
      return;
    }

    dispatch(clearCollection());
  };
  return (
    <div className="border-b border-gray-600 px-5 pb-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-(--c4) sm:text-3xl">
              Your Collection
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              {collection.length} saved{" "}
              {collection.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Home */}
            <Link
              to="/"
              className="flex items-center gap-2 rounded-lg bg-(--c4) px-3 py-2 text-sm font-semibold text-(--c1) transition hover:opacity-90 active:scale-95 sm:px-4"
            >
              <i className="ri-home-4-line"></i>
              <span>Home</span>
            </Link>

            {/* Clear All */}
            <button
              onClick={handleClearCollection}
              className="flex items-center gap-2 rounded-lg border-2 border-red-500/50 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10 active:scale-95 sm:px-4"
            >
              <i className="ri-delete-bin-line"></i>
              <span className="hidden sm:inline">Clear all</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default CollectionHeader
