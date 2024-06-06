
import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='h-auto lg:w-screen max-md:w-full  bg-[#5f5f43] grid col-span-1' id='contact'>
      <h2 className='text-center text-3xl pt-8 roboto-black text-[#ffbf1c]'>Contacts</h2>
      <div className="p-16 mr-4">
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

      <div className="flex justify-center items-center max-md:w-full  min-h-screen ">
        <div className="w-[80%]  bg-white rounded-lg shadow-lg p-16 lg:px-60 ">
          <form
            className="space-y-6 "
            action="https://docs.google.com/forms/d/e/1FAIpQLSd8ox-n7pWXsUd2XB_mjSD0P8xvSwvPtN620EgkYfOQh7zJoA/formResponse"
            method="post"
            target="_blank"
          >
            <div className="flex flex-col">
              <label htmlFor="full-name" className="mb-2 text-sm font-semibold text-gray-700">Full Name:</label>
              <input
                type="text"
                id="full-name"
                name="entry.1725718411"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">Email Address:</label>
              <input
                type="email"
                id="email"
                name="entry.1307661431"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enquiry-comments" className="mb-2 text-sm font-semibold text-gray-700">Enquiry :</label>
              <textarea
                id="enquiry-comments"
                name="entry.1583015008"
                rows="4"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200"
              >
                Submit
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