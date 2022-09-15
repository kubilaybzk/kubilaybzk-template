import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ttgraui",
        "template_v25i3mn",
        form.current,
        "YyQsbclzc_kVDHyTe"
      )
      .then(
        (result) => {},
        (error) => {}
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto m-auto my-auto bg-white dark:bg-DarkV1 p-2 mt-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-5 ">
        <h1 className="self-center mb-10 text-[18px] md:text-[20px] lg:text-[22px] font-bold">
          Bana Ulaşın
        </h1>

        <div className="flex flex-col">
          <label className="text-sm pt-2 self-start">Name</label>
          <input className="KblyInput" required type="text" name="from_name" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm pt-2 self-start">Email</label>
          <input
            className="KblyInput"
            required
            type="email"
            name="from_email"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm pt-2 self-start">Message</label>
          <textarea name="message" className="KblyInput" required />
        </div>

        <button
          type="submit"
          className="bg-Yellow px-4 py-2 rounded mt-5 text-white"
        >
          Mail Yolla
        </button>
      </div>
    </form>
  );
}
