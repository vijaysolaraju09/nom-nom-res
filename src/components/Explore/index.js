import { FaAngleDown } from "react-icons/fa"
import "./index.css"


const Explore = () => {
  return (
    <>
      <section className='container mb-2 mb-xs-5'>
        <div className='row explore-section'>
          <h2 className='explore-title mb-3'>Explore options near me</h2>
          <div className='col'>
            <div className='d-flex justify-content-between align-items-center explore-things m-0 mb-2'>
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
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
export default Explore;
