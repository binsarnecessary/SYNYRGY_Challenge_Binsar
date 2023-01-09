import React from "react";
import { Link } from "react-router-dom";
import img_car from "../../assets/img_car.png";
const Home = () => {
  return (
    <>
      <section id="homepage">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
            <div className="col my-lg-5 ps-lg-5">
              <h1 className="fw-bold">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/sewamobil">
                <button
                  type="button"
                  className="btn btn-success btn-lg limegreen04"
                >
                  Mulai sewa mobil
                </button>
              </Link>
            </div>
            <div className="col d-flex justify-content-end p-0 ">
              <img className="img-fluid float-right" src={img_car} alt="Car" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
