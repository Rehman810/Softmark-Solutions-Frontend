import React from "react";
import "../css/Cards.css";
import Singlecard from "./Singlecard";
import img1 from "../assets/code.png";
import img2 from "../assets/mobile-development.png";
import img3 from "../assets/seo.png";
import img4 from "../assets/marketing.png";

const data = [
  {
    path: img1,
    title: "Web Development",
    desc: "Our battle tested team of Web Developers use rapid development methodologies & incorporated frameworks that result in growth and productivity for an organization.",
    route: "/webPlans",
  },
  {
    path: img2,
    title: "Mobile App Development",
    desc: "Novatore aims to help businesses connect with their customers by crafting Custom App experiences. Our solutions empower the connected lifestyle.",
    route: '/appPlans'
  },
  {
    path: img3,
    title: "Search Engine Optimization",
    desc: "Boost your online presence with our expert SEO services. We use advanced strategies to improve your search rankings, and enhance website authority for sustainable business growth.",
    // route: '/seo'
  },
  {
    path: img4,
    title: "Digital Marketing",
    desc: "Maximize your brand's impact with our comprehensive digital marketing solutions. We specialize in social media, PPC, content marketing, and email campaigns to increase engagement, and ROI.",
    route: '/digitalMarketing'
  },
];

const Cards = () => {
  return (
    <div>
      <div className="card-heading-service" id="services">
        <h2 className="heading-underline-service" id="services">Our Services</h2>
      </div>
      <div className="cards-container container">
        {data.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
