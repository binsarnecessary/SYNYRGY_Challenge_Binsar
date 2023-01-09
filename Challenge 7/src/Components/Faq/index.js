import React from "react";

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container my-5">
          <div className="row row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
            <div className="col py-5">
              <h2>Frequently Asked Question</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aut
                labore ab!
              </p>
            </div>
            <div className="col my-5">
              <div className="accordion" id="accordionExample">
                {/* <!-- item1 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus illum unde esse neque nam reprehenderit tenetur a.
                      Voluptas, et saepe ea quae provident quis maxime animi
                      illo non iure a!
                    </div>
                  </div>
                </div>
                {/* <!-- end item1 --> */}

                {/* <!-- item2 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi aliquid dolore, in ex natus officiis iusto eius quia,
                      tenetur tempore ipsam. Dignissimos quo incidunt fuga
                      accusamus, quasi veritatis facere architecto.
                    </div>
                  </div>
                </div>
                {/* <!-- end item2 --> */}

                {/* <!-- item3 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deleniti sint voluptas illo quaerat et esse voluptatum
                      porro, nobis a quas dolorem minus aut corporis est dolor
                      veniam! Placeat, commodi sint.
                    </div>
                  </div>
                </div>
                {/* <!-- end item3 --> */}

                {/* <!-- item4 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deleniti sint voluptas illo quaerat et esse voluptatum
                      porro, nobis a quas dolorem minus aut corporis est dolor
                      veniam! Placeat, commodi sint.
                    </div>
                  </div>
                </div>
                {/* <!-- end item4 --> */}

                {/* <!-- item5 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis possimus aspernatur magnam inventore error,
                      repellat ea deleniti, voluptates porro ipsam maiores
                      dolorum. Tempore fugiat incidunt enim quod ducimus commodi
                      debitis.
                    </div>
                  </div>
                </div>
                {/* <!-- end item5 --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
