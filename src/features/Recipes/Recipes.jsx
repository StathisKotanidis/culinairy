import { useFilters } from "../Filters/FiltersProvider";
import Loader from "../../ui/Loader";
import BackToFilters from "./BackToFilters";
import ShowMoreRecipes from "./ShowMoreRecipes";
import RecipesNotFound from "./RecipesNotFound";
import RecipesList from "./RecipesList";

function Recipes() {
  const { recipes, loading } = useFilters();
  if (loading) return <Loader />;

  return recipes && recipes?.length > 0 ? (
    <>
      <RecipesList />
      <div className="flex items-center justify-between w-3/4 m-auto">
        <BackToFilters />
        <ShowMoreRecipes />
      </div>
    </>
  ) : (
    <RecipesNotFound />
  );
}

export default Recipes;
