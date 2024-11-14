'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Blog() {
  const [modal1, setModal1] = useState(false);

  return (
    <section className="blog mt-5 pb-5" id="blog">
      <div className="heading text-center pt-5">
        <small>Latest News</small>
        <h3>Blog & Articles</h3>
      </div>
      <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
        <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
          <div className="card">
            <Image 
              src="/images/food-web.png" 
              className="card-img-top rounded-4" 
              alt="Exploring Innovative Food Trends in 2022" 
              width={500} 
              height={300} 
            />
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

        {/* Other blog posts (with Image optimization) */}
        {/* Example for the second blog post */}
        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
          <div className="card">
            <Image 
              src="/images/convertor-app.png" 
              className="card-img-top rounded-4" 
              alt="Digital Transformation in Finance" 
              width={500} 
              height={300} 
            />
            <div className="card-body px-4">
              <small>By Pawan Kumavat</small>
              <span className="ms-3">Mar 8, 2022</span>
              <h4 className="card-title">
                <a href="#">Digital Transformation in Finance</a>
              </h4>
              <p className="text-muted">
                Learn how digital solutions like currency converters are revolutionizing financial processes for users worldwide.
              </p>
              <button className="read-more-btn link" onClick={() => setModal1(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal for modal1 */}
        {modal1 && (
          <div className="modal fade show d-block" id="exampleModal1" aria-hidden="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" onClick={() => setModal1(false)}></button>
                <div className="modal-body px-4">
                  <div className="img">
                    <Image 
                      src="/images/games.png" 
                      className="img-fluid" 
                      alt="Exploring Innovative Food Trends in 2022" 
                      width={500} 
                      height={300} 
                    />
                  </div>
                  <div className="content mt-3">
                    <small>By Pawan Kumavat</small>
                    <span className="text-muted ms-2">Mar 8, 2022</span>
                    <h4 className="card-title mt-3">Exploring Innovative Food Trends in 2022</h4>
                    <p className="text-muted mt-3">
                      A deeper look at the top culinary trends that are reshaping how we experience food in today&apos;s dynamic world.
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
