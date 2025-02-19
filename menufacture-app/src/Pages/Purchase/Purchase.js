import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import PurchaseModal from "./PurchaseModal";
const Purchase = () => {
  const { id } = useParams();
  const { data: tool, isLoading } = useQuery(["tools", id], () =>
    fetch(`https://boiling-hollows-81420.herokuapp.com/tools/${id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) return <Spinner />;
  return (
    <div className="container-width">
      <div className="hero  bg-base-100 my-24">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={tool.image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">{tool.name}</h1>
            <p className="py-6">{tool.description}</p>
            <h3 className="text-2xl font-semibold uppercase">
              price: ${tool.price}
            </h3>
            <p className="text-xl pb-4">
              Available:{" "}
              <span className="text-blue-500 font-bold">{tool.available}</span>
            </p>
          </div>
        </div>
      </div>
      <PurchaseModal tool={tool} />
    </div>
  );
};

export default Purchase;
