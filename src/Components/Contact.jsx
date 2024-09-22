import {toast} from "react-hot-toast";
import { IoSendSharp } from "react-icons/io5";

function Contact() {

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70fafe61-ee0f-4433-a16c-1243e80862f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thanks for Contacting Us")
      console.log("Success", res);
      event.target.reset();
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-4xl text-center font-bold mb-2">Contact me</h1>
        <div className='border-2 border-[#e77bfa] w-1/12 mx-auto mb-20'></div>
        <div className=" flex flex-col items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="w-96 px-10 py-8 rounded-xl border-2 border-[#e77bfa]"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name<span className="text-red-600 font-bold">*</span></label>
              <input
                className="shadow rounded-lg appearance-none border border-[#e77bfa] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address<span className="text-red-600 font-bold">*</span></label>
              <input
                className="shadow rounded-lg appearance-none border border-[#e77bfa] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message<span className="text-red-600 font-bold">*</span></label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 border-[#e77bf0] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e77bfa] hover:bg-[#d53af0] transition-all duration-200 cursor-pointer 
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