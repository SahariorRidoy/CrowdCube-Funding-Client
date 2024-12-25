import React from "react";
import { Link } from "react-router";

const RunningCampaign = ({ runningCampaign, idx }) => {
  const { image, title, description, _id } = runningCampaign;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 mb-10 border-teal-200">
      <figure className="px-10 pt-10 w-[300px] h-[150px]">
        <img src={image} alt={title} className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions">
          <Link to={`/all-campaign/${_id}`} className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
