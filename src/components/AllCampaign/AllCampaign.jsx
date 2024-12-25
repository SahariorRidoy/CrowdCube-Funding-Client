import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CampaignTable from "../CampaignTable/CampaignTable";
import Loading from "../Loading/Loading";
import toast, { Toaster } from 'react-hot-toast';
const AllCampaign = () => {
  const campaignData = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (campaignData) {
      setSortedCampaigns(campaignData); 
      setLoading(false);
    }
  }, [campaignData]);

  const handleSort = () => {
    const sorted = [...sortedCampaigns].sort((a, b) => {
      return isAscending ? a.amount - b.amount : b.amount - a.amount;
    });
    setSortedCampaigns(sorted);
    setIsAscending(!isAscending); 
    toast.success(
      `Sorted Campaigns in ${isAscending ? "Ascending" : "Descending"} order!`
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="flex justify-center mb-4">
        <button
          className="btn btn-info text-white btn-sm"
          onClick={handleSort}
        >
          Sort by Donation Amount 
        </button>
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-info">Serial</th>
              <th className="text-base text-info hidden sm:table-cell">Campaign Photo</th>
              <th className="text-base text-info">Campaign Name</th>
              <th className="text-base text-info hidden sm:table-cell">Deadline</th>
              <th className="text-base text-info">Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-2xl text-error">
                  No Data Found
                </td>
              </tr>
            ) : (
              sortedCampaigns.map((campaign, idx) => (
                <CampaignTable key={campaign?._id} idx={idx} campaign={campaign} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
