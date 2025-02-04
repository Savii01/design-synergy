import React, { useRef, useEffect } from "react";
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
    image:
      "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Brand Design", "Web Design"],
    link: "#",
  },
  {
    id: 2,
    name: "Quantum",
    image:
      "https://images.pexels.com/photos/9835968/pexels-photo-9835968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Visual Design", "Development"],
    link: "#",
  },
  {
    id: 3,
    name: "Elevate",
    image:
      "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["UI/UX", "Strategy"],
    link: "#",
  },
  {
    id: 4,
    name: "Pulse",
    image:
      "https://images.pexels.com/photos/9835968/pexels-photo-9835968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Brand Identity", "Motion"],
    link: "#",
  },
  {
    id: 5,
    name: "Apex",
    image:
      "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Marketing", "Design"],
    link: "#",
  },
];

const ProjectSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="relative mx-auto py-6 px-6 lg:px-32 2xl:px-[350px] bg-white dark:bg-gray-900">
      <h1 className="text-center text-[32px] font-customFont font-bold text-black dark:text-white mt-10">
        Selected Works
      </h1>
      <p className="text-gray-800 dark:text-gray-200 text-[18px]  mb-10 text-center">Take a little time to explore some of our interesting projects</p>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 4000 }}
        loop
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} w-3 h-3 mx-1 rounded-full  bg-gray-300 dark:bg-gray-500 transition-all duration-300 transform scale-100 hover:scale-125"></span>
          `,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="rounded-xl overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white shadow-lg rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-[400px] h-[200px] md:w-[1215px] md:h-[500px] object-cover rounded-t-lg"
              />
              <div className="p-2 md:p-4 flex items-center justify-between">
                <h3 className="text-sm md:text-lg font-bold text-black  dark:text-white">
                  {project.name}
                </h3>
                <div className="hidden md:flex text-[10px] md:text-sm text-gray-500 bg-white dark:bg-gray-500 dark:text-white rounded-full px-4 py-3 font-semibold">
                  {project.category.join(" • ")}
                </div>
                <a
                  href={project.link}
                  className="mt-2 inline-block text-black text-[10px] md:text-sm font-medium dark:text-white"
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
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full z-50 flex items-center justify-center"
      >
        &#10094;
      </button>
      <button
        ref={nextRef}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full z-50 flex items-center justify-center"
      >
        &#10095;
      </button>

      {/* Custom Pagination */}
      <div className="flex justify-center  mt-6">
        <div className="custom-pagination flex justify-center items-center gap-2"></div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="text-blue-500 dark:text-white text-[18px] font-medium hover:underline"
        >
          View All Projects →
        </Link>
      </div>
    </div>
  );
};

export default ProjectSlider;
