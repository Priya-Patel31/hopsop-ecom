import {BsSearch} from "react-icons/bs"
const Searchbar = () => {
  return (
    <div class="search-bar-container">
      <button>
        <BsSearch class="text-xs"/>
      </button>
      <input type="search" placeholder="Search" class="search-bar text-xs" />
    </div>
  );
};
export default Searchbar;
