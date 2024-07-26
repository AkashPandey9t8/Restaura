import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <h2 className="text-4xl text-center mb-8 lg:text-5xl font-bold text-blue-400">
        Get in Touch
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <form
            className="bg-neutral-100 hover:bg-blue-300 h-[47vh] rounded-lg shadow-lg p-6 opacity-90"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 text-neutral-900 rounded-lg focus:ring-neutral-500 focus:border-neutral-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 text-neutral-900 rounded-lg focus:ring-neutral-500 focus:border-neutral-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 text-neutral-900 rounded-lg focus:ring-neutral-500 focus:border-neutral-500"
            />
            <button
              className="w-full p-2 bg-neutral-500 text-neutral-200 hover:bg-neutral-700 rounded-lg transition duration-300"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2  p-6 ">
          <div className="details-container">
            {CONTACT.map((detail, index) => (
              <div
                key={index}
                className="detail-card bg-neutral-100 rounded-lg p-6 py-9 opacity-90 hover:bg-blue-300"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
              >
                <p
                  className="text-neutral-400 text-center text-lg tracking-tighter"
                  style={{ letterSpacing: "0.1rem" }}
                >
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
