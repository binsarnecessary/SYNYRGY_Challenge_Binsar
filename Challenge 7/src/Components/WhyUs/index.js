import React from "react";
import "../../App.css";
const WhyUs = () => {
  return (
    <>
      <section id="whyus">
        <div className="container">
          <h2 className="text-center">Why Us?</h2>
          <p className="text-center">Mengapa harus pilih Binar Car Rental?</p>
          <div className="row">
            {/* <!-- item 1 --> */}
            <div className="col-md-6 col-xl-3">
              <div className="card  order-card">
                <div className="card-block">
                  <div
                    className="rounded-circle icon-whyus"
                    style={{
                      backgroundColor: "#F9CC00",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                  >
                    <i className="bi bi-hand-thumbs-up"></i>
                  </div>
                  <h6 className="fw-bold mt-3">Mobil Lengkap</h6>
                  <p className="m-b-0">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item2 --> */}
            <div className="col-md-6 col-xl-3">
              <div className="card order-card">
                <div className="card-block">
                  <div
                    className="rounded-circle icon-whyus"
                    style={{
                      backgroundColor: "#FA2C5A",
                      paddingLeft: "6px",
                      paddingTop: "1px",
                      color: "white",
                    }}
                  >
                    <i className="bi bi-tag"></i>
                  </div>
                  <h6 className="fw-bold mt-3">Mobil Lengkap</h6>
                  <p className="m-b-0">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item3 --> */}
            <div className="col-md-6 col-xl-3">
              <div className="card bg-c-yellow order-card">
                <div className="card-block">
                  <div
                    className="rounded-circle icon-whyus"
                    style={{
                      backgroundColor: "#0D28A6",
                      paddingLeft: "6px",
                      color: "white",
                    }}
                  >
                    <i className="bi bi-clock"></i>
                  </div>
                  <h6 className="fw-bold mt-3">Layanan 24 Jam</h6>
                  <p className="m-b-0">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- item4 --> */}
            <div className="col-md-6 col-xl-3">
              <div className="card bg-c-pink order-card">
                <div className="card-block">
                  <div
                    className="rounded-circle icon-whyus"
                    style={{
                      backgroundColor: "#5CB85F",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                  >
                    <i className="bi bi-award"></i>
                  </div>
                  <h6 className="fw-bold mt-3">Sopir Profesional</h6>
                  <p className="m-b-0">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end item --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
