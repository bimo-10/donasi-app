import React from "react";
import CheckoutCard from "../components/CheckoutCard";
import { useParams } from "react-router-dom";

function Checkout({ menues }) {
  // console.log(useParams());
  const { qurbanId } = useParams();
  // console.log(qurbanId);

  const qurban = menues.find((menu) => menu.id == qurbanId);

  return (
    <>
      <main className="min-h-screen hero my-10  ">
        <CheckoutCard qurban={qurban} />
      </main>
    </>
  );
}

export default Checkout;
