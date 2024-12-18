import React from "react";
import { Link } from "react-router";

const RunningCampaign = ({ runningCampaign, idx }) => {
  const { image, title, description, _id } = runningCampaign;
  console.log(image, title, description);

  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 border-teal-200">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/add-campaign/${_id}`} className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
