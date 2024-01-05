import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import NodeIcon from '/icons8-node-js.svg';
import GitIcon from '/icons8-git.svg';
import GithubIcon from '/icons8-github.svg';
import MaterialUiIcon from '/icons8-material-ui.svg';
import TailwindIcon from '/tailwindcss-icon.svg';
import ExpressIcon from '/expressjs-icon.svg';
import MongodbIcon from '/mongodb-icon.svg';



export const HeroSection = () => {
    return (
        <section className="bg-zinc-800 text-white py-16">
            <div id="skills" className="container mx-auto text-center">
                <h1  className="text-4xl  font-bold mb-4">Skills</h1>
                <p className="text-lg mb-8">As a full-stack Web developer, I work with various tools and technologies:</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Frontend */}

                    <div className="text-center">
                        <FontAwesomeIcon icon={faReact} className="text-5xl mb-2" style={{ color: '#61DAFB' }} />
                        <p className="text-lg font-semibold">React</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faJs} className="text-5xl mb-2" style={{ color: '#F7DF1E' }} />
                        <p className="text-lg font-semibold">JavaScript</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faHtml5} className="text-5xl mb-2" style={{ color: '#E44D26' }} />
                        <p className="text-lg font-semibold">HTML5</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faCss3} className="text-5xl mb-2" style={{ color: '#1572B6' }} />
                        <p className="text-lg font-semibold">CSS3</p>
                    </div>
                    <div className="text-center">
                        <img src={MaterialUiIcon} alt="Tailwind CSS" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Material-UI</p>
                    </div>
                    <div className="text-center">
                        <img src={TailwindIcon} alt="Tailwind CSS" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Tailwind CSS</p>
                    </div>

                    {/* Backend */}

                    <div className="text-center">
                        <img src={NodeIcon} alt="Express.js" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Node.js</p>
                    </div>
                    <div className="text-center">
                        <img src={ExpressIcon} alt="Express.js" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Express.js</p>
                    </div>
                    <div className="text-center">
                        <img src={GitIcon} alt="Express.js" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Git</p>
                    </div>
                    <div className="text-center">
                        <img src={GithubIcon} alt="Express.js" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Github</p>
                    </div>
                    <div className="text-center">
                        <img src={MongodbIcon} alt="Express.js" className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">MongoDB</p>
                    </div>

                </div>
            </div>
        </section>
    );
};
