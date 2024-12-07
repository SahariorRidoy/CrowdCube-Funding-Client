import React from "react";

const AddNewCampaign = () => {
  return (
    <div className="max-w-sm lg:max-w-xl lg:mx-auto flex justify-center my-10 border-2 shadow-lg rounded-lg py-10 mx-4 lg:px-0 ">
      <div>
        <h2 className="font-bold text-3xl">Add New Campaign</h2>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
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
              type="text"
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
              type="text"
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
