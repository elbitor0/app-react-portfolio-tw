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
              You will be able to find to find in this website my Portfolio and
              my contact. I am available to discuss on any project concerning
              computer Engineering, just email me!
            </p>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            ></a>
          </div>
          <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-uiherophone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Home Page
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Hello, My name is Erwann Gao, I am a student at Dorset College,
          Dublin, Welcome to my professional website. Take a Look At my recent
          work!
        </p>
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
        <div class="grid grid-cols-3 gap-x-8 gap-y-4">
          <div>
            <PortfolioCard
              title="Fashion web page project"
              image="../images/project-fashion.jpg"
              link="./portfolio/fashion/index.html"
            />
          </div>
          <div>
            <PortfolioCard
              title="Smoothie web page project"
              image="../images/project-smoothie.jpg"
              link="./portfolio/smoothies/index.html"
            />
          </div>
          <div>
            <PortfolioCard
              title="Crypto wallet web page project"
              image="../images/project-crypto-wallet.jpg"
              link="./portfolio/crypto-wallet/index.html"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
