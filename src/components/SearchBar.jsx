import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.trim()) return;

    dispatch(setQuery(data.trim()));
    setData("");
  };

  return (
    <section className="flex min-h-[55vh] items-center justify-center bg-(--c3) px-5 py-5 sm:px-8">
      <div className="w-full max-w-3xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-(--c4) sm:text-4xl lg:text-5xl">
            Discover something amazing
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Search photos, videos and GIFs from one place.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

            <input
              type="text"
              placeholder="Search anything..."
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="h-14 w-full rounded-xl border border-gray-700 bg-gray-950 pl-12 pr-4 text-base text-white outline-none transition placeholder:text-gray-500 focus:border-(--c4)"
            />
          </div>

          <button
            type="submit"
            className="h-14 rounded-xl bg-(--c4) px-7 font-semibold text-(--c1) transition hover:opacity-90 active:scale-95"
          >
            Search
          </button>
        </form>

        <div className="mt-5 flex justify-center gap-4 text-xs text-gray-500 sm:text-sm">
          <span>Photos</span>
          <span>•</span>
          <span>Videos</span>
          <span>•</span>
          <span>GIFs</span>
        </div>

      </div>
    </section>
  );
};

export default SearchBar;