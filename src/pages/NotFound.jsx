import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const Navigate = useNavigate();

  return (
    <>
      <section className="bg-teal-500 min-h-screen">
        <nav className="py-4 flex justify-end px-4">
          <button
            className="btn hover:bg-white bg-white text-black border-none"
            onClick={() => Navigate("/qurban")}
          >
            Donasi Qurban
          </button>
        </nav>
        <div className="flex flex-col justify-center items-center my-52">
          <h1 className="text-7xl font-bold text-warning md:text-8xl lg:text-9xl my-2">
            404
          </h1>
          <h2 className="text-5xl text-white md:text-6xl lg:text-7xl">
            PAGE NOT FOUND
          </h2>
        </div>
      </section>
    </>
  );
}

export default NotFound;
