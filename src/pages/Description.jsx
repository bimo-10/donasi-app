import React from "react";
import JenisQurbanCard from "../components/JenisQurbanCard";
import { useParams } from "react-router-dom";

function Description({ menues }) {
  const { qurbanId } = useParams();
  // console.log(qurbanId);
  const qurban = menues.find((menu) => menu.id == qurbanId);
  // console.log(qurban);
  return (
    <>
      <main className="min-h-screen hero my-10  ">
        <JenisQurbanCard qurban={qurban} />
      </main>
    </>
  );
}

export default Description;
