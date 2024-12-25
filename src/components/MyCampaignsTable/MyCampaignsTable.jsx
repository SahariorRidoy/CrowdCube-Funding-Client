import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyCampaignsTable = ({ campaign, idx, setCampaigns  }) => {
  const { image,amount, date, title, _id } = campaign;
  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with delete
        fetch(`https://crowdfunding-theta-three.vercel.app/delete-campaign/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Campaign deleted successfully") {
              Swal.fire(
                "Deleted!",
                "Your campaign has been deleted.",
                "success"
              );
              setCampaigns((prevCampaigns) =>
                prevCampaigns.filter((campaign) => campaign._id !== _id)
              );
            } else {
              Swal.fire("Error!", "Something went wrong.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error!", "An error occurred while deleting.", "error");
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td className='hidden sm:table-cell'>
          <img className="w-20 rounded-md" src={image} alt="" />
        </td>
        <td>{title}</td>
        <td className='hidden sm:table-cell'>{date}</td>
        <td className='hidden sm:table-cell'>{amount}</td>
        <td>
          <div>
            <div className="flex gap-3 ml-[-35px]">
              <Link
                to={`/update-campaign/${_id}`}
                className="btn btn-info text-white"
              >
                Update
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn-error text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyCampaignsTable;
