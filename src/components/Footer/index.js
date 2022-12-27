import './index.css'
import {
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container footer-cont'>
                    <div className='d-flex justify-content-between align-items-center mb-5 footer-top'>
                        <a className='d-flex text-decoration-none align-items-center mb-3 mb-sm-0'>
                            <img src='./images/footer-logo.png' alt='footer-logo' className='footer-logo'/>
                            <h3 className='footer-title ms-1 ms-m-3'>NOM-NOM</h3>
                        </a>
                        <div className='d-flex'>
                            <div className='footer-location-cont me-3 d-flex align-items-center'>
                                <img
                                    src="./images/india-logo.png"
                                    alt="country"
                                />
                                <select className='border-0'>
                                    <option>India</option>
                                    <option> England</option>
                                </select>
                            </div>
                            <div className='footer-location-cont d-flex align-items-center'>
                                <img
                                    src="./images/globe-icon.png"
                                    alt="language"
                                />
                                <select className='border-0'>
                                    <option>English</option>
                                    <option>Hindhi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className=' footer-bottom d-flex justify-content-between'>
                        <ul className=" ">
                            <li className="">
                                <h3 href="/" className="footer-links-subtitle mb-2">
                                    ABOUT NOM-NOM
                                </h3>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Who We Are
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Blog
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Work With Us
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Investor Relations
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Report Fraud
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className=" ">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <ul className=" ">
                            <li className="">
                                <h3 href="/" className="footer-links-subtitle mb-2">
                                    Nomverse
                                </h3>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    NOM-NOM
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Feeding India
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Hyperpure
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Nomland
                                </a>
                            </li>
                        </ul>
                        <div className=" s-wrapper d-flex flex-column justify-content-between">
                            <ul className="">
                                <li className="">
                                    <h3 href="/" className="footer-links-subtitle mb-2">
                                        FOR RESTAURANTS
                                    </h3>
                                </li>
                                <li className="">
                                    <a href="/" className="">
                                        Partner With Us
                                    </a>
                                </li>
                                <li className="">
                                    <a href="/" className="">
                                        Apps For You
                                    </a>
                                </li>
                            </ul>

                            <ul className="">
                                <li className="">
                                    <h3 href="/" className="footer-links-subtitle mb-2">
                                        FOR ENTERPRISES
                                    </h3>
                                </li>
                                <li className="">
                                    <a href="/" className="">
                                        NOM-NOM For Work
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className=" ">
                            <li className="">
                                <h3 href="/" className="footer-links-subtitle mb-2">
                                    LEARN MORE
                                </h3>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Privacy
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Security
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Terms
                                </a>
                            </li>
                            <li className="">
                                <a href="/" className="">
                                    Sitemap
                                </a>
                            </li>
                        </ul>

                        <ul className=" ">
                            <li className='d-inline'>
                                <h3 href="/" className="footer-links-subtitle mb-2">
                                    SOCIAL LINKS
                                </h3>
                            </li>

                            <li className=" social-links">

                                <a href="/" className="">
                                    <FaLinkedinIn />
                                </a>


                                <a href="/" className="">
                                    <FaInstagram />
                                </a>

                                <a href="/" className="">
                                    <FaTwitter />
                                </a>

                                <a href="/" className="">
                                    <FaYoutube />
                                </a>

                                <a href="/" className="">
                                    <FaFacebookF />
                                </a>

                            </li>
                            <li className="mt-4">
                                <a href="/">
                                    <img src="./images/play-store.png" alt="play store" />
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/">
                                    <img src="./images/app-store.png" alt="apple store" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;


// <div className='footer'>
//                 <div className='container footer-cont'>
//                     <div className='d-flex justify-content-between align-items-center mb-5 footer-top'>
//                         <a className='d-flex text-decoration-none align-items-center mb-3 mb-sm-0'>
//                             <img src='./images/footer-logo.png' alt='footer-logo' className='footer-logo'/>
//                             <h3 className='footer-title ms-1 ms-m-3'>NOM-NOM</h3>
//                         </a>
//                         <div className='d-flex'>
//                             <div className='footer-location-cont me-3 d-flex align-items-center'>
//                                 <img
//                                     src="./images/india-logo.png"
//                                     alt="country"
//                                 />
//                                 <select className='border-0'>
//                                     <option>India</option>
//                                     <option> England</option>
//                                 </select>
//                             </div>
//                             <div className='footer-location-cont d-flex align-items-center'>
//                                 <img
//                                     src="./images/globe-icon.png"
//                                     alt="language"
//                                 />
//                                 <select className='border-0'>
//                                     <option>English</option>
//                                     <option>Hindhi</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='row footer-bottom d-flex justify-content-between'>
//                         <ul className="col-sm-6 col-md-4 col-lg-2 ">
//                             <li className="">
//                                 <h3 href="/" className="footer-links-subtitle mb-2">
//                                     ABOUT NOM-NOM
//                                 </h3>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Who We Are
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Blog
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Work With Us
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Investor Relations
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Report Fraud
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className=" ">
//                                     Contact Us
//                                 </a>
//                             </li>
//                         </ul>
//                         <ul className="col-sm-6 col-md-4 col-lg-2 ">
//                             <li className="">
//                                 <h3 href="/" className="footer-links-subtitle mb-2">
//                                     Nomverse
//                                 </h3>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     NOM-NOM
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Feeding India
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Hyperpure
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Nomland
//                                 </a>
//                             </li>
//                         </ul>
//                         <div className="col-sm-6 col-md-4 col-lg-2 s-wrapper d-flex flex-column justify-content-between">
//                             <ul className="">
//                                 <li className="">
//                                     <h3 href="/" className="footer-links-subtitle mb-2">
//                                         FOR RESTAURANTS
//                                     </h3>
//                                 </li>
//                                 <li className="">
//                                     <a href="/" className="">
//                                         Partner With Us
//                                     </a>
//                                 </li>
//                                 <li className="">
//                                     <a href="/" className="">
//                                         Apps For You
//                                     </a>
//                                 </li>
//                             </ul>

//                             <ul className="">
//                                 <li className="">
//                                     <h3 href="/" className="footer-links-subtitle mb-2">
//                                         FOR ENTERPRISES
//                                     </h3>
//                                 </li>
//                                 <li className="">
//                                     <a href="/" className="">
//                                         NOM-NOM For Work
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <ul className="col-sm-6 col-md-4 col-lg-2 ">
//                             <li className="">
//                                 <h3 href="/" className="footer-links-subtitle mb-2">
//                                     LEARN MORE
//                                 </h3>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Privacy
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Security
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Terms
//                                 </a>
//                             </li>
//                             <li className="">
//                                 <a href="/" className="">
//                                     Sitemap
//                                 </a>
//                             </li>
//                         </ul>

//                         <ul className="col-sm-6 col-md-4 col-lg-2 ">
//                             <li className='d-inline'>
//                                 <h3 href="/" className="footer-links-subtitle mb-2">
//                                     SOCIAL LINKS
//                                 </h3>
//                             </li>

//                             <li className=" social-links">

//                                 <a href="/" className="">
//                                     <FaLinkedinIn />
//                                 </a>


//                                 <a href="/" className="">
//                                     <FaInstagram />
//                                 </a>

//                                 <a href="/" className="">
//                                     <FaTwitter />
//                                 </a>

//                                 <a href="/" className="">
//                                     <FaYoutube />
//                                 </a>

//                                 <a href="/" className="">
//                                     <FaFacebookF />
//                                 </a>

//                             </li>
//                             <li className="mt-4">
//                                 <a href="/">
//                                     <img src="./images/play-store.png" alt="play store" />
//                                 </a>
//                             </li>
//                             <li className="mt-3">
//                                 <a href="/">
//                                     <img src="./images/app-store.png" alt="apple store" />
//                                 </a>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//             </div>