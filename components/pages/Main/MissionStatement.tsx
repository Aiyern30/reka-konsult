// components/MissionStatement.js
import React from "react";

const MissionStatement = () => {
  return (
    <div className="relative h-auto md:h-screen flex flex-col items-center justify-center space-y-10 md:space-y-0 md:block pt-10 ">
      <div className="md:absolute md:top-32 md:left-32">
        <div className="h-96 w-96 md:h-96 md:w-96 bg-red-500 rounded-full text-justify flex items-center justify-center p-10 text-white">
          At ARKITEK REKAKONSULT SDN BHD, our mission is to always be creative,
          innovative, and up to date in our architectural designs and project
          management solutions to meet our clients' aspirations and needs. We
          have more than 30 years of professional consultancy experience in
          diverse design projects, many of which were complex, unique, and
          one-of-a-kind.
        </div>
      </div>

      <div className="md:absolute md:top-[450px] md:left-56">
        <div className="h-64 w-64 bg-blue-500 rounded-full text-justify flex items-center justify-center p-10 text-white">
          The many successfully completed and timely delivered projects attest
          to our professional abilities in architectural design and project
          management.
        </div>
      </div>

      <div className="md:absolute md:top-[650px] md:left-[340px]">
        <div className="h-64 w-64 md:h-72 md:w-72 bg-green-500 rounded-full text-justify flex items-center justify-center p-10 text-white">
          Our attention to design and detail, integrity, and pride have earned
          us the confidence and respect of our clients, who have continually
          entrusted us with their projects.
        </div>
      </div>

      <div className="md:absolute md:top-[700px] md:left-[600px]">
        <div className="h-64 w-64 bg-gray-500 rounded-full text-justify flex items-center justify-center p-10 text-white">
          We strive to always perform our duties as architects with integrity,
          delivering architecture appropriate for our clients.
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
