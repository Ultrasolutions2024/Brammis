import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from './assets/images/brahmmis logo recreate.png'; // Update the path as needed
import { FiChevronsRight } from "react-icons/fi";
function Footer() {
  return (
    <>
   <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section className="">
          {/*Grid row*/}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{color:"#f29307"}}>
                Brahmmis Organic Food Creator
              </h6>
              <p>
              Discover the Essence of Tamil Food Culture In a world of fast food and modern diets, we invite you to explore the rich tapestry of Tamil cuisine—a heritage that spans centuries. Our mission? To revive forgotten flavors, celebrate local ingredients, and honor the wisdom of our ancestors.
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">Sweets</a>
              </p>
              <p>
                <a className="text-white">Dosa Flour</a>
              </p>
              <p>
                <a className="text-white">Organic Mixer</a>
              </p>
              <p>
                <a className="text-white">Snacks</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className="text-white">Home</a>
              </p>
              <p>
                <a className="text-white">AboutUs</a>
              </p>
              <p>
                <a className="text-white">Our Menu</a>
              </p>
              <p>
                <a className="text-white">Help</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3" />  Coimbatore,
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> kovaimanvaasanai@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" />  91+ 70106 52833
              </p>
              <p>
                <i className="fas fa-phone mr-3" />  91+98651 66255
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/*Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-3" />
        {/* Section: Copyright */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* Copyright */}
              <div className="p-3">
              Copyright © 2024 Brahmmis All Rights Reserved.   

                <a className="text-white" href="">    Crafted with ♥ by Ultrafly solutions
                </a>
              </div>
              {/* Copyright */}
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Google */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              {/* Instagram */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            {/* Grid column */}
          </div>
        </section>
        {/* Section: Copyright */}
      </div>
      {/* Grid container */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

  </>
  
  )
}

export default Footer