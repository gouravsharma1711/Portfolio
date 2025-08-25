import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
// Dynamic import for the Spline component
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Contacts() {
  const [status, setStatus] = useState({ message: '', isSuccess: false });

  const sendEmail = (e) => {
    e.preventDefault();

    // Use a custom message for better UX
    setStatus({ message: 'Sending message...', isSuccess: false });
    
    // Ensure that your EmailJS template variable names match the 'name' attributes of your form inputs
    emailjs.sendForm(
      import.meta.env.VITE_service_ID,
      import.meta.env.VITE_template_Id,
      e.target,
      import.meta.env.VITE_Public_Key
    ).then(
      () => {
        setStatus({ message: 'Message sent successfully!', isSuccess: true });
        e.target.reset(); // Clear the form after success
      },
      (error) => {
        console.error("Failed to send message:", error);
        setStatus({ message: 'Failed to send message, please try again.', isSuccess: false });
      }
    );
  };

  return (
    <>
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-8 md:p-8 font-inter">
        
        <div className="w-full max-w-7xl flex flex-col lg:flex-row-reverse items-center justify-between gap-4 lg:gap-4
        ">
          
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 text-center">
                Contact Me
              </h1>
              <p className="text-sm sm:text-md text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">
                Let's connect! Fill out the form below and I'll get back to you soon.
              </p>
              
              <form className="space-y-4 sm:space-y-6" onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name" // Corrected name
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="user_email" // Corrected name
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message" // Corrected name
                    rows="5"
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 dark:focus:ring-blue-800 transition-all"
                >
                  Send Message
                </button>
              </form>
              
              {status.message && (
                <div className={`mt-4 text-center p-3 rounded-lg font-medium ${status.isSuccess ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </div>

          {/* 3D Spline Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 h-[450px] lg:h-[600px] items-center justify-center animate-fade-in-right ">
            <Suspense fallback={<div className="text-center text-blue-600 dark:text-blue-400">Loading 3D Model...</div>}>
              <Spline scene="https://prod.spline.design/tSQaPDVeptv-Xphj/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Contacts;
