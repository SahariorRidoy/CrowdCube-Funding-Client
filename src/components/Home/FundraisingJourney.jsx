import React from "react";
import img1 from "../../assets/start-fundraising.jpg";
import img2 from "../../assets/share-fundraising.jpg";
import img3 from "../../assets/complete.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const FundraisingJourney = () => {
  return (
    <div className="mb-10">
      <Slide>
        <h2 className="text-3xl pt-10 text-center font-bold pb-10">
          Start your fundraising journey
        </h2>
      </Slide>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 w-96 border-2">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              <Fade cascade damping={1e-1}>
                Start your fundraiser
              </Fade>
              <div className="badge badge-primary">1</div>
            </h2>
            <p>
              Tell your story, set a donation amount, add pictures and add
              deadline
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 border-2">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Fade cascade damping={1e-1}>
                Share with friends
              </Fade>
              <div className="badge badge-primary">2</div>
            </h2>
            <p>Send emails, share on social media, send text messages</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 border-2">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Fade cascade damping={1e-1}>
                Manage donations
              </Fade>
              <div className="badge badge-primary">3</div>
            </h2>
            <p>
              Receive donations, give donations, money goes to charity or your
              bank account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisingJourney;
