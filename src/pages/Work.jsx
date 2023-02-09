import React from "react";
import Slider from "../components/Slider";

const Work = () => {
  return (
    <div>
      <p className="py-2">
        I'm currently building{" "}
        <a
          href="/images/camden.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff8e3c]"
        >
          Camden
        </a>
        , a 1&2 Bedroom Apartment building in{" "}
        <a
          className="text-[#ff8e3c]"
          href="https://en.wikipedia.org/wiki/Lagos"
        >
          Lagos
        </a>
        .{" "}
      </p>
      <p className="py-2">
        In a previous life, I was a{" "}
        <a
          className="text-[#ff8e3c]"
          href="https://en.wikipedia.org/wiki/Banker_(disambiguation)"
        >
          Banker
        </a>
        .
      </p>
      <div className="mt-5">
        <h1 className=" text-[#0d0d0d] py-5 text-[1.5rem]">
          Latest Project: Woodland Court
        </h1>
        <div className=" flex flex-col sm:flex-row  gap-10 ">
          <div className=" w-full overflow-hidden">
            <Slider />
          </div>
          <div className=" w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.709855852476!2d3.5483520146869276!3d6.431305895346942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7018e3bf95d%3A0x5dc2a642e0a8c9eb!2sOrchid%20Rd%2C%20Eti-Osa%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1675868511412!5m2!1sen!2sng"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
