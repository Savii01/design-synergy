import React, { useRef } from "react";
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
  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-center text-[32px] font-customFont mb-10 font-bold text-black mt-10"> Selected Works</h1>
      <Swiper
        slidesPerView={1} // Shows only one slide at a time
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 4000 }}
        loop
        // pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          // Assign the navigation elements to Swiper's navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="rounded-xl overflow-hidden">
            <div className="bg-gray-200 hover:bg-black hover:text-white shadow-lg rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-[400px] h-[200px] md:w-[1215px]  md:h-[500px] object-cover rounded-t-lg"
              />
              <div className="p-2 md:p-4 flex items-center justify-between">
                <h3 className="text-sm md:text-lg font-bold">{project.name}</h3>
                <div className="hidden md:flex text-[10px] md:text-sm text-gray-500 bg-white rounded-full px-4 py-3 font-semibold">
                  {project.category.join(" • ")}
                </div>
                <a
                  href={project.link}
                  className="mt-2 inline-block text-blue-500 text-[10px] md:text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10  rounded-full z-50"
      >
        &#10094;
      </button>
      <button
        ref={nextRef}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10  rounded-full z-50"
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="text-blue-500 text-[18px] font-medium hover:underline"
        >
          View All Projects →
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlider;
