import React, { useState } from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

// buat kategori semua untuk menampung semua item

function Qurban({ data, menues, setMenues, allCategories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [sortHarga, setSortHarga] = useState("asc");
  const [sortPequrban, setSortPequrban] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  console.log(searchTerm);
  console.log(categories);

  // fungsi untuk search jika yg difilter adalah title, category, price, pequrban
  const search = (data) => {
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.price.toString().includes(searchTerm) ||
        item.pequrban.toString().includes(searchTerm)
    );
  };

  // fungsi untuk filter item categori
  const handleFilterItems = (category) => {
    //   kondisi jika klik categori semua
    if (category === "semua") {
      setMenues(data);
      return;
    }

    // membuat filter kategori
    const newMenu = data.filter((item) => {
      return item.category === category;
    });

    // ubah menu ke newMenu
    setMenues(newMenu);
  };

  // membuat fungsi sorted by price
  const handleSortHarga = () => {
    if (sortHarga === "asc") {
      const data = [...menues];
      const sorted = data.sort((a, b) => a.price - b.price);
      setMenues(sorted);
      setSortHarga("dsc");
    }
    if (sortHarga === "dsc") {
      const data = [...menues];
      const sorted = data.sort((a, b) => b.price - a.price);
      console.log(sorted);
      setMenues(sorted);
      setSortHarga("asc");
    }
  };
  // membuat fungsi sorted by pequrban
  const handleSortPequrban = () => {
    if (sortPequrban === "asc") {
      const data = [...menues];
      const sorted = data.sort((a, b) => a.pequrban - b.pequrban);
      setMenues(sorted);
      setSortPequrban("dsc");
    }

    if (sortPequrban === "dsc") {
      const sorted = [...menues].sort((a, b) => b.pequrban - a.pequrban);
      setMenues(sorted);
      setSortPequrban("asc");
    }
  };

  console.log(handleSortHarga);

  return (
    <div className="mx-6 my-8">
      <Search
        menues={menues}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Categories
        menues={menues}
        categories={categories}
        handleFilterItems={handleFilterItems}
        handleSortHarga={handleSortHarga}
        handleSortPequrban={handleSortPequrban}
      />
      <Menu
        menues={search(menues)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Qurban;
