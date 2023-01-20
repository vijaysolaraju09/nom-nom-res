import { FaAngleDown } from "react-icons/fa"
import "./index.css"

// const explporeCont = [
//   "Popular cuisines near me",
//   "Popular restaurant types near me",
//   "Top restaurants chains",
//   "Cities we deliver to"
// ]

const Explore = (props) => {
  const explporeCont = props.data
  return (
    <>
      <section className='container mb-2 mb-xl-5'>
        <div className='row explore-section' >
          <h2 className='explore-title mb-3'>Explore options near me</h2>
          <div className='accordion' id="accordionExample">
            {explporeCont?.map((item) => (
              <div className='accordion-item border-0' key={item.title}>
                <h2 className="accordion-header" id={item.headingId}>
                  <button className="accordion-button explore-things-title explore-things collapsed" type="button" data-bs-toggle="collapse" data-bs-target={item.targetId} aria-expanded="true" aria-controls={item.collapseId}>
                    {item.title}
                  </button>
                </h2>
                <div id={item.collapseId} className="accordion-collapse collapse" aria-labelledby={item.headingId} >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            ))}
            {/* <div className='d-flex justify-content-between align-items-center explore-things m-0 mb-2'>
              <p >Popular cuisines near me</p>
              <FaAngleDown fill="#282828" />
            </div>
            <div className='d-flex justify-content-between align-items-center explore-things m-0 mb-2'>
              <p>Popular restaurant types near me</p>
              <FaAngleDown fill="#282828" />
            </div>
            <div className='d-flex justify-content-between align-items-center explore-things m-0 mb-2'>
              <p>Top restaurants chains</p>
              <FaAngleDown fill="#282828" />
            </div>
            <div className='d-flex justify-content-between align-items-center explore-things m-0 mb-2'>
              <p>Cities we deliver to</p>
              <FaAngleDown fill="#282828" />
            </div> */}
          </div>
        </div>
      </section>
    </>

  )
}
export default Explore;
