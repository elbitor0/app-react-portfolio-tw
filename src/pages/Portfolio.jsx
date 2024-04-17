import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Erwann's Portfolio
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          You can see in this page my diffrent website project. These have been
          made during my fourth semester FrontEnd Course in Dorset
          College,Dublin,Ireland. I learn thanks to these project how to use
          Javascript, React using Tailwind, Cite, Node.js.
        </p>
      </section>
      <div class="grid grid-cols-3 gap-x-8 gap-y-4">
        <div>
          <PortfolioCard
            title="Fashion web page project"
            image="images/project-fashion.jpg"
            link="portfolio/fashion/index.html"
          />
        </div>
        <div>
          <PortfolioCard
            title="Smoothie web page project"
            image="images/project-smoothie.jpg"
            link="portfolio/smoothies/index.html"
          />
        </div>
        <div>
          <PortfolioCard
            title="Crypto wallet web page project"
            image="images/project-crypto-wallet.jpg"
            link="portfolio/crypto-wallet/index.html"
          />
        </div>
        <div>
          <PortfolioCard
            title="Hero blocks web page project"
            image="images/project-hero.png"
            link="project-hero/index.html"
          />
        </div>
        <div>
          <PortfolioCard
            title="Multi-column web page project"
            image="images/project-multi-col.png"
            link="project-multi-column/index.html"
          />
        </div>
        <div>
          <PortfolioCard
            title="Amazon affiliate web page project"
            image="images/store.png"
            link="project-multi-column/index.html"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
