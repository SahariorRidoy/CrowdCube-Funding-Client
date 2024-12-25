import React from "react";
import blog1 from "../../assets/banner_1.jpg";
import blog2 from "../../assets/Banner-2.jpg";
import blog3 from "../../assets/Banner_1.3.png";
import blog4 from "../../assets/Banner_3.png";
import { Fade, Slide } from "react-awesome-reveal";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl pt-10 text-center font-bold pb-10">
        <Slide>Latest from blog</Slide>
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:px-0 px-6">
        <div className="lg:w-1/2">
          <div
            className="hero lg:h-[465px]"
            style={{
              backgroundImage: `url(${blog1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Top Crowdfunding Campaigns This Month: Inspiring Ideas to
                  Support
                </h1>
                <p className="mb-5">
                  In today’s world, crowdfunding has become a powerful tool to
                  bring dreams to life and make a difference. From supporting
                  groundbreaking innovations to helping individuals in need,
                  there’s no shortage of inspiring campaigns this month.
                </p>
                <button className="btn btn-primary">Read Full Blog</button>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="lg:w-1/2 flex flex-col gap-4 bg-gray-300 px-4 py-2">
          <div className="flex gap-10">
            <div>
              <h3 className="font-medium">
                The Power of Crowdfunding: Real Stories That Changed Lives you
                need to...
              </h3>
              <button className="btn btn-primary mt-4">Read Full Blog</button>
            </div>
            <div>
              <img className="w-64 h-32" src={blog2} alt="" />
            </div>
          </div>

          <hr />
          <div className="flex gap-10">
            <div>
              <h3 className="font-medium">
                5 Common Crowdfunding Mistakes in Short Film and How to Avoid
                Them...
              </h3>
              <button className="btn btn-primary mt-4">Read Full blog</button>
            </div>
            <div>
              <img className="w-64 h-32" src={blog3} alt="" />
            </div>
          </div>

          <hr />
          <div className="flex gap-10">
            <div>
              <h3 className="font-medium">
                How to Create an Engaging Crowdfunding Campaign that impress
                most...
              </h3>
              <button className="btn btn-primary mt-4">Read Full Blog</button>
            </div>
            <div>
              <img className="w-64 h-32" src={blog4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
