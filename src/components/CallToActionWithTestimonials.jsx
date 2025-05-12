import { Link } from 'react-router-dom';
import { testimonials } from '../Data';

const CallToActionWithTestimonials = () => {
  return (
    <div className="my-28 relative bg-gray-100 dark:bg-gray-800 dark:text-white rounded-3xl overflow-hidden px-6 sm:px-12 py-20 text-center">
      {/* Link wrapper for the testimonial section */}
      <Link to="/" className="block my-16 hover:opacity-90 transition-opacity duration-300">
        <div className="flex items-center justify-center">
          <div className="flex -space-x-4">
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <div key={index}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                />
              </div>
            ))}
          </div>

          {/* Stars and label */}
          <div className="flex flex-col items-start justify-start space-y-1 ml-4">
            <div className="flex mt-4 space-x-0">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-black dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>

            <p className="mt-2 dark:text-white font-semibold text-[14px]">
              99+ Happy Clients
            </p>
          </div>
        </div>
      </Link>

      {/* CTA Content */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-customFont mb-4">
          Like what you see?
        </h2>
        <p className="text-[18px] opacity-90 mb-10">
          We're bold, brilliant, and built to bring brands to life. Let’s give yours the glow-up it deserves.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-purple dark:bg-lightBlue dark:text-black text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Let’s Make Magic 💫
        </Link>
      </div>
    </div>
  );
};

export default CallToActionWithTestimonials;
