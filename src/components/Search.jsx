import {Search as SearchIcon} from './icons';

function Search() {
  return (
    <div className="md:hidden relative w-full px-4 py-2">
      <input
        type="text"
        placeholder="جستجو"
        className="w-full py-2 px-4  rounded-lg border border-neutral-200 focus:outline-none focus:border-primary"
      />
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <SearchIcon className="w-6 h-6 fill-black" />
      </div>
    </div>
  );
}

export default Search;
