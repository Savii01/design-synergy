import { useParams, Link } from 'react-router-dom';
import { projects } from '../Data';
import CallToActionWithTestimonials from '../components/CallToActionWithTestimonials';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((proj) => proj.id === parseInt(id));
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return <div className="text-center mt-20">Project not found.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 px-6 lg:px-32 2xl:px-[350px] mt-20 py-20">
      {/* Header */}
      <h1 className="text-4xl font-customFont text-black dark:text-white">{project.name}</h1>
      <div className="flex flex-wrap gap-4 mt-4 text-gray-700 dark:text-gray-300">
        <span><strong>Client:</strong> {project.client}</span>
        <span><strong>Year:</strong> {project.year}</span>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-800 dark:text-gray-200">{project.description}</p>

      {/* Scope of Work */}
    <div className="mt-6">
    <h2 className="text-2xl font-customFont text-black dark:text-white">Scope of Work</h2>
    <div className="mt-2 flex flex-wrap gap-2">
        {project.category.map((cat, index) => (
        <span
            key={index}
            className="text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        >
            {cat}
        </span>
        ))}
    </div>
    </div>


      {/* Visit Links */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-purple-700 transition"
          >
            Visit Website ↗
          </a>
        )}
        {project.behance && (
          <a
            href={project.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-900 transition"
          >
            View on Behance ↗
          </a>
        )}
      </div>

      {/* Portfolio Images */}
      <div className="mt-32 space-y-6">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.name} ${index + 1}`}
            className="w-full h-full rounded-xl object-cover"
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-32"> 
        <h2 className="text-5xl font-semibold text-black font-customFont text-center dark:text-white mt-12">
          Next Project
        </h2>
        <p className="text-gray-700 text-center dark:text-gray-300 mt-2">
          Check out our next project below.
        </p>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Next Project Card */}
        <Link
          to={`/projects/${nextProject.id}`}
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <img
            src={nextProject.image}
            alt={nextProject.name}
            className="w-full h-[200px] md:h-[300px] object-cover"
          />
          <div className="p-4 flex flex-col justify-between h-[180px]">
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white">{nextProject.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {nextProject.category.map((tag, index) => (
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
              <span className="text-blue-600 dark:text-teal-400 text-sm font-medium hover:underline">
                View Project →
              </span>
            </div>
          </div>
        </Link>

        {/* Call to Action Card */}
        <Link
          to="/contact"
          className="w-full md:w-1/2 h-[485px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 p-6 text-center flex flex-col justify-center items-center"
        >
          <div className="text-5xl font-bold text-white dark:text-gray-700 bg-gray-400 hover:bg-purple dark:bg-gray-500 dark:hover:bg-lightBlue rounded-md w-24 h-24 flex justify-center items-center mb-10">
            +
          </div>
          <p className="text-lg font-semibold text-black lg:max-w-[400px] dark:text-white">
            Got a cool idea? This spot is waiting for your success story.
          </p>
        </Link>
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
        {/* Call to Action */}
        <CallToActionWithTestimonials/>
    </div>
  );
};

export default ProjectDetail;
