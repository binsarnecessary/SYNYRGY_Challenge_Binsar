import React from "react";
import CurrencyFormat from "react-currency-format";

const Card = ({ car }) => {
  return (
    <>
      <div className="col-xl-3 col-md-6 col-sm-12 my-3">
        <div className="card ">
          <div id="frame-image">
            <img
              src={car.image}
              className="card-img-top img-fluid"
              alt={car.manufacture}
              style={{ height: "160px", objectFit: "cover" }}
            />
          </div>
          <div
            className="card-body bg-transparent "
            style={{ height: "330px" }}
          >
            <h5 className="card-title">
              {car.manufacture} {car.model}
            </h5>
            <h4 className="card-text">
              <CurrencyFormat
                value={car.rentPerDay}
                displayType={"text"}
                thousandSeparator="."
                decimalSeparator=","
                prefix={"Rp"}
              />{" "}
              / hari{" "}
            </h4>
            <p className="card-text">{car.description}</p>
            <ul>
              <li>{car.capacity} orang</li>
              <li>{car.transmission}</li>
              <li> Tahun {car.year} </li>
              <li>
                {" "}
                availableAt {car.availableAt.slice(8, 10)}-
                {car.availableAt.slice(5, 7)}-{car.availableAt.slice(0, 4)}{" "}
                {car.availableAt.slice(11, 19)}
              </li>

              <li>
                {car.available === true ? (
                  <p>Dengan Sopir</p>
                ) : (
                  <p>Tanpa Sopir</p>
                )}
              </li>
            </ul>
          </div>
          <div className="card-footer text-center bg-transparent ">
            <button
              className="btn btn-success btn-block pilih_mobil"
              type="button"
            >
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
