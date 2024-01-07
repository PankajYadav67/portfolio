import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white py-8">
            <div id='contacts' className="container mx-auto flex justify-center items-center">
                <div className="flex-cloumn space-y-8 justify-center text-center">
                    <div className='flex  font-bold text-3xl justify-center text-center'>

                        <h2>Contact me here</h2>  
                    </div>
                    <div className='flex space-x-10 justify-center text-center'>

                        <a href="https://github.com/PankajYadav67" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon size="2xl" icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/Pankaj_JS" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon size="2xl" icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/pankajyadav67" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
                        </a>
                    </div>

                    <div className='font-semibold text-lg'>
                        <p>Email:- pankaj981966@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}