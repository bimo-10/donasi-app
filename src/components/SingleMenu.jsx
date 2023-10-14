import React from "react";

import { Link } from "react-router-dom";

function SingleMenu({ menu }) {
  const { id, title, img, pequrban, price, promoPrice, sold, promo } = menu;

  // membuat mata uang dari price
  const priceCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  // membuat mata uang dari promo
  const promoCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(promoPrice);

  return (
    <>
      <section className="my-10 flex justify-center items-center gap-6">
        <Link to={`${sold ? "" : `/qurban/${menu.id}`}`}>
          <div
            className={`card w-96 bg-white shadow-xl ${
              sold ? "cursor-not-allowed" : "cursor-pointer "
            } `}
          >
            <figure className="">
              <img
                src={img}
                alt={title}
                className="w-96 h-64"
                style={{ filter: promo ? "brightness(45%)" : "" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">{title}</h2>

              {/* Promo */}
              {promo ? (
                <div className="flex">
                  <p className="text-orange-400 line-through">
                    {promo && priceCurrency}
                  </p>
                  <p className="text-orange-400">
                    {promo ? promoCurrency : priceCurrency}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-orange-400">
                    {promo ? promoPrice : priceCurrency}
                  </p>
                </div>
              )}
              {/*  */}

              {/* footer card */}
              <div className="card-actions justify-end">
                <p>
                  Berakhir:
                  <span className="text-orange-400">29 Juni 2023</span>
                </p>
                <p>
                  <span className="text-orange-400">{pequrban}</span> Pequrban
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default SingleMenu;
