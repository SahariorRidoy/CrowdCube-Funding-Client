import React from "react";
import Banner from "./Banner";
import RunningCampaign from "./RunningCampaign";
import { useLoaderData } from "react-router";
import FundraisingJourney from "./FundraisingJourney";
import Blog from "./Blog";

const Home = () => {
  const runningCampaignData = useLoaderData();
  console.log(runningCampaignData);
  
  const currentDate =new Date();
  const filteredCampaigns = runningCampaignData
  ?.filter((campaign) => new Date(campaign.date) >= currentDate)
  

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto">
      <h2 className="text-3xl pt-20 text-center font-bold pb-10">Running Campaign</h2>
        <div className="grid lg:grid-cols-3 gap-6">

      {filteredCampaigns?.map((runningCampaign, idx) => {
        return (
          <RunningCampaign
            key={runningCampaign?._id}
            idx={idx}
            runningCampaign={runningCampaign}
          />
        );
      })}
        </div>
        <FundraisingJourney></FundraisingJourney>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
