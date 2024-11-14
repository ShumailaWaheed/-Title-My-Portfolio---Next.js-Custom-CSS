"use client";

import { useState } from 'react';
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> 29125ad (Enhanced Portfolio Styling)

export default function Blog() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <section className="blog mt-5 pb-5" id="blog">
      <div className="heading text-center pt-5">
        <small>Latest News</small>
<<<<<<< HEAD
        <h3>Blog &amp; Articles</h3>
=======
        <h3>Blog & Articles</h3>
>>>>>>> 29125ad (Enhanced Portfolio Styling)
      </div>
      <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
        <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
          <div className="card">
<<<<<<< HEAD
            <Image src="/images/food-web.png" width={500} height={300} className="card-img-top rounded-4" alt="Food trends" />
=======
            <img src="/images/food-web.png" className="card-img-top rounded-4" alt="..." />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Exploring Innovative Food Trends in 2022</a>
              </h4>
              <p className="text-muted">
                Discover the latest advancements in culinary arts, from sustainable ingredients to fusion dishes 
                that blend cultural flavors.
              </p>
              <button className="read-more-btn link" onClick={() => setModal1(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
          <div className="card">
<<<<<<< HEAD
            <Image src="/images/convertor-app.png" width={500} height={300} className="card-img-top rounded-4" alt="Digital finance transformation" />
=======
            <img src="/images/convertor-app.png" className="card-img-top rounded-4" alt="..." />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Digital Transformation in Finance</a>
              </h4>
              <p className="text-muted">
                Learn how digital solutions like currency converters are revolutionizing financial processes for users worldwide.
              </p>
              <button className="read-more-btn link" onClick={() => setModal2(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
          <div className="card">
<<<<<<< HEAD
            <Image src="/images/games.png" width={500} height={300} className="card-img-top rounded-4" alt="Mobile gaming trends" />
=======
            <img src="/images/games.png" className="card-img-top rounded-4" alt="..." />
>>>>>>> 29125ad (Enhanced Portfolio Styling)
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Trends in Mobile Gaming for 2022</a>
              </h4>
              <p className="text-muted">
<<<<<<< HEAD
                Delve into the emerging trends in mobile gaming, highlighting new technologies and user engagement 
                tactics in the industry.
=======
                Delve into the emerging trends in mobile gaming, highlighting new technologies and user 
                engagement tactics in the industry.
>>>>>>> 29125ad (Enhanced Portfolio Styling)
              </p>
              <button className="read-more-btn link" onClick={() => setModal3(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal 1 */}
        {modal1 && (
<<<<<<< HEAD
          <div className="modal fade show d-block" aria-hidden="false">
=======
          <div className="modal fade show d-block" id="exampleModal1" aria-hidden="false">
>>>>>>> 29125ad (Enhanced Portfolio Styling)
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-c rounded-pill" onClick={() => setModal1(false)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <div className="modal-body px-4">
<<<<<<< HEAD
                  <Image src="/images/food-web.png" width={500} height={300} className="img-fluid" alt="Food trends" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal 2 */}
        {modal2 && (
          <div className="modal fade show d-block" aria-hidden="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-c rounded-pill" onClick={() => setModal2(false)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <div className="modal-body px-4">
                  <Image src="/images/convertor-app.png" width={500} height={300} className="img-fluid" alt="Digital finance transformation" />
                </div>
                {/* Content for Modal 2 */}
              </div>
            </div>
          </div>
        )}

        {/* Modal 3 */}
        {modal3 && (
          <div className="modal fade show d-block" aria-hidden="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-c rounded-pill" onClick={() => setModal3(false)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <div className="modal-body px-4">
                  <Image src="/images/games.png" width={500} height={300} className="img-fluid" alt="Mobile gaming trends" />
=======
                  <div className="img">
                    <img src="/images/games.png" className="img-fluid" alt="..." />
                  </div>
                  <div className="content mt-3">
                    <small>By Pawan Kumavat</small>
                    <span className="text-muted ms-2">Mar 8, 2022</span>
                    <h4 className="card-title mt-3">Exploring Innovative Food Trends in 2022</h4>
                    <p className="text-muted mt-3">
                      A deeper look at the top culinary trends that are reshaping how we experience food in today's dynamic world.
                    </p>
                  </div>
                </div>
                <div className="contact-form ms-3 mt-3 pb-4 px-2">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="E-mail" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Mobile No." />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                  <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                    Submit
                  </button>
>>>>>>> 29125ad (Enhanced Portfolio Styling)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
