import React from "react";

const testimonials = 
    [
        {
          id: 1,
          name: "Leslie Alexander",
          businessName: "Leslie's Creations",
          review:
            "The team at Leslie's Creations did an amazing job on my website redesign. The process was seamless, and the result exceeded my expectations. Highly recommend!",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          id: 2,
          name: "Lindsay Walton",
          businessName: "Lindsay's Innovations",
          review:
            "Lindsay's Innovations provided exceptional service. They understood my vision and brought it to life beautifully. Their attention to detail was spot on.",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          id: 3,
          name: "Whitney Francis",
          businessName: "Whitney Designs",
          review:
            "I was blown away by the quality of work from Whitney Designs. They took the time to understand my brand and delivered a design that truly represents my business.",
          image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          id: 4,
          name: "Michael Foster",
          businessName: "Foster's Tech Solutions",
          review:
            "Foster's Tech Solutions completely revamped my website and added features I didn't even know I needed. The team was professional and quick to respond.",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 5,
          name: "Courtney Henry",
          businessName: "Courtney's Creative Studio",
          review:
            "Courtney's Creative Studio delivered outstanding results. Their creativity and technical expertise were evident in every aspect of the project. A fantastic experience!",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          id: 6,
          name: "Leonard Krasner",
          businessName: "Krasner Digital",
          review:
            "Krasner Digital helped me bring my online presence to the next level. The team was responsive, and the final product was exactly what I had envisioned.",
          image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          id: 7,
          name: "Dries Vincent",
          businessName: "Vincent Creative Agency",
          review:
            "I couldn't be happier with the services provided by Vincent Creative Agency. They transformed my brand identity and made my website shine.",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          id: 8,
          name: "Tom Cook",
          businessName: "Cook Media Solutions",
          review:
            "Cook Media Solutions went above and beyond in bringing my vision to life. The team was highly professional, and they delivered on time and within budget.",
          image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
          id: 9,
          name: "Floyd Miles",
          businessName: "Miles Design Studio",
          review:
            "Miles Design Studio is my go-to for all things design. They consistently provide high-quality work, and their customer service is top-notch. I couldn't ask for a better team.",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      ]
      
const Testimonial = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-black font-semibold dark:text-white uppercase text-[18px]">
          Testimonials
        </h3>
        <h2 className="text-[36px] font-customFont text-gray-900 dark:text-white mt-2 lg:px-[200px] leading-[36px] text-center">
         See Why so many choose Design Synergy
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 p-6 rounded-lg border-1 border-gray-900 flex flex-col"
          >
            <p className="text-gray-700 dark:text-white italic">"{testimonial.review}"</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-200">{testimonial.businessName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:justify-center sm:items-center mt-10 sm:flex-row gap-4">
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-base"> Want to be the next satisfied customer? </p>
          <button className="text-white w-[300px] h-[50px] md:w-[200px] text-[16px] sm:text-[20px] bg-purple dark:bg-lightBlue dark:text-black dark:hover:text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-gradient-purple-blue transition-all">
            Hire Us
          </button>
          <button className="w-[300px] h-[50px] md:w-[200px] text-black dark:text-white text-[16px] sm:text-[20px] bg-white dark:bg-gray-800 border dark:hover:bg-gray-700 border-black dark:border-gray-600 font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
     
    </section>
  );
};

export default Testimonial;
