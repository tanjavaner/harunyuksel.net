import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { Outlet, Link } from "react-router-dom";

export default function Layout({ pages, children }) {

    const info = {
        name: "Harun YÜKSEL",
        title: "Industrial Engineer",
        linkedin: "https://www.linkedin.com/in/harunyuksel",
        github: "https://github.com/tanjavaner",
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-opacity-50 bg-gray-800">

            <div className="flex bg-gray-400 rounded-lg shadow-lg w-full max-w-7xl h-auto min-h-[800px]">

                <div className="flex flex-col items-center mt-10 text-white w-2/5">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-black border-2">
                        <img src="https://placehold.co/400x400" alt="Profile Picture"/>
                    </div>

                    <div className="mt-5">
                        <div className="text-5xl font-semibold">
                            {info.name}
                        </div>
                        <small className="text-gray-500 flex mt-3 justify-center text-lg">
                            {info.title}
                        </small>
                        <div className="flex justify-center mt-6 space-x-1">
                            <a
                                href={info.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center w-11 h-11 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300 text-3xl"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={info.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center w-11 h-11 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300 text-3xl"
                            ><FaGithub />
                            </a>
                        </div>

                    </div>

                </div>

                <div className="relative ml-auto bg-gray-800 rounded-lg max-h-full w-4/5 text-white">
                    <div className="flex flex-col text-white p-4 h-[800px]">
                        <h1 className="text-4xl font-bold mb-8">
                            <FormattedMessage id="contact" />
                        </h1>
                        <div className="overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>


            </div>

            <div className="menu-bar relative bottom-72 ml-3 bg-gray-200 w-[3%] rounded-lg">
                <div className="flex flex-col items-center h-full space-y-3 py-3">
                    {
                        pages.map((page) => {
                            return (
                                <Link to={page.path} className="flex items-center justify-center w-11 h-11 rounded-full text-gray-500 hover:text-white bg-transparent hover:bg-gray-600 transition-all duration-300">
                                    {page.icon}
                                </Link>
                            )
                        }
                        )
                    }
                </div>

            </div>

        </div>
    );
}  