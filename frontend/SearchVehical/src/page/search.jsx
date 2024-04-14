import React, { useState } from "react";
import "../assets/css/main.css";
import "../assets/css/main1.css";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

import Datasproduct from "../Componment/datatable";


export default function Search() {


  
  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [oncesearch, setoncesearch] = useState(false);

  const [ads, setAds] = useState([]);

  function searchbtn() {
    displaychange();
    setIsLoading(true);
    setoncesearch(true);
    // console.log("User entered value:", inputValue);

    axios
      .post(`${import.meta.env.VITE_BACKENDPORT}/search`, {
        id: inputValue,
      })
      .then(async (response) => {
        // console.log("Response:", response.data.received_data);

        // const data = await response.json();
        setAds(response.data.received_data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const displaychange = () => {
    const legendElement = document.querySelector("legend");
    if (legendElement) {
      legendElement.style.display = "none";
    }

    const divElement = document.querySelector(".s004");
    if (divElement) {
      divElement.style.minHeight = "10vh";
      divElement.style.transition = "min-height 0.8s ease";
    }
  };
  return (
    <>
      <main className="s-home s-home--static">
        <div
          className="overlay"
          style={{ overflowY: oncesearch ? "scroll" : "hidden" }}
        >
          <div
            className="s004"
            style={{
              minHeight: "100vh",
              display: "flex",
              msFlexPack: "center",
              justifyContent: "center",
              msFlexAlign: "center",
              alignItems: "center",
            }}
          >
            <form>
              <fieldset>
                <legend>WHAT ARE YOU LOOKING FOR?</legend>
                <div className="inner-form">
                  <div
                    className="input-field"
                    style={{ borderRadius: "34px", backgroundColor: "white" }}
                  >
                    <input
                      className="form-control"
                      id="choices-text-preset-values"
                      type="text"
                      placeholder="Type to search..."
                      style={{ width: "100%" }}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => {
                        searchbtn();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div
            style={{
              display: isLoading ? "none" : "block",
              transition: "opacity 2s ease",
              opacity: isLoading ? 0 : 1,
            }}
          >
            <Datasproduct data={ads} />
          </div>

          {/* showing loading icon */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Triangle
              visible={isLoading}
              height="400"
              width="400"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
