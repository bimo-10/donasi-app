import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function CheckoutCard({ qurban }) {
  const Navigate = useNavigate();

  // console.log(qurban);
  const { id, title, img } = qurban;
  // console.log(title, img);

  // ARRAY OPTIONS PAYMENTS
  const payments = [
    "BCA - Virtual Account",
    "Mandiri - Virtual Account",
    "BRI - Virtual Account",
    "BNI - Virtual Account",
  ];

  // USESTATE INPUT VALUE
  const [payment, setPayment] = useState("BCA - Virtual Account");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doa, setDoa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !email || !phoneNumber) return;
    if (!name) return alert("tolong masukan nama anda");
    if (!email) return alert("tolong masukan email anda");
    if (!phoneNumber) return alert("Tolong masukan nomer handphone anda");

    console.log({
      payment: payment,
      name: name,
      email: email,
      phone: phoneNumber,
      doa: doa,
    });

    setName("");
    setEmail("");
    setPhoneNumber("");
    setDoa("");
  };

  return (
    <>
      <div className="card w-96 bg-slate-200 md:w-[32rem] lg:w-[40rem]">
        <figure>
          <img src={img} alt={title} className="w-full h-52 md:h-64 lg:h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-700">{title}</h2>

          {/* FORM DATA */}
          <form className="form-control" onSubmit={handleSubmit}>
            {/* METODE PEMBAYARAN */}
            <div>
              <label htmlFor="" className="label">
                <span>Metode Pembayaran</span>
              </label>
              <select
                id="payment"
                className="select select-bordered bg-white w-full"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                {/* MAPING PAYMENTS */}
                {payments.map((payment) => {
                  return <option key={payment}>{payment}</option>;
                })}
              </select>
            </div>

            {/* INPUT NAMA, EMAIL, PHONE */}
            <div>
              <label htmlFor="" className="label mt-6">
                Data Sohibul Qurban
              </label>
              <input
                id="nama"
                className="input my-1 bg-white w-full input-bordered "
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="email"
                className="input my-1 bg-white w-full input-bordered"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="phoneNumber"
                className="input my-1 bg-white w-full input-bordered"
                type="text"
                placeholder="Handphone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            {/* INPUT DOA DAN HARAPAN */}
            <div>
              <label htmlFor="" className="label mt-6">
                Doa dan Harapan
              </label>
              <textarea
                id="doa dan harapan"
                minLength={50}
                maxLength={200}
                type="text"
                className="textarea w-full bg-white h-24"
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
              />
            </div>

            {/* BUTTON SUMBIT */}
            <div className="card-actions mt-6">
              <button
                className="btn  btn-block bg-orange-500 hover:bg-white hover:text-black border-none text-white"
                onClick={() => Navigate(`/qurban/checkout/${id}`)}
              >
                Lanjutkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckoutCard;
