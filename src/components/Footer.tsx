import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import Link from "next/link";

export default function Footer () {
    return (
        <section className="footer-section bg-[#fff] lg:p-16 md:p-16 p-8">
            <div className="grid lg:grid-cols-4 lg:items-start justify-start md:items-center md:grid-cols-2 grid-cols-1 gap-5">
                <div className="footer-logo flex flex-col lg:items-center md:items-center items-start justify-start">
                    <img src="/images/icons/footer-logo.png" alt="footer-logo" className="w-[271px] h-[177px] object-contain" />
                    <p className="text-[15px] text-[#0A0A0A] font-base leading-base mt-4">Hexar Studios is the parent company of Ares and Head Hoppers Studios.</p>
                </div>

                <div className="services flex flex-col lg:items-center md:items-center items-start justify-start">
                    <h5 className="text-center text-[#0A0A0A] text-[20px] font-semibold leading-base">Services</h5>
                    <div className="grid grid-cols-2 gap-4" >
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/props-weapons" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Props/ Weapon’s</Link>
                            </li>

                             <li className="list-none py-1 group">
                                <Link href="/stylized-art" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Stylized Art</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/concept-art" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Concept Art</Link>
                            </li>
                        </ul>
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/realtime-hair" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Realtime Hair</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/3d-characters" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">3D Characters</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/animation" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Animation</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="quick-links flex flex-col lg:items-center md:items-center items-start justify-start">
                    <h5 className="text-center text-[#0A0A0A] text-[20px] font-semibold leading-base">Quick Links</h5>
                    <div className="grid grid-cols-2 gap-4" >
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Home</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/about-us" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">About Us</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/services" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Services</Link>
                            </li>
                            <li className="list-none py-1 group">
                                <Link href="/blogs" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Blogs</Link>
                            </li>
                        </ul>
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/contact-us" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Contact Us</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/portfolio" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Portfolio</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/join-us" className="text-[16px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Join Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tpn-logo flex flex-col items-start justify-start">
                    <img src="/images/icons/footer-tpn-logo.png" alt="footer-logo" className="w-[271px] h-full object-contain" />
                            
                    <div className="contact-links">
                        <div className="group">
                        <Link href="mailto:contact@hexarstudios.com" className="duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[15px] font-semibold text-[#0A0A0A] leading-base">contact@hexarstudios.com</Link>
                        </div>
                        <div className="text-[15px] group font-semibold text-[#0A0A0A] leading-base flex items-center justify-start group">
                            <h6>Phone:-</h6>
                            <Link href="tel:+918008378964" className="duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] ">+91 8008378964</Link></div>
                    </div>

                    <div className="social-links flex items-center justify-start mt-5">
                        <div className="group">
<Link href="/" className="w-[30px] h-[30px] border-[1px] border-[#00000069] group-hover:border-transparent bg-white transition-all eas-in-out duration-500 group-hover:bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <FontAwesomeIcon icon={faInstagram}className=" text-black transition-all eas-in-out duration-500 group-hover:text-white"/>
                            </Link>    
                        </div>
                        <div className="group">
<Link href="/" className="w-[30px] h-[30px] border-[1px] border-[#00000069] group-hover:border-transparent bg-white transition-all eas-in-out duration-500 group-hover:bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <FontAwesomeIcon icon={faYoutube} className=" text-black transition-all eas-in-out duration-500 group-hover:text-white"/>
                            </Link>    
                        </div>
                        
                        <div className="group">
<Link href="/" className="w-[30px] h-[30px] border-[1px] border-[#00000069] group-hover:border-transparent bg-white transition-all eas-in-out duration-500 group-hover:bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <FontAwesomeIcon icon={faFacebookF} className=" text-black transition-all eas-in-out duration-500 group-hover:text-white"/>
                            </Link>    
                        </div>
                        <div className="group">
<Link href="/" className="w-[30px] h-[30px] border-[1px] border-[#00000069] group-hover:border-transparent bg-white transition-all eas-in-out duration-500 group-hover:bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <FontAwesomeIcon icon={faXTwitter} className=" text-black transition-all eas-in-out duration-500 group-hover:text-white"/>
                            </Link>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}