import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          My contact
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          You can contact me via email at{" "}
          <a href="mailto:erwann.gao@epita.fr" style={{ color: "blue" }}>
            erwann.gao@epita.fr
          </a>
          . And here is my{" "}
          <a
            href="https://github.com/elbitor0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Contact;
