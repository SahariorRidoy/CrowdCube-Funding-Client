import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const AddNewCampaign = () => {


  const { user: contextUser } = useContext(AuthContext);
  const [user, setUser] = useState(contextUser || null);
  const handleAddNewCampaign = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.name.value;

    const newCampaign = {
      image,
      title,
      description,
      amount,
      date,
      email,
      name,
    };
    console.log(newCampaign);

    fetch("https://crowdfunding-theta-three.vercel.app/all-campaign", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success('Campaign Added Successful!')
        form.reset();
      });
  };

  return (
    <div className="max-w-sm lg:max-w-xl lg:mx-auto flex justify-center my-10 border-2 shadow-lg rounded-lg py-10 mx-4 lg:px-0 ">
      <div>
        <h2 className="font-bold text-3xl">Add New Campaign</h2>
        <form onSubmit={handleAddNewCampaign}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="image"
              placeholder="Enter Campaign Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Campaign Title</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Enter Campaign Title"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Write Campaign Description"
            ></textarea>
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Minimum Donation Amount</span>
            </div>
            <input
              name="amount"
              type="number"
              placeholder="Enter Minimum Donation Amount"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Deadline</span>
            </div>
            <input
              name="date"
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
              name="email"
              type="text"
              value={user.email}
              disabled
              placeholder="Read Only"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              name="name"
              type="text"
              value={user.displayName}
              disabled
              placeholder="Read Only"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <div>
            <button
              type="submit"
              className=" mt-2 btn bg-[#24a062] text-xl rounded-full text-white px-[90px] mb-6 hover:opacity-70"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
