import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white py-8">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-10">
                    <a href="https://github.com/PankajKumar67" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon size="2xl" icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/Pankaj_JS" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon size="2xl" icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon size="2xl" icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>


    )
}