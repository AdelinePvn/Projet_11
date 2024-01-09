import React from "react";
import "./acceuil.scss";
import Banner from "../../modules/banner";

import Feature from "../../modules/feature";

import imgFeature1 from "../../img/icon-chat.png";
import imgFeature2 from "../../img/icon-money.png";
import imgFeature3 from "../../img/icon-security.png";

export default function Acceuil() {
  return (
    <>
      <Banner
        text="No fees. </br> No minimum deposit. </br> High interest rates."
        textBanner="Open a savings account with Argent Bank today!"
        alt="image de bannière"
      />
      <div className="features">
        <Feature
          image={imgFeature1}
          alt="image de feature"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />

        <Feature
          image={imgFeature2}
          alt="image de feature"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />

        <Feature
          image={imgFeature3}
          alt="image de feature"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </>
  );
}
