import React from "react";
import "../assets/css/base.css";
import "../assets/css/vendor.css";
import "../assets/css/main.css";
import logo from "../assets/images/67_White.png";

export default function Home() {
  return (
    <>
      <main className="s-home s-home--static">
        <div
          className="overlay"
          style={{ opacity: 0.3, backgroundColor: "#000000" }}
        ></div>

        <div className="home-content">
          <div className="row home-content__main">
            <div className="col-eight home-content__text pull-right">
              <h3>Welcome to User</h3>

              <h1>
                {" "}
                Discovering Sri Lanka's Best <br /> Sales.
              </h1>

              <p>
                Discover exclusive deals from ikman.lk and riyasewana all in one
                place! With our simplified interface, finding your desired items
                is just a few clicks away. Enjoy the convenience of browsing
                through a wide range of products and services, handpicked for
                you. Stay ahead of the curve and snag the hottest deals before
                they're gone. Your ultimate shopping experience starts here!
              </p>
            </div>

            <div className="col-four home-content__counter">
              <h3>Developed By</h3>

              <div className="home-content__clock">
                <img src={logo} alt="" />
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    window.location.href = "/search";
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <ul className="home-social">
            <li>
              <a href="https://www.facebook.com/randika.dilshan.9678">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/randikadilshanmanamendra/">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Rdilshan">
                <i className="fab fa-github" aria-hidden="true"></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@randikadilshan">
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                  crossorigin="anonymous"
                />

                <i className="fab fa-tiktok fa-2x" aria-hidden="true"></i>
                <span>Tiktok</span>
              </a>
            </li>
            {/* <li>
              <a href="#0">
                <i className="fab fa-dribbble" aria-hidden="true"></i>
                <span>Dribbble</span>
              </a>
            </li> */}
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
