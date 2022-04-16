import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import bannerOne from "../../assets/images/banner-1.jpeg";
import bannerTwo from "../../assets/images/banner-2.jpeg";
import bannerThree from "../../assets/images/banner-3.jpeg";
import arrowLeft from "../../assets/icons/btn-arrow-left.svg";
import arrowRight from "../../assets/icons/btn-arrow-right.svg";
import bedOne from "../../assets/images/bed1.jpg";
import chairSeven from "../../assets/images/chair7.jpg";
import lampOne from "../../assets/images/lamp1.jpg";
import stoolFive from "../../assets/images/stool5.jpg";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section class="homepage-container">
        <main className="hero-container container-2">
          <div className="banner-section">
            <div className="banner-left">
              <div className="banner-img">
                <img
                  className="img-responsive"
                  src={bannerOne}
                  alt="banner image"
                />
              </div>
              <div className="box-overlay">
                <span className="overlay-header">
                  <h1>
                    Exotic minimal <br />
                    furniture.
                  </h1>
                </span>
                <span className="overlay-para">
                  <p>
                    Choose from a wide range of well crafted wooden furniture.
                  </p>
                </span>
                <span className="overlay-button-container">
                  <Link to="/products">
                    <button className="btn btn-solid-primary">Shop Now</button>
                  </Link>
                </span>
              </div>
            </div>
            <div className="banner-right">
              <div className="banner-right-topp banner-img">
                <img
                  className="img-responsive"
                  src={bannerTwo}
                  alt="banner image"
                />
              </div>
              <div className="banner-right-bottom banner-img">
                <img
                  className="img-responsive"
                  src={bannerThree}
                  alt="banner image"
                />
              </div>
            </div>
          </div>

          <div className="feature-container container-2">
            <div className="feature-header">
              <h2 className="feature-heading">Featured Categories</h2>
              <span className="btn-container">
                <button className="btn btn-float btn-solid-primary">
                  <img src={arrowLeft} alt="left arrow" />
                </button>
                <button className="btn btn-float btn-solid-primary">
                  <img src={arrowRight} alt="right arrow" />
                </button>
              </span>
            </div>
            <div className="feature-body">
              <div className="card card-basic">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={chairSeven}
                    alt="card image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Chairs</h5>
                </div>
              </div>
              <div className="card card-basic">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={stoolFive}
                    alt="card image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Stools</h5>
                </div>
              </div>
              <div className="card card-basic">
                <div className="card-header">
                  <img
                    className="img-responsive "
                    src={bedOne}
                    alt="card image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Beds</h5>
                </div>
              </div>
              <div className="card card-basic">
                <div className="card-header">
                  <img
                    className="img-responsive"
                    src={lampOne}
                    alt="card image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Lamps</h5>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export { Home };
