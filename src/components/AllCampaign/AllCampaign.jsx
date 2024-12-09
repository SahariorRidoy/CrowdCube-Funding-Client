import React from "react";
import { useLoaderData } from "react-router";
import CampaignTable from "../CampaignTable/CampaignTable";

const AllCampaign = () => {
  const campaignData = useLoaderData();
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {campaignData?.length === 0 ? (
              <p>No Data Found</p>
            ) : (
              campaignData?.map((campaign,idx) => {
                return (
                  <CampaignTable key={campaign?._id} idx={idx} campaign={campaign} />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
