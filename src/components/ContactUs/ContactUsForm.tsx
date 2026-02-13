"use client";
import React, {useState, useRef} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [company, setCompany] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

if (loading) return;
  if (!captchaToken) {
    setError("Please complete the reCAPTCHA");
    return;
  }

setLoading(true)
setError("");

  const formData = {
    name,
    email,
    company,
    message,
    captchaToken,
  };

  try{
    
  const res = await fetch("/api/contact-us", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  setLoading(false);

 if (!res.ok) {
  setError(data.error || "Something went wrong");
  return;
}

// SUCCESS
setSuccess(true);
setName("");  
setEmail("");
setCompany("");
setMessage("");

setCaptchaToken(null);

// auto-hide after 3 sec
setTimeout(() => setSuccess(false), 3000);
}catch(error){
  setLoading(false);
  setError("Something went wrong");
}finally{
  recaptchaRef.current?.reset();
  setLoading(false);
}};

  return (
    <section className='contact-form-section bg-[url("/images/contact-page-bg.png")] bg-contain bg-right bg-no-repeat lg:p-16 md:p-16 p-8'>
        <div className='lg:flex block items-start justify-center lg:w-[80%] w-full mx-auto gap-16 my-8'>
            <div className='lg:w-[35%] w-full'>
                <h2 className='reveal 3xl:text-[50px] 2xl:text-[45px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[30px] font-bold leading-tight'>Contact Us</h2>
                <p className="reveal mt-2 pr-8 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">Please fill out the form and we'll get back to you as soon as possible.</p>
                <img src="./images/HardSurface.png" alt="contact-form" className='reveal w-full h-full object-contain mt-8' />
            </div>
            <div className='lg:w-[65%] w-full reveal'>
                <form onSubmit={handleSubmit}>
                    <div className="px-[3px] rounded-md mb-3">
                    <input
                        type="text"
                        placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[17px] text-[15px] font-semibold text-black placeholder:text-black outline-none"
                    />
                    </div>

                    <div className="px-[3px] rounded-md mb-3"> 
                    <input type="email" name="email"
                    placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    /></div>

                    <div className="px-[3px] rounded-md mb-3">
                    <input type="text" 
                    placeholder='Company' name='company' value={company} onChange={(e) => setCompany(e.target.value)}
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    /></div>

                    <div className="px-[3px] rounded-md mb-3">
                    <textarea 
                    placeholder='Message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    ></textarea>
                    </div>

                    <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token: React.SetStateAction<string | null>) => {
          setCaptchaToken(token);
          setError("");
        }}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className='group inline-block mt-5'>
               <button
  type="submit"
  disabled={loading}
  className={`
    3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px]
    font-bold leading-base px-14 py-3 rounded-lg mt-5 inline-flex items-center justify-center
    transition-all duration-300
    ${
      loading
        ? "bg-[#D50000]/60 cursor-not-allowed"
        : "bg-[#D50000] hover:bg-transparent hover:text-[#D50000] hover:border-[#D50000]"
    }
    text-white border border-transparent
  `}
>
  {loading ? (
    <>
      <span className="loader mr-2"></span>
      Sending...
    </>
  ) : (
    "Submit"
  )}
</button>


      </div>
                </form>
            </div>
        </div>

        {success && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-all duration-500">
    <div className="bg-[#0A0A0A] border border-[#D50000] rounded-xl p-8 text-center max-w-md">
      <h5 className="text-white/80 mb-6">
        Your message has been sent successfully.
      </h5>

      <button
        onClick={() => setSuccess(false)}
        className="bg-[#D50000] px-6 py-2 rounded-lg text-white font-semibold"
      >
        Close
      </button>
    </div>
  </div>
)}


    </section>
  )
}

export default ContactUsForm