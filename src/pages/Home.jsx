import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  return (
    <>
      <section className="bg-white min-h-screen">
        <nav className="py-4 flex justify-end px-4">
          <button
            className="btn bg-blue-500 text-white border-none"
            onClick={() => Navigate("/qurban")}
          >
            Donasi Qurban
          </button>
        </nav>
        <div className="flex flex-col justify-center items-center my-52">
          <h2 className="text-5xl text-black md:text-6xl lg:text-7xl">
            HOME PAGE
          </h2>
        </div>
      </section>
    </>
  );
}

export default Home;
