import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import RunningCampaign from "./RunningCampaign";
import { useLoaderData } from "react-router";
import FundraisingJourney from "./FundraisingJourney";
import Blog from "./Blog";
import { Fade, Slide } from "react-awesome-reveal";
const Home = () => {
  const runningCampaignData = useLoaderData();
  const currentDate =new Date();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme on load
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const filteredCampaigns = runningCampaignData
  ?.filter((campaign) => new Date(campaign.date) >= currentDate)
  return (
    <div>
      <div className=" flex justify-end fixed top-12 right-0 lg:top-2 lg:right-2 z-50">
      <button
          className="btn btn-md btn-outline"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto">
        <Slide>

      <h2 className="text-3xl pt-20 text-center font-bold pb-10">Running Campaign</h2>
        </Slide>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-6">

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
