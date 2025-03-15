import { FaLinkedin, FaGithub, FaHome, FaAddressBook, FaFileContract } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { pages } from "../App";

export default function Layout({ children }) {

    const info = {
        name: "Harun YÜKSEL",
        title: "Industrial Engineer",
        linkedin: "https://www.linkedin.com/in/harunyuksel",
        github: "https://github.com/tanjavaner",
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-opacity-50 bg-gray-800">
            <div className="flex bg-gray-400 rounded-lg shadow-lg w-full max-w-7xl h-auto min-h-[600px]">

                <div className="flex flex-col items-center mt-10 text-white w-2/5">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-black border-2">
                        <img src="https://placehold.co/400x400" alt="Profil Fotoğrafı" className="w-full h-full" />
                    </div>

                    <div className="mt-5">
                        <div className="text-4xl font-semibold">
                            {info.name}
                        </div>
                        <small className="text-gray-500 flex mt-3 justify-center">
                            {info.title}
                        </small>
                        <div className="flex justify-center mt-5">
                            <a
                                href={info.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300 text-2xl"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={info.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300 text-2xl"
                            ><FaGithub />
                            </a>
                        </div>

                    </div>


                </div>

                <div className="relative ml-auto bg-gray-800 rounded-lg min-h-full w-4/5 text-white p-3">
                    {children}
                </div>

            </div>

            <div className="menu-bar relative bottom-[20%] ml-3 bg-gray-200 w-[2%] rounded-lg">
                <div className="flex flex-col items-center h-full space-y-2 py-2">
                    <Link to={pages.home.path} className="flex items-center justify-center w-7 h-7 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300">
                        <FaHome className="text-lg" />
                    </Link>
                    <Link to={pages.about.path} className="flex items-center justify-center w-7 h-7 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300">
                        <FaAddressBook className="text-lg" />
                    </Link>
                    <Link to={pages.contact.path} className="flex items-center justify-center w-7 h-7 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300">
                        <FaFileContract className="text-lg" />
                    </Link>
                </div>

            </div>

        </div>
    );
}  