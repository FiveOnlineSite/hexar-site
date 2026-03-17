import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import Link from "next/link";

export default function Footer () {
    return (
        <section className="footer-section bg-[#fff] lg:p-16 md:p-16 p-8 ">
            <div className="items-start justify-between grid 4xl:grid-cols-[1.2fr_1.5fr_0.9fr_1fr] 3xl:grid-cols-[1.2fr_1.4fr_0.9fr_1fr] 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="footer-logo flex flex-col lg:items-center md:items-start items-start justify-start">
                    <img src="/images/icons/footer-logo.png" alt="footer-logo" className="4xl:w-[371px] 4xl:h-[220px] 3xl:w-[350px] 3xl:h-[200px] 2xl:w-[300px] 2xl:h-[180px] xl:w-[271px] xl:h-[177px] lg:w-[271px] lg:h-[177px] md:w-[200px] md:h-[133px] w-[150px] h-[100px] object-contain" />
                    {/* <p className="text-[15px] text-[#0A0A0A] font-base leading-base mt-4">Hexar Studios is the parent company of Ares and Head Hoppers Studios.</p> */}
                </div>

                <div className="services flex flex-col lg:items-start md:items-start items-start justify-start">
                    <h5 className="text-start w-full text-[#0A0A0A] text-[20px] font-semibold leading-base">Services</h5>
                    <div className="">
                        <ul className="pt-4 grid 4xl:grid-cols-3 3xl:grid-cols-3 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-2 ">
                            <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/concept-art" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Concept Art</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/characters" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Characters</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/realtime-hair" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Realtime Hair</Link>
                            </li>
                            
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/props" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Props</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/weapons" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Weapons</Link>

                            </li>
                             
                            <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/hard-surface" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Hard Surface</Link>
                            </li>
                            
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/vehicles" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px]lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Vehicles</Link>
                            </li>
                            
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/stylized-art" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Stylized Art</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/showreels/technical-art" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Technical Art</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/showreels/animation" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Animation</Link>
                            </li>
                             <li className="list-none py-1 group lg:pe-4">
                                <Link href="/showreels/cinematic" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Cinematic</Link>
                            </li>
                            <li className="list-none py-1 group lg:pe-4">
                                <Link href="/showreels/realtime-vfx" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Realtime VFX</Link>
                            </li>
                            <li className="list-none py-1 group lg:pe-4">
                                <Link href="/categories/creature-modeling" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Creature Modeling</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="quick-links flex flex-col lg:items-start md:items-start items-start justify-start">
                    <h5 className="w-full text-start text-[#0A0A0A] text-[20px] font-semibold leading-base">Quick Links</h5>
                    <div className="grid grid-cols-2 gap-4" >
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Home</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/about-us" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">About Us</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/services" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Services</Link>
                            </li>
                            <li className="list-none py-1 group">
                                <Link href="/blogs" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px]lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Blogs</Link>
                            </li>
                        </ul>
                        <ul className="pt-4">
                            <li className="list-none py-1 group">
                                <Link href="/contact-us" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Contact Us</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/portfolio" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Portfolio</Link>
                            </li>
                             <li className="list-none py-1 group">
                                <Link href="/join-us" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px]lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Join Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tpn-logo flex flex-col items-start justify-start">
                    <img src="/images/icons/footer-tpn-logo.png" alt="footer-logo" className="4xl:w-[371px] 4xl:h-[220px] 3xl:w-[350px] 3xl:h-[200px] 2xl:w-[300px] 2xl:h-[180px] xl:w-[271px] xl:h-[177px] lg:w-[271px] lg:h-[177px] md:w-[200px] md:h-[133px] w-[150px] h-[100px] object-contain" />
                            
                    <div className="contact-links">
                        <div className="group">
                        <Link href="mailto:contact@hexarstudios.com" className="duration-500 transition-all ease-in-out group-hover:text-[#D50000] 4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] font-semibold text-[#0A0A0A] leading-base">contact@hexarstudios.com</Link>
                        </div>
                        <div className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] group font-semibold text-[#0A0A0A] leading-base flex items-center justify-start group">
                            <h6>Phone:-</h6>
                            <Link href="tel:+918008378964" className="duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] ">+91 8008378964</Link></div>
                    </div>

                    {/* <div className="social-links flex items-center justify-start mt-5">
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
                    </div> */}
                </div>
            </div>
            <hr className="my-5"/>
            <div className="grid lg:grid-cols-2 gap-4">
                    <p className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] text-[#0A0A0A] font-base leading-base">© Hexar Studios is the parent company of Ares and Head Hoppers Studios.</p>
                    <ul className="flex items-center justify-end">
                        <li className="list-none py-1 group text-end pe-4">
                            <Link href="/privacy-policy" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Privacy Policy</Link>
                        </li>
                         <li className="list-none py-1 group text-end">
                            <Link href="/terms-and-conditions" className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] duration-500 transition-all ease-in-out group-hover:text-[#D50000] text-[#0A0A0A] font-base leading-base">Terms and Conditions</Link>
                        </li>
                    </ul>
            </div>
        </section>
    )
}