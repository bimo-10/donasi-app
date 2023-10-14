import React, { useState } from "react";

import SingleMenu from "./SingleMenu";

function Menu({ menues, currentPage, setCurrentPage }) {
  // pagination

  // berapa yg ingin di tampilkan
  const postPerPage = 6;

  // jika di halaman 1 ada 1-6 maka di halaman 2 ada 7 - 12
  const lastIndex = currentPage * postPerPage;

  const firstIndex = lastIndex - postPerPage;
  const newMenues = menues.slice(firstIndex, lastIndex);

  // jumlah halaman
  const nPage = Math.ceil(menues.length / postPerPage);

  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handleCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {newMenues.map((menu) => {
          console.log(menu);

          return <SingleMenu key={menu.id} menu={menu} />;
        })}
      </div>

      <div className="flex justify-center items-center">
        <div className="join">
          <button
            className="join-item btn btn-outline"
            onClick={handlePrevPage}
          >
            «
          </button>

          {numbers.map((number, i) => (
            <button
              key={i}
              className={`join-item btn ${
                currentPage === number ? "btn-primary" : "btn-outline"
              } `}
              onClick={() => handleCurrentPage(number)}
            >
              {number}
            </button>
          ))}

          <button
            className="join-item btn btn-outline"
            onClick={handleNextPage}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
