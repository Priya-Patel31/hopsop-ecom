import { BsSearch } from "react-icons/bs";
const Searchbar = () => {
  return (
    <div class="search-bar-container">
      <BsSearch class="text-xs" />
      <input type="search" placeholder="Search" class="search-bar text-xs" />
    </div>
  );
};
export default Searchbar;
