import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// const collectionsCont = [
//   {
//       "imgUrl": "./images/newly-opened.png",
//       "title": "Newly Opened",
//       "description": "34 Places "
//   },
//   {
//       "imgUrl": "./images/best-of-mumbai.png",
//       "title": "Best of Mumbai",
//       "description": "34 Places "
//   },
//   {
//       "imgUrl": "./images/trending-week.png",
//       "title": "Trending This Week",
//       "description": "34 Places "
//   },
//   {
//     "imgUrl": "./images/friendly-place.png",
//     "title": "Work Friendly Places",
//     "description": "34 Places "
// },
// ]


const Collections = (props) => {
  const collectionsCont = props.data

  // const [recipes, setRecipes] = useState();

  // async function fetchData() {
  //   try {
  //     const response = await axios.get("https://api.spoonacular.com/food/menuItems/search?query=burger&number=6&apiKey=72b6c06b05e54df4b0471c8bacbe6387")
  //     setRecipes(response.data.menuItems)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  // console.log(recipes)
  return (
    <section className="container mb-2 mb-xl-5">
      <div className="row">
        <h1 className="collections-title">Collections</h1>
        <div className="d-flex justify-content-between collections">
          <p className="collections-left">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </p>
          <Link className="collections-right text-decoration-none" to='/restaurants'>All Collections in Mumbai <FaCaretRight fill="rgba(238, 46, 43, 0.7)" /></Link>
        </div>

        <div className="d-flex justify-content-around justify-content-lg-start collections-container">
          {collectionsCont?.map((item) => (
            <div className="text-white card m-2 card-item" key={item.imgUrl}>
              <img className="card-img" src={item.imgUrl} alt="Card image" />
              <div className="card-img-overlay">
                <h1 className="cards-title m-0">{item.title}</h1>
                <p className="cards-text m-0">{item.description}<FaCaretRight fill="white" /></p>
              </div>
            </div>
          ))}
          {/* <div className="text-white card m-2 card-item">
            <img className="card-img" src="./images/newly-opened.png" alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="cards-title m-0">Newly Opened</h1>
              <p className="cards-text m-0">34 Places <FaCaretRight fill="white" /></p>
            </div>
          </div>
          <div className="text-white card m-2 card-item">
            <img className="card-img" src="./images/best-of-mumbai.png" alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="cards-title m-0">Best of Mumbai</h1>
              <p className="cards-text m-0">139 Places <FaCaretRight fill="white" /></p>
            </div>
          </div>
          <div className="text-white card m-2 card-item">
            <img className="card-img" src="./images/trending-week.png" alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="cards-title m-0">Trending This Week</h1>
              <p className="cards-text m-0">34 Places <FaCaretRight fill="white" /></p>
            </div>
          </div>
          <div className="text-white card m-2 card-item">
            <img className="card-img" src="./images/friendly-place.png" alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="cards-title m-0">Work Friendly Places</h1>
              <p className="cards-text m-0">34 Places <FaCaretRight fill="white" /></p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Collections;
