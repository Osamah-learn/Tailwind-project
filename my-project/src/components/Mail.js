import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Mail({ blackWord = "Ota ", purpleWord = "Yhteyttä" }) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const form = useRef();
  const resetForm = () => {
    reset();
  };
  const sendEmail = (e) => {
    resetForm();

    emailjs
      .sendForm(
        "service_2hfsple",
        "template_6an7voj",
        form.current,
        "user_uPCJgh7WYfmRuJae6aHkF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          alert("FAILED!" + error);
        }
      );
  };

  const handleRegister = !register
    ? console.error("Form registration has an error")
    : 1;

  return (
    <div id="mail">
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          {/* <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Contact
          </p> */}
          <h3 className=" animate-pulse text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            {blackWord} <span className="text-indigo-600">{purpleWord}</span>
          </h3>
        </div>
        <form className="w-full" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name1"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="name2"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                id="grid-email"
                name="email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                PhoneNumber
              </label>
              <input
                register={handleRegister}
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                type="tel"
                id="phone"
                name="contact_number"
                placeholder="PuhelinNumero"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                register={handleRegister}
                required
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="message"
                defaultValue={"        \n      "}
              />
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center"></div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mail;
