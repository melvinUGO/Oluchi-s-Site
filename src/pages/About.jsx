import React from "react";

const About = () => {
  return (
    <div className="">
      <div className=" sm:flex gap-8 ">
        <div className=" max-w-xs">
          <img className="" src="/oluchi.jpg" alt="Oluchi Arinze" />
        </div>
        <div>
          <p className="py-2">Hi,I'm Oluchi.</p>
          <p className="py-2">
            Property Developer, currently based in{" "}
            <a
              className="text-[#ff8e3c]"
              href="https://en.wikipedia.org/wiki/Lagos"
            >
              Lagos
            </a>
            . Alumna of{" "}
            <a
              className="text-[#ff8e3c]"
              href="https://en.wikipedia.org/wiki/Imo_State_University"
            >
              Imo State University.
            </a>
          </p>
          <p className="py-2">
            Managing Director at{" "}
            <a
              className="text-[#ff8e3c]"
              href="http://kirkwoodpropertiesng.com/"
            >
              Kirkwood Properties LTD
            </a>
          </p>
          <p className="py-2">
            Intrigued by design, traveling, photography, strategy, art, fabulous
            food, and even better conversations.
          </p>
          <p className="py-2">
            Seeking to be inspired, to envision the unlikely, to work hard for
            things that are worth it, and to be surrounded by those who bring
            out the best in me.
          </p>
          <p className="py-2">
            Say hi on Instagram{" "}
            <a
              className="text-[#ff8e3c]"
              href="https://www.instagram.com/theoluchiarinze/?next=%2F"
            >
              @theoluchiarinze
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
