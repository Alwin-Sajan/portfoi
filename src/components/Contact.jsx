
import React, { useEffect } from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='h-auto w-full  bg-[#5f5f43] grid col-span-1' id='contact'>
      <h2 className='text-center text-3xl pt-8 protest-guerrilla-regular text-[#ffbf1c]'>Contacts</h2>
      <div className="lg:p-16 max-md:pt-8 max-md:px-8 lg:mr-4">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card
            title="Github"
            target='_blank'
            subtitle="alwin-sajan"
            href="https://github.com/Alwin-Sajan"
            Icon={IoLogoGithub}
          />
          <Card title="LinkedIn" subtitle="Alwin Sajan" href="https://www.linkedin.com/in/alwin-sajan-102177255/" target='_blank' Icon={CiLinkedin} />
          <Card title="Instagram" subtitle="_present_legend_" target='_blank' href="https://www.instagram.com/_present_legend_/" Icon={FaInstagram} />
          <Card
            title="Email"
            target='_blank'
            subtitle="alwinsajanp@gmail.com"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDnfXZRdWPczLFTPFNQzFTQbgRBVRLpHgZrjnDkdZlZKswJLkwwTrGWbnnDgRVphkppMR"
            Icon={FiMail}
          />
        </div>
      </div>

      <div
        className="flex justify-center items-center max-md:w-full max-md:py-20 lg:min-h-screen bg-white dark:bg-[#5f5f43]"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="w-[90%] lg:w-[60%] bg-white dark:bg-[#747453] rounded-xl shadow-lg p-8 lg:p-14 border border-gray-200 dark:border-white/50">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white roboto">
            Contact Form
          </h2>

          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSd8ox-n7pWXsUd2XB_mjSD0P8xvSwvPtN620EgkYfOQh7zJoA/formResponse"
            method="post"
            target="_blank"
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block  font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="entry.1725718411"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block  font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="entry.1307661431"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Enquiry */}
            <div>
              <label
                htmlFor="enquiry-comments"
                className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Enquiry
              </label>
              <textarea
                id="enquiry-comments"
                name="entry.1583015008"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>



    </div>


  )
}


// const Contact = () => {
//   return (
//     <div className="p-4 mr-4">
//       <p className="text-3xl Roboto-black mb-2">Contacts</p>
//       <div className="grid gap-4 grid-cols-2 lg:grid-cols-2">
//         <Card
//           title="Github"
//           subtitle="alwin-sajan"
//           href="#"
//           Icon={IoLogoGithub}
//         />
//         <Card title="LinkedIn" subtitle="Alwin Sajan" href="#" Icon={CiLinkedin} />
//         <Card title="Instagram" subtitle="_present_legend_" href="#" Icon={FaInstagram} />
//         <Card
//           title="Email"
//           subtitle="alwinsajanp@gmail.com"
//           href="#"
//           Icon={FiMail}
//         />
//       </div>
//     </div>
//   );
// };

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-white relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF1C] to-[#ffff80] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffbf1c] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#ffbf1c] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-800 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Contact;