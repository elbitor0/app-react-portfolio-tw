import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import PortfolioCard from "./PortfolioCard";

const Home = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Gao Erwann
            </h1>
            <p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Hello, My name is Erwann Gao, I am a student at Dorset College,
              Dublin, Welcome to my professional website. You can find in this
              website my Portfolio and a way to contact me. I am available to
              discuss on any project concerning computer Engineering, just email
              me!
            </p>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            ></a>
          </div>
        </div>
      </section>

      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Take a Look at my work!
        </h2>
      </section>

      <section
        class="p lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1
      gap-12
      px-12 
      pt-2 
      md:grid-cols-3 
      md:gap-6 md:px-14 

      lg:px-24 
      xl:px-32 
      "
      >
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
            link="portfolio/crypto-wallet"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
