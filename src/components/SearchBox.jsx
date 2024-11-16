import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <form class="mx-auto sticky  mt-4  ">
      <label
        for="default-search"
        class="mb-20 text-sm font-medium text-zinc-900 sr-only "
      >
        Search
      </label>
      <div class="relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none  ">
          <ImSearch class="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          class="container py-3 ps-14 pe-20 h-12 text-sm text-zinc-700  outline-none rounded-lg shadow-slate-400 shadow-lg bg-[#a5bdc5] placeholder:text-zinc-600 "
          placeholder="Search ..."
        />
        <button
          type="button"
          onClick={searchHandler}
          class="text-white absolute end-4 bottom-2.5 bg-[#a1bdc2] hover:bg-zinc-700 font-medium rounded-md text-xs px-2 py-1.5 "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
