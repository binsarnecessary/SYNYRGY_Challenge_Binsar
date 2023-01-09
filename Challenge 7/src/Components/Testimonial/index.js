import React from "react";
import img_photo2 from "../../assets/img_photo2.png";
import img_photo1 from "../../assets/img_photo1.png";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="py-5">
        <div className="container pt-5">
          <h2 className="h2 text-center">Testimonial</h2>
          <p className="text-center py-3">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div
            id="carouselExampleControls"
            className="carousel slide mx-auto testimoni"
            style={{ maxWidth: "60%" }}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active bg-aliceblue card">
                <div className="row mx-4 my-5">
                  <div className="col-xl-2 m-auto">
                    <img
                      src={img_photo2}
                      className="d-block testimonial-img m-auto"
                      alt="Person"
                    />
                  </div>
                  <div className="col-xl-10">
                    <div className="__fiveStars">
                      <i
                        className="bi bi-star-fill text-warning"
                        aria-hidden="true"
                      ></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p>
                      “1Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi aliquid dolore, in ex natus officiis iusto eius quia,
                      tenetur tempore ipsam. Dignissimos quo incidunt fuga
                      accusamus, quasi veritatis facere architecto.”
                    </p>
                    <p className="testimonial-title">WAHYUDI Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-aliceblue card">
                <div className="row mx-4 my-5">
                  <div className="col-xl-2 m-auto">
                    <img
                      src={img_photo1}
                      className="d-block testimonial-img m-auto"
                      alt="Person"
                    />
                  </div>
                  <div className="col-xl-10">
                    <div className="__fiveStars">
                      <i
                        className="bi bi-star-fill text-warning"
                        aria-hidden="true"
                      ></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod””
                    </p>
                    <p className="testimonial-title">Wawan Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-aliceblue card">
                <div className="row mx-4 my-5">
                  <div className="col-xl-2 m-auto">
                    <img
                      src={img_photo2}
                      className="d-block testimonial-img m-auto"
                      alt="Person"
                    />
                  </div>
                  <div className="col-xl-10">
                    <div className="__fiveStars">
                      <i
                        className="bi bi-star-fill text-warning"
                        aria-hidden="true"
                      ></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod””
                    </p>
                    <p className="testimonial-title">Rendra Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                className="testimonial-tombol"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                className="testimonial-tombol"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
