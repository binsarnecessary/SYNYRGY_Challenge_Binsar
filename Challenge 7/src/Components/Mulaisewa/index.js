import React from "react";
import { Link } from "react-router-dom";

const MulaiSewa = () => {
  return (
    <>
      <section id="mulaisewa">
        <div className="container darkblue04 rounded">
          <div className=" text-center p-5 text-white ">
            <div className=" ">
              <h3 style={{ fontSize: "36px" }}>
                Sewa Mobil di (Lokasimu) Sekarang
              </h3>
            </div>
            <div className=" py-3 rowbiru m-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="">
              <Link to="sewamobil">
                <button
                  type="button"
                  className="btn btn-success limegreen04 btn-lg"
                >
                  Mulai sewa mobil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MulaiSewa;
