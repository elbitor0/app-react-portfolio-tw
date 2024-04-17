import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Erwann's Portfolio
            </h1>
            <p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              You can see in this page my diffrent website project. These have
              been made during my fourth semester FrontEnd Course in Dorset
              College,Dublin,Ireland. I learn thanks to these project how to use
              Javascript, React using Tailwind, Cite, Node.js.
            </p>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            ></a>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-3 gap-x-8 gap-y-4">
        <div>
          <PortfolioCard
            title="Fashion web page project"
            image="images/project-fashion.jpg"
            link="/portfolio/fashion"
          />
        </div>
        <div>
          <PortfolioCard
            title="Smoothie web page project"
            image="images/project-smoothie.jpg"
            link="/portfolio/smoothies"
          />
        </div>
        <div>
          <PortfolioCard
            title="Crypto wallet web page project"
            image="images/project-crypto-wallet.jpg"
            link="/portfolio/crypto-wallet"
          />
        </div>
        <div>
          <PortfolioCard
            title="Hero blocks web page project"
            image="images/project-hero.png"
            link="/portfolio/project-hero"
          />
        </div>
        <div>
          <PortfolioCard
            title="Multi-column web page project"
            image="images/project-multi-col.png"
            link="/portfolio/project-multi-column"
          />
        </div>
        <div>
          <PortfolioCard
            title="Amazon affiliate web page project"
            image="images/store.png"
            link="/portfolio/project-multi-column"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
