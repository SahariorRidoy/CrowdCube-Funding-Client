import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCampaignsTable from "../MyCampaignsTable/MyCampaignsTable";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: contextUser } = useContext(AuthContext);
  const [user, setUser] = useState(contextUser || null);
  useEffect(() => {
    const fetchUserCampaigns = async () => {
      if (!user?.email) return;
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/my-campaign?email=${user.email}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCampaigns();
  }, [user?.email]);

  if (loading) {
    return <p>Loading your campaigns...</p>;
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Campaign Photo</th>
              <th>Campaign Name</th>
              <th>Deadline</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {campaigns?.length === 0 ? (
              <p>No Data Found</p>
            ) : (
              campaigns?.map((campaign, idx) => {
                
                return (
                  <MyCampaignsTable
                    key={campaign?._id}
                    idx={idx}
                    campaign={campaign}
                    setCampaigns={setCampaigns}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
