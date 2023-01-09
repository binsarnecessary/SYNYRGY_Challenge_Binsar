import React from "react";
import img_service from "../../assets/img_service.png";
const OurService = () => {
  return (
    <>
      <section id="ourservice">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={img_service} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <div className="d-flex flex-row align-content-center">
                  <i className="bi bi-check-lg rounded-circle me-1 darkblue01 icon-check"></i>
                  <p className=""> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <i className="bi bi-check-lg rounded-circle me-1 darkblue01 icon-check"></i>
                  <p> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <i className="bi bi-check-lg rounded-circle me-1 darkblue01 icon-check"></i>
                  <p> Sewa Mobil Jangka Panjang Bulanan</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <i className="bi bi-check-lg rounded-circle me-1 darkblue01 icon-check"></i>
                  <p> Layanan Airport Transfer / Drop In Out</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <i className="bi bi-check-lg rounded-circle me-1 darkblue01 icon-check"></i>
                  <p> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
