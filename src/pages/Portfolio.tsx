"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import Image from "next/image";
=======

>>>>>>> 29125ad (Enhanced Portfolio Styling)

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

<<<<<<< HEAD
  const handleFilterClick = (category: string) => {
=======
  const handleFilterClick = (category:any) => {
>>>>>>> 29125ad (Enhanced Portfolio Styling)
    setFilter(category);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="heading text-center pt-5">
        <small>Creative Work</small>
        <h3>Check My Portfolio</h3>
      </div>

      <div id="myBtnContainer" className="text-center mt-4">
<<<<<<< HEAD
        <button className="filter-item" onClick={() => handleFilterClick("all")}>
          All
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("game")}>
          Game
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("app")}>
          App
        </button>
        <button className="filter-item" onClick={() => handleFilterClick("website")}>
          Website
        </button>
      </div>
=======
      <button className="filter-item" onClick={() => handleFilterClick("all")}>
       All
      </button>
      <button className="filter-item" onClick={() => handleFilterClick("game")}>
       Game
      </button>
      <button className="filter-item" onClick={() => handleFilterClick("app")}>
       App
       </button>
       <button className="filter-item" onClick={() => handleFilterClick("website")}>
       Website
       </button>
       </div>
>>>>>>> 29125ad (Enhanced Portfolio Styling)

      <div className="portfolio-body">
        <div className="row justify-content-evenly px-4">
          <div className={`post col-md-4 ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/web-design.png" width={500} height={300} className="card-img-top" alt="2048 Game" />
=======
              <img src="/images/web-design.png" className="card-img-top" alt="2048 Game" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">Ecommerce Web</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span>
                <br />
                <a href="#" className="link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/convertor-app.png" width={500} height={300} className="card-img-top" alt="Currency Converter App" />
=======
              <img src="/images/convertor-app.png" className="card-img-top" alt="Currency Converter App" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">Converter App</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">CustomCss</span>
                <span className="badge bg-secondary badge-pill mb-2">App</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "webapp" ? "show" : "hide"} webapp all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/food-web.png" width={500} height={300} className="card-img-top" alt="Dictionary App" />
=======
              <img src="/images/food-web.png" className="card-img-top" alt="Dictionary App" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">Food Web</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">Website</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-4 px-4">
          <div className={`post col-md-4 ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/games.png" width={500} height={300} className="card-img-top" alt="PicEditor App" />
=======
              <img src="/images/games.png" className="card-img-top" alt="PicEditor App" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">Game Apps</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">TelwindCss</span>
                <span className="badge bg-secondary badge-pill mb-2">Games</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/to-dp-list.jpg" width={500} height={300} className="card-img-top" alt="TicTacToe Game" />
=======
              <img src="/images/to-dp-list.jpg" className="card-img-top" alt="TicTacToe Game" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">To Do List</h4>
                <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                <span className="badge bg-secondary badge-pill">JavaScript</span>
                <span className="badge bg-secondary badge-pill mb-2">App</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div className={`post col-md-4 ${filter === "all" || filter === "webapp" ? "show" : "hide"} all col-10 mt-3 mt-md-0`} data-aos="fade-up">
            <div className="card">
<<<<<<< HEAD
              <Image src="/images/learning-app.png" width={500} height={300} className="card-img-top" alt="Lang Translator App" />
=======
              <img src="/images/learning-app.png" className="card-img-top" alt="Lang Translator App" />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              <div className="card-body text-center">
                <h4 className="card-title">Learning App</h4>
                <span className="badge bg-secondary badge-pill">NextJs</span>
                <span className="badge bg-secondary badge-pill">css</span>
                <span className="badge bg-secondary badge-pill mb-2">Api</span>
                <br />
                <a href="#" className="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
<<<<<<< HEAD

=======
>>>>>>> 29125ad (Enhanced Portfolio Styling)
