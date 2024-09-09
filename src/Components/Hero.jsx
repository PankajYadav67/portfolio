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
    const techStack = [
        { icon: faReact, name: 'React', color: '#61DAFB', isImage: false },
        { icon: faJs, name: 'JavaScript', color: '#F7DF1E', isImage: false },
        { icon: faHtml5, name: 'HTML5', color: '#E44D26', isImage: false },
        { icon: faCss3, name: 'CSS3', color: '#1572B6', isImage: false },
        { icon: MaterialUiIcon, name: 'Material-UI', color: '', isImage: true },
        { icon: TailwindIcon, name: 'Tailwind CSS', color: '', isImage: true },
        { icon: NodeIcon, name: 'Node.js', color: '', isImage: true },
        { icon: ExpressIcon, name: 'Express.js', color: '', isImage: true },
        { icon: GitIcon, name: 'Git', color: '', isImage: true },
        { icon: GithubIcon, name: 'Github', color: '', isImage: true },
        { icon: MongodbIcon, name: 'MongoDB', color: '', isImage: true },
    ];

    return (
        <section className="bg-zinc-800 text-white py-16">
            <div id="skills" className="container mx-auto text-center">
                <h1 className="text-4xl  font-bold mb-4">Skills</h1>
                <p className="text-lg mb-8">As a full-stack Web developer, I work with various tools and technologies:</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {techStack && techStack?.map(({ icon, name, color, isImage }) => (
                        <div className="text-center" key={name}>
                            {isImage ?
                                <img src={icon} alt="Tailwind CSS" loading="lazy" className="h-12 w-12 mx-auto mb-2" />
                                : <FontAwesomeIcon icon={icon} className="text-5xl mb-2" style={{ color }} />}
                            <p className="text-lg font-semibold">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
