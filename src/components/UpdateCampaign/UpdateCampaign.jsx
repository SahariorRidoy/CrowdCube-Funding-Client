import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateCampaign = () => {
  const { id } = useParams();
  console.log(id);

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    date: "",
    amount: "",
    email: "",
    name:"",
    
  });

  const { user } = useContext(AuthContext);
  console.log(user);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          `https://crowdfunding-theta-three.vercel.app/all-campaign/${id}`
        );
        const data = await response.json();
        setCampaign(data);
        setFormData({
            image:data.image,
          title: data.title,
          description: data.description,
          date: data.date,
          amount: data.amount,
          email: user?.email || "",
          name: user?.displayName
          || "",
        });
      }  finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id, user?.email, user?.displayName
  ],);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://crowdfunding-theta-three.vercel.app/update-campaign/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Campaign updated successfully!");
        navigate(`/my-campaign`);
      } else {
        toast.error(result.message || "Failed to update campaign");
      }
    } catch (error) {
      console.error("Error updating campaign:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-sm lg:max-w-xl lg:mx-auto flex justify-center my-6 border-2 shadow-lg rounded-lg py-6 mx-4 lg:px-0 ">
      {campaign ? (
        <div>
          <h2 className="font-bold text-3xl">Update Campaign</h2>

          <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
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
                value={formData.title}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
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
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Minimum Donation Amount"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Deadline</span>
              </div>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.name}
                onChange={handleChange}
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
                Update Campaign
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>Campaign not found</p>
      )}
    </div>
  );
};

export default UpdateCampaign;
