import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import CollectionHeader from "../components/CollectionHeader";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="pt-10">
      <CollectionHeader />
      {collection.length === 0 ? (
        <div className="flex mt-30 min-h-[50vh] flex-col items-center justify-center px-5 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-gray-500">
            <i className="ri-bookmark-line text-4xl"></i>
          </div>

          <h2 className="text-xl font-semibold text-(--c4) sm:text-2xl">
            Your collection is empty
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Save your favorite photos, videos, and GIFs to find them here later.
          </p>

          <Link
            to="/"
            className="mt-6 rounded-lg bg-(--c4) px-5 py-2.5 font-semibold text-(--c1) transition hover:opacity-90 active:scale-95"
          >
            Explore Media
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 px-5 pb-10 pt-8 sm:grid-cols-2 sm:px-10 md:grid-cols-3 lg:grid-cols-5">
          {collection.map((item) => (
            <div key={item.id}>
              <CollectionCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
