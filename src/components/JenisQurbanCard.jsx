import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

function JenisQurbanCard({ qurban }) {
  // console.log(menues);
  // console.log(useParams());

  // console.log(qurban);

  const Navigate = useNavigate();

  const { id, title, img } = qurban;

  const [totalInput, setTotalInput] = useState(0);
  console.log(totalInput);

  const handleTotalForm = (e) => {
    e.preventDefault();

    if (!totalInput) return;

    console.log({ jumlah: totalInput });
  };

  return (
    <>
      <div className="card w-96 bg-slate-200 md:w-[32rem] lg:w-[40rem]">
        <figure>
          <img src={img} alt="" className="w-full h-52 md:h-64 lg:h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-700">{title}</h2>

          <form action="" onSubmit={handleTotalForm}>
            <div className="label">
              <label htmlFor="" className="text-orange-400 text-base">
                Jumlah Sohibul Qurban
              </label>
              <input
                type="number"
                className="input input-xs w-20 text-center bg-white"
                min={0}
                step={1}
                value={totalInput}
                onChange={(e) => setTotalInput(e.target.value)}
              />
            </div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tenetur assumenda dolore id quia labore illum, quis tempora in!
              Id, voluptates! Similique perspiciatis provident a, aut atque
              voluptatibus mollitia autem. Consectetur alias ad dolorum
              praesentium eos fugit pariatur itaque ullam repudiandae, atque
              vitae sapiente! Exercitationem distinctio quibusdam, illo
              reiciendis veniam vitae culpa labore expedita voluptates. Optio
              neque iure pariatur molestiae! Eveniet ipsum itaque, aperiam
              doloribus quam molestiae at corrupti deleniti nulla ipsam,
              perferendis autem vitae sint! Deserunt molestiae commodi vero
              obcaecati totam sapiente ducimus modi quia velit quo, eligendi
              corporis!
            </p>

            <div className="card-actions my-2">
              <Link to={`${totalInput ? `/qurban/checkout/${id}` : ""}`}>
                <button className="btn  btn-block bg-orange-500 border-none text-white">
                  Tunaikan Qurban
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default JenisQurbanCard;
