import React from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    name: "Nexus",
    image: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Brand Design", "Web Design"],
    link: "#",
  },
  {
    id: 2,
    name: "Quantum",
    image: "https://images.pexels.com/photos/9835968/pexels-photo-9835968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Visual Design", "Development"],
    link: "#",
  },
  {
    id: 3,
    name: "Elevate",
    image: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["UI/UX", "Strategy"],
    link: "#",
  },
  {
    id: 4,
    name: "Pulse",
    image: "https://images.pexels.com/photos/9835968/pexels-photo-9835968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Brand Identity", "Motion"],
    link: "#",
  },
  {
    id: 5,
    name: "Apex",
    image: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Marketing", "Design"],
    link: "#",
  },
];

const ProjectSlider = () => {
  return (
    <div className="w-full px-4 md:px-20 py-10">
      <Swiper
        slidesPerView={1} // Shows only one slide at a time
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="rounded-xl overflow-hidden">
            <div className="bg-gray-200 shadow-lg rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:h-[500px] object-cover rounded-t-lg"
              />
              <div className="p-2 md:p-4 flex space-between justify-between items-center">
                <h3 className="text-sm md:text-lg font-bold">{project.name}</h3>
                <div className="text-[10px] md:text-sm text-gray-500 hidden bg-white rounded-full px-4 py-3 font-semibold md:flex">
                  {project.category.join(" • ")}
                </div>
                <a
                  href={project.link}
                  className="mt-2 inline-block text-blue-500 text-[10px] md:text-sm font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Link to="/projects" className="text-blue-500 text-[18px] font-medium hover:underline   ">
          View All Projects →
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlider;
