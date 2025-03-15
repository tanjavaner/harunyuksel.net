import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaMailBulk, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

export const Contact = () => {

    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef();

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Lütfen 'Ben robot değilim' onay kutusunu işaretleyin");
            return;
        }
        // Form gönderme işlemleri burada yapılır
        console.log("Form gönderiliyor...");
    };




    return (

        <div className="flex flex-col md:flex-row sm:flex-col w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">

            <div className="flex flex-col w-full md:w-1/3 bg-gray-700 py-6 px-2 space-y-6 rounded-lg">

                <div className="flex items-center space-x-4 border-gray-500 bg-gray-400 border-2 rounded-lg p-4">
                    <div className="text-2xl">
                        <FaMapMarkerAlt />
                    </div>
                    <div>Ankara</div>
                </div>
                <div className="flex items-center space-x-4 border-gray-500 bg-gray-400 border-2 rounded-lg p-4">
                    <div className="text-2xl">
                        <FaPhone />
                    </div>
                    <div>+90-555-555-55-55</div>
                </div>
                <div className="flex items-center space-x-4 border-gray-500 bg-gray-400 border-2 rounded-lg p-4">
                    <div className="text-2xl">
                        <FaMailBulk />
                    </div>
                    <div>harunyuksel@gmail.com</div>
                </div>

            </div>

            <div className="flex flex-col w-full md:w-2/3 px-6 space-y-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122614.49840407715!2d32.69073829999999!3d39.920777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34c1dfbb5f4c7%3A0x17c0e5de76381b6f!2sAnkara!5e0!3m2!1str!2str!4v1710483964132!5m2!1str!2str"
                    width="100%"
                    height="130"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
                {/* <h2 className="text-2xl font-bold">How Can I <span className="text-blue-500">Help You?</span></h2> */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm"><FormattedMessage id="fullName" /></label>
                        <input type="text" id="name" className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm"><FormattedMessage id="emailAdress" /></label>
                        <input type="email" id="email" className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-sm"><FormattedMessage id="subject" /></label>
                        <input type="text" id="subject" className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm"><FormattedMessage id="message" /></label>
                        <textarea id="message" className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" rows="4"></textarea>
                    </div>

                    <div className="flex items-center justify-center my-4">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LcHkPUqAAAAAAKu7_N5RG9KMMbc_RKz5vBEqL6b"
                            onChange={handleCaptchaChange}
                            theme="dark"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full p-2 rounded transition-all duration-300 ${captchaValue ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'}`}
                        disabled={!captchaValue}
                    >
                        <FormattedMessage id="sendMessage" />
                    </button>
                </form>
            </div>
        </div>
    );
};