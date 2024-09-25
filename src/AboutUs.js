import React from 'react'
import about from './assets/images/about2.png'
function AboutUs() {
  return (
    <section className="bg-02" id="about-us">
    <div className="shape-02" />
    <div className="shape-03" />
    <div className="shape-04" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="wrapper">
            <div className="image">
              <img src={about} alt='img' />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="content">
            <span style={{textAlign:"center",fontSize:"40px",fontWeight:"bold"}}>About</span>
            <h2>Food Is Important part of a balanced diet</h2>
            <p>
            Discover the Essence of Tamil Food Culture
            In a world of fast food and modern diets, we invite you to explore the rich tapestry of Tamil cuisine—a heritage that spans centuries. Our mission? To revive forgotten flavors, celebrate local ingredients, and honor the wisdom of our ancestors.
            </p>
            <h4>Health and Harmony:</h4>
            <p>
            Tamil food isn’t just about taste; it’s about holistic well-being. Explore dishes that balance flavors, boost immunity, and connect mind, body, and soul.
            </p>
            {/* <ol>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <span className="flaticon-play-button" />
                <a href="#">Watch Video</a>
              </li>
            </ol> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs