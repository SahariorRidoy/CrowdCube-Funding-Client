import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCampaignsTable from "../MyCampaignsTable/MyCampaignsTable";
import Loading from "../Loading/Loading";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: contextUser } = useContext(AuthContext);
  const [user] = useState(contextUser || null);
  
  useEffect(() => {
    const fetchUserCampaigns = async () => {
      if (!user?.email) return;
      try {
        setLoading(true);
        const response = await fetch(
          `https://crowdfunding-theta-three.vercel.app/my-campaign?email=${user.email}`
        );
      
        const data = await response.json();
        setCampaigns(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } 
    };

    fetchUserCampaigns();
  }, [user?.email]);
  if(loading){
    return <Loading></Loading>
}
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-info">Serial</th>
              <th className="text-base text-info hidden sm:table-cell">Campaign Photo</th>
              <th className="text-base text-info">Campaign Name</th>
              <th className="text-base text-info hidden sm:table-cell">Deadline</th>
              <th className="text-base text-info hidden sm:table-cell">Amount</th>
            </tr>
          </thead>
          <tbody>
            {campaigns?.length === 0 ? (
               <tr>
               <td colSpan="5" className="text-center py-10 text-2xl text-error">
                 No Data Found
               </td>
             </tr>
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
