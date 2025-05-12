import { projects } from "../Data";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="bg-white dark:bg-gray-900 px-6 py-12 lg:px-32 2xl:px-[350px]">
      {/* Hero Section */}
      <section className="h-screen text-left md:text-center lg:px-[174px] 2xl:px-[300px] lg:justify-center lg:items-center flex flex-col gap-y-2 py-20 mt-20">
      <p className="text-[18px] font-semibold dark:text-gray-200 uppercase mb-3">
          Our Works
        </p>
        <h1 className="text-[32px] md:text-[42px] font-bold font-customFont text-black dark:text-white">
          Projects That Speak
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-[16px] mt-4">
          A peek into our bold builds, strategic visuals, and brands that *actually* work. Every project’s got a story — and a spark.
        </p>
        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="text-black w-[300px] h-[50px] md:w-[200px] dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Project Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[200px] md:h-[300px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white">{project.name}</h3>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.category.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-teal-400 text-sm font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
