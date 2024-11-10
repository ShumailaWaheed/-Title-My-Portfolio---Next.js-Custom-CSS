"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Blog() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <section className="blog mt-5 pb-5" id="blog">
      <div className="heading text-center pt-5">
        <small>Latest News</small>
        <h3>Blog &amp; Articles</h3>
      </div>
      <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
        <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
          <div className="card">
            <Image src="/images/food-web.png" width={500} height={300} className="card-img-top rounded-4" alt="Food trends" />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Exploring Innovative Food Trends in 2022</a>
              </h4>
              <p className="text-muted">
                Discover the latest advancements in culinary arts, from sustainable ingredients to fusion dishes that blend cultural flavors.
              </p>
              <button className="read-more-btn link" onClick={() => setModal1(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
          <div className="card">
            <Image src="/images/convertor-app.png" width={500} height={300} className="card-img-top rounded-4" alt="Digital finance transformation" />
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
            <Image src="/images/games.png" width={500} height={300} className="card-img-top rounded-4" alt="Mobile gaming trends" />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Trends in Mobile Gaming for 2022</a>
              </h4>
              <p className="text-muted">
                Delve into the emerging trends in mobile gaming, highlighting new technologies and user engagement tactics in the industry.
              </p>
              <button className="read-more-btn link" onClick={() => setModal3(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal 1 */}
        {modal1 && (
          <div className="modal fade show d-block" aria-hidden="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-c rounded-pill" onClick={() => setModal1(false)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <div className="modal-body px-4">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
