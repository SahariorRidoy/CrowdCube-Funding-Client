import React from "react";
import { Link } from "react-router";

const MyCampaignsTable = ({ campaign, idx }) => {
  const { image,amount, date, title, _id } = campaign;
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>
          <img className="w-20 rounded-md" src={image} alt="" />
        </td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{amount}</td>
        <td>
          <div>
            <div className="flex gap-3">
              <Link
                to={`/update-campaign/${_id}`}
                className="btn btn-info text-white"
              >
                Update
              </Link>
              <Link
                to={`/add-campaign/${_id}`}
                className="btn btn-error text-white"
              >
                Delete
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyCampaignsTable;
