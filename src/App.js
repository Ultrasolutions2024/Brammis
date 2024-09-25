import logo from './logo.svg';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import home1 from './assets/images/slider/slide-01.png';
import home2 from './assets/images/slider/slide-02.png';
import home3 from './assets/images/slider/slide-03.png';
import Navabar from './Navabar';
import Footer from './Footer';
import Intro from './Intro';
import AboutUs from './AboutUs';
import WorkFlow from './WorkFlow';
import Menu from './Menu';
import Team from './Team';
import Blog from './Blog';
import Contactus from './Contactus';
function App() {
  const options = {
    loop: true,
    margin: 10,
    // nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <>
 <Navabar/>

  <main>
  <section className="slider" >
      <div className="shape" />
      <div className="shape-01" />
      <div className="banner">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <div className="content">
                      <h1>Rava Laddu &amp; Organic sugar</h1>
                      <h5>
                      Savor the traditional taste of Rava Laddu and Organic Sugar, where every bite blends semolina’s richness with the natural sweetness of pure, organic ingredients.
                      </h5>
                      <ol>
                        <li>
                          <a href="https://wa.me/7010652833" target='blank'>
                            Order Now
                            <span className="flaticon-right-arrow" />
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <img src={home1} alt="Slide 1" style={{width:"90%"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <div className="content">
                      <h1> Coconut Burpee &amp; Organic Sugar</h1>
                      <h5>
                      Delight in the rich, tropical flavor of Coconut Burpee, sweetened with pure Country Sugar for a truly authentic and satisfying treat.
                      </h5>
                      <ol>
                        <li>
                        <a href="https://wa.me/7010652833" target='blank'>
                            Order Now
                            <span className="flaticon-right-arrow" />
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <img src={home2} alt="Slide 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <div className="content">
                      <h1>Coconut parpi &amp; Organic Sugar</h1>
                      <h5>
                      Delight in the wholesome goodness of our Organic Sugar and Coconut Parpi. Made with natural ingredients, this sweet treat combines the rich flavor of organic sugar with the tropical taste of coconut for a truly indulgent experience.
                      </h5>
                      <ol>
                        <li>
                        <a href="https://wa.me/7010652833" target='blank'>
                            Order Now
                            <span className="flaticon-right-arrow" />
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="wrapper">
                    <img src={home3} alt="Slide 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  <Intro/>
<AboutUs/>
<WorkFlow/>
  <Menu/>
 <Team/>
{/* <Blog/> */}
 
 <Contactus/>
  </main>

<Footer/>
  </>
  );
}

export default App;
