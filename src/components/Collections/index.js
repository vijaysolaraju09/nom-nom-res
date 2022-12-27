import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { FaCaretRight } from "react-icons/fa";


const Collections = () => {

  const [recipes, setRecipes] = useState();

  async function fetchData() {
    try {
      const response = await axios.get("https://api.spoonacular.com/food/menuItems/search?query=burger&number=6&apiKey=72b6c06b05e54df4b0471c8bacbe6387")
      setRecipes(response.data.menuItems)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(recipes)
  return (
    <section className="container mb-5">
      <div className="row">
        <h1 className="collections-title">Collections</h1>
        <div className="d-flex justify-content-between collections">
          <p className="collections-left">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </p>
          <p className="collections-right">All Collections in Mumbai <FaCaretRight fill="rgba(238, 46, 43, 0.7)" /></p>
        </div>

        <div className="d-flex flex-wrap justify-content-around justify-content-lg-start">
          {recipes?.map((recipeItem) => (
            <div className="text-white card m-2 card-item" key={recipeItem.id}>
              <img className="card-img" src={recipeItem.image} alt="Card image" />
              <div className="card-img-overlay">
                <h1 className="cards-title m-0">{recipeItem.title}</h1>
                <p className="cards-text m-0">{recipeItem.restaurantChain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Collections;
