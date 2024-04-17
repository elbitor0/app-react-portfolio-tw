import { Link } from "react-router-dom";
import { ContactForm } from "./Form";
const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-center text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Contact Me
            </h1>
            <a
              href="#"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            ></a>
          </div>
        </div>
      </section>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <p
          className="text-lg leading-relaxed text-white md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          <ContactForm />
        </p>
      </section>
    </>
  );
};

export default Contact;
