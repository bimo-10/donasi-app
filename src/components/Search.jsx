import React from "react";
import { FiSearch } from "react-icons/fi";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <header>
        <div className="flex items-center justify-center">
          <input
            className="w-80 bg-white border-black border rounded-md h-8 px-2"
            type="text"
            placeholder="Temukan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
    </>
  );
}

export default Search;
