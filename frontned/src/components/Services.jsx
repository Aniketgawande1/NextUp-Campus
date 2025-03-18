import React from "react";
import ConferencesImg from "../assets/coffee2.png";  // Using existing coffee2.png
import WorkshopsImg from "../assets/coffee-white.png"; // Using existing coffee-white.png
import SocialsImg from "../assets/coffee2.png"; // Using existing coffee2.png

const ServicesData = [
  {
    id: 1,
    img: ConferencesImg,
    name: "Conferences",
    description:
      "Professional gatherings with keynote speakers, panel discussions, and networking opportunities for academic and career growth.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: WorkshopsImg,
    name: "Workshops",
    description:
      "Hands-on interactive sessions focused on developing specific skills and knowledge in small group settings.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: SocialsImg,
    name: "Social Events",
    description:
      "Fun gatherings designed to build community, foster connections, and provide students with engaging entertainment options.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-16 bg-gray-900">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold font-cursive text-white">
              Campus Events For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-gray-800 hover:bg-primary hover:text-white relative shadow-lg transition-all duration-300 group max-w-[300px] p-6 text-white"
              >
                {/* Image section */}
                <div className="h-[122px] flex justify-center items-center">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-24 h-24 rounded-full object-cover transform -translate-y-8
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  />
                </div>

                {/* Text section */}
                <div className="text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-300 group-hover:text-white transition-all text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;