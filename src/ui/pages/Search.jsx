import DietFilter from "../DietFilter";
import CuisineFilter from "./CuisineFilter";

function Search() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 border border-yellow-300"></div>
      <div className="col-span-1 border border-orange-600">
        <DietFilter />
        <CuisineFilter />
      </div>
      <div className="col-span-3 border border-stone-400"></div>
    </div>
  );
}

export default Search;
