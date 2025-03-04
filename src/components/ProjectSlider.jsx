import { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "../Data"; // Import project data

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
      <p className="text-gray-800 dark:text-gray-200 text-[16px] mb-10 text-center">
        Take a little time to explore some of our interesting projects
      </p>


      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={2} // Add some space between slides
        slidesPerView={1} // Show 3 slides at a time
        centeredSlides={true} // Center the active slide
        loop={true} // Enable looping
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} w-3 h-3 mx-1 rounded-full  bg-gray-300 dark:bg-gray-500 transition-all duration-300 transform scale-100 hover:scale-125"></span>
          `,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 1.4, // Center slide wider
            spaceBetween: 1, // Reduce space between slides
          },
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        className="w-full"
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
              slide.style.opacity = "1";
              slide.style.transform = "scale(1)";
            } else {
              slide.style.opacity = "0.5";
              slide.style.transform = "scale(0.9)";
            }
          });
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className=" rounded-xl overflow-hidden transition-all duration-700 ease-in-out">
            <div className="bg-gray-200 dark:bg-gray-800 cursor-grab hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-white rounded-lg lg:rounded-3xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[250px] md:h-[500px] object-cover rounded-t-lg lg:rounded-t-3xl cursor-grabbing"
              />
              <div className="p-2 md:p-6 md:px-10 flex items-center justify-between">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="hidden md:flex text-[10px] md:text-sm text-gray-500 bg-white dark:bg-gray-500 dark:text-white rounded-full px-4 py-3 font-semibold">
                  {project.category.join(" ● ")}
                </p>
                <a href={project.link} className="mt-2 inline-block text-black text-[10px] md:text-base font-medium dark:text-white">
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
        className="absolute left-10 lg:left-80 top-[350px] md:top-[400px] lg:top-[450px] transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full z-50 flex items-center justify-center"
      >
        &#10094;
      </button>
      <button
        ref={nextRef}
        className="absolute right-10 lg:right-80 top-[350px] md:top-[400px] lg:top-[450px] transform -translate-y-1/2 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full z-50 flex items-center justify-center"
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
