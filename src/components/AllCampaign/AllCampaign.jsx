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
            <th className="text-base text-info">Serial</th>
              <th className="text-base text-info">Campaign Photo</th>
              <th className="text-base text-info">Campaign Name</th>
              <th className="text-base text-info">Deadline</th>
              <th className="text-base text-info">Amount</th>
            </tr>
          </thead>
          <tbody>
            {campaignData?.length === 0 ? (
              <p className="text-center py-10 text-2xl text-error">No Data Found</p>
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
