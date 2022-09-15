import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { TiDeleteOutline, TiTickOutline } from "react-icons/ti";
import { AiOutlineLoading } from "react-icons/ai";
export default function App() {
  const form = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    /*
    https://www.emailjs.com/docs/examples/reactjs/ 
    Yukarıda bulunan dökümantasyon ile email kısmını ayarlaryabilirsiniz.
    */
    

emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          setError(false);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
        }
      );
    
  };
  return (
    <>
      <Head>
        <title>Bana Ulaşın -KubilayBzk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/sonv2.png" />
      </Head>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto m-auto my-auto bg-white dark:bg-DarkV1 p-2 mt-20"
      >
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-5 relative ">
          <h1 className="self-center mb-10 text-[18px] md:text-[20px] lg:text-[22px] font-bold">
            Bana Ulaşın
          </h1>

          <div>
            {error === true && (
              <div className="flex flex-row justify-center items-center border-2 border-red-500 space-x-3 p-2">
                <TiDeleteOutline className="text-[56px] text-red-500" />
                <div className="flex flex-col justify-between items-start gap-1">
                  <span className="text-sm " >Mail gönderilirken bir hata oluştu.</span>
                  <span className="text-xs " >Lütfen daha sonra tekrar deneyin.</span>
                </div>
              </div>
            )}
            {error === false && (
              <div className="flex flex-row justify-center items-center border-2 border-green-500 space-x-3 p-2">
              <TiTickOutline className="text-[56px] text-green-500" />
              <div className="flex flex-col justify-between items-start gap-1">
                <span className="text-sm " >Mail başarı ile gönderildi.</span>
                <span className="text-xs " >En kısa sürede size dönüş yapacağım.</span>
              </div>
            </div>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm pt-2 self-start">İsim</label>
            <input
              className="KblyInput"
              required
              type="text"
              name="from_name"
            />
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
            <label className="text-sm pt-2 self-start">Mesajınız</label>
            <textarea
              name="message"
              className="KblyInput  dark:text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-Yellow px-4 py-2 rounded mt-5 text-white"
            onClick={() => setLoading(true)}
          >
            Mail Yolla
          </button>
          {loading?(
            <div className="absolute w-full h-full bg-black opacity-50 justify-center items-center flex ">
              <AiOutlineLoading className=" text-[56px] text-Yellow animate-spin  " />
            </div>
          ):null}
        </div>
      </form>
    </>
  );
}
