import React from "react";
import data from "../data";

function Categories({
  menues,
  categories,
  handleFilterItems,
  handleSortHarga,
  handleSortPequrban,
}) {
  console.log(categories);
  return (
    <>
      <section className="my-6 flex justify-between flex-wrap gap-4">
        <div className="flex gap-4">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                className="btn bg-white btn-sm"
                onClick={() => handleFilterItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="flex gap-4">
          <button className="btn bg-white btn-sm" onClick={handleSortHarga}>
            Harga
          </button>
          <button className="btn bg-white btn-sm" onClick={handleSortPequrban}>
            Pequrban
          </button>
        </div>
      </section>
    </>
  );
}

export default Categories;
