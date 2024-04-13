import React from "react";
import "../assets/css/base.css";
import "../assets/css/vendor.css";
import "../assets/css/main.css";
import logo from "../assets/images/67_White.png";

export default function Home() {
  return (
    <>
      <main className="s-home s-home--static">
      <div className="overlay" style={{ opacity: 0.3, backgroundColor: "#000000" }}></div>


        <div className="home-content">
          <div className="row home-content__main">
            <div className="col-eight home-content__text pull-right">
              <h3>Welcome to Count</h3>

              <h1>
                {" "}
                We are currently working <br />
                on a new super awesome <br /> website.
              </h1>

              <p>
                Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero
                malesuada feugiat. Vivamus magna justo, lacinia eget consectetur
                sed, convallis at tellus. Pellentesque in ipsum id orci porta
                dapibus. Nulla quis lorem ut libero malesuada feugiat.
              </p>
            </div>

            <div className="col-four home-content__counter">
              <h3>Launching In</h3>

              <div className="home-content__clock">
                <img src={logo} alt="" />
              </div>

              <div style={{ width: "100%",display: "flex",justifyContent: "center" }}>
                <button style={{ marginTop: "20px"}} onClick={()=>{window.location.href="/search"}}>
                  Get Started
                </button>
              </div>
              
            </div>
          </div>

          <ul className="home-social">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span>Twiiter</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-behance" aria-hidden="true"></i>
                <span>Behance</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-dribbble" aria-hidden="true"></i>
                <span>Dribbble</span>
              </a>
            </li>
          </ul>

          <div className="row home-copyright">
            <span>Copyright Count 2024</span>
            <span>
              Design by{" "}
              <a href="https://github.com/Rdilshan">Randika Dilshan</a>
            </span>
          </div>

          <div className="home-content__line"></div>
        </div>
      </main>
    </>
  );
}
