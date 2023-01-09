import React, { useEffect, useState } from "react";
import { Card, Footer, Navbar } from "../../Components";
import img_car from "../../assets/img_car.png";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";

const MulaiSewaPage = () => {
  const dispatch = useDispatch();
  const { listCarsResult, listCarsError } = useSelector(
    (state) => state.carReducer
  );
  const [penumpang, setPenumpang] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [driver, setDriver] = useState();
  const [filteredCar, setFilteredCar] = useState([]);

  useEffect(() => {
    dispatch(getListCars());
  }, [dispatch]);

  function onPenumpangHandler(e) {
    e.preventDefault();
    setPenumpang(e.target.value);
  }

  function onDateChange(e) {
    e.preventDefault();
    setDate(e.target.value);
  }

  function onHourChange(e) {
    e.preventDefault();
    setHour(e.target.value);
  }

  function onDriverChange(e) {
    e.preventDefault();
    setDriver(e.target.value);
  }

  function onSubmitButtonHandler(e) {
    e.preventDefault();
    if (!driver) {
      return alert("silahkan pilih tipe driver");
    }
    if (!date) {
      return alert("silahkan pilih tanggal");
    }
    if (!hour) {
      return alert("silahkan pilih waktu jemput/ambil");
    }
    if (!penumpang) {
      setPenumpang(0);
    }
    const filteredCars = [];

    let filterdriver;
    if (driver === "true") {
      filterdriver = true;
    }
    if (driver === "false") {
      filterdriver = false;
    }

    let dateInput = Date.parse(date + "T" + hour);

    if (listCarsResult) {
      if (driver && dateInput !== NaN) {
        for (let i = 0; i < listCarsResult.length; i++) {
          let dataDate = Date.parse(listCarsResult[i].availableAt);
          if (
            listCarsResult[i].capacity >= penumpang &&
            listCarsResult[i].available === filterdriver &&
            dataDate >= dateInput
          ) {
            filteredCars.push(listCarsResult[i]);
          }
        }
        if (filteredCars.length === 0) {
          return alert("Pencarian Tidak ditemukan");
        }
      }
    }
    console.log(filteredCars.length);
    setFilteredCar(filteredCars);
  }

  function onClearhandler(e) {
    e.preventDefault();
    setPenumpang("");
    setDate("");
    setDriver("");
    setHour("");
    setFilteredCar([]);
  }

  return (
    <>
      <Navbar />
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
            </div>
            <div className="col d-flex justify-content-end p-0 ">
              <img className="img-fluid float-right" src={img_car} alt="Car" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <form>
          <div className="form__section">
            <div className="row ct__form">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <label htmlFor="driverType" className="form-label">
                      Tipe Driver
                    </label>
                    <select
                      className="form-select"
                      id="input_driver"
                      onChange={(e) => onDriverChange(e)}
                      value={driver}
                      required
                    >
                      <option hidden>Pilih Tipe Driver</option>
                      <option value="true">Dengan Sopir</option>
                      <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <label htmlFor="form_date" className="form-label">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="input_tanggal"
                      placeholder="Pilih Tanggal"
                      required
                      onChange={(e) => onDateChange(e)}
                      value={date}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <label htmlFor="form_time" className="form-label">
                      Waktu Jemput/Ambil
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="input_waktu"
                      placeholder="Pilih Waktu"
                      onChange={(e) => onHourChange(e)}
                      required
                      value={hour}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <label htmlFor="jumlah" className="form-label">
                      Jumlah Penumpang (optional)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="input_penumpang"
                      placeholder="Penumpang"
                      onChange={(e) => onPenumpangHandler(e)}
                      value={penumpang}
                    />
                  </div>
                  <div className="mt-4 col-12 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-start">
                    <button
                      className="btn btn-success m-1"
                      type="submit"
                      id="form_filter"
                      onClick={(e) => onSubmitButtonHandler(e)}
                    >
                      Cari
                    </button>
                    <button
                      id="clear-btn"
                      className="btn btn-danger m-1"
                      onClick={(e) => onClearhandler(e)}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className="container">
        <div className="row">
          {listCarsError ? (
            <>Fetching eror</>
          ) : filteredCar.length !== 0 ? (
            filteredCar.map((car, index) => <Card key={index} car={car} />)
          ) : listCarsResult !== false ? (
            listCarsResult.map((car, index) => <Card key={index} car={car} />)
          ) : (
            <h1>eror</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MulaiSewaPage;
