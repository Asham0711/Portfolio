import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoSendSharp } from "react-icons/io5";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/awnggkkb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-4xl text-center font-bold mb-2">Contact me</h1>
        <div className='border-2 border-green-500 w-1/12 mx-auto mb-20'></div>
        <div className=" flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="w-96 px-10 py-8 rounded-xl border-2 border-green-500"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name<span className="text-red-600 font-bold">*</span></label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border border-green-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-green-500">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address<span className="text-red-600 font-bold">*</span></label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border border-green-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-green-500">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message<span className="text-red-600 font-bold">*</span></label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span className="text-green-500">This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 transition-all duration-200 cursor-pointer 
              text-white font-bold rounded-xl px-3 py-2 flex gap-3 items-center w-full justify-center"
            >
              Send <IoSendSharp />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;