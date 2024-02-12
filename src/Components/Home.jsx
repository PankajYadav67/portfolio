import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';
import { HeroSection } from './Hero';
import { AboutSection } from './About';
import { ProjectSection } from './Project';
import { Footer } from './Footer';



export const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const scrollToSkills = () => {
        scroll.scrollTo('skills', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToProjects = () => {
        scroll.scrollTo('projects', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToAbout = () => {
        scroll.scrollTo('about', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };
    const scrollToContacts = () => {
        scroll.scrollTo('contacts', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    return (

        <div className='bg-white '>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        {/* <a href="#" className="-m-1.5 p-1.5">
                             <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src=""
                                alt="logo image"
                            /> 
                        </a> */}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <ScrollLink to="about"
                            spy={true}
                            smooth={true}
                            duration={800}
                            offset={-70}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                closeMobileMenu();
                                scrollToAbout();
                            }}
                            className="text-sm font-semibold leading-6 text-grey-900" >
                            About
                        </ScrollLink>
                        <ScrollLink to="skills"
                            spy={true}
                            smooth={true}
                            duration={800}
                            offset={-70}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                closeMobileMenu();
                                scrollToSkills();
                            }}
                            className="text-sm font-semibold leading-6 text-grey-900" >
                            Skills
                        </ScrollLink>
                        <ScrollLink to="projects"
                            spy={true}
                            smooth={true}
                            duration={800}
                            offset={-70}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                closeMobileMenu();
                                scrollToProjects();
                            }} className="text-sm font-semibold leading-6 text-grey-900" >
                            Projects
                        </ScrollLink>
                        <ScrollLink to="contacts"
                            spy={true}
                            smooth={true}
                            duration={800}
                            offset={-70}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                closeMobileMenu();
                                scrollToContacts();
                            }} className="text-sm font-semibold leading-6 text-grey-900" >
                            Contact
                        </ScrollLink>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="" className="text-sm font-semibold leading-6 ">
                            
                        </a> */}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            {/* <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src=""
                                    alt="logo image"
                                />
                            </a> */}
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <ScrollLink
                                       to="skills"
                                       spy={true}
                                       smooth={true}
                                       duration={800}
                                       offset={-70}
                                       style={{ cursor: 'pointer' }}
                                       onClick={() => {
                                           closeMobileMenu();
                                           scrollToSkills();
                                       }}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  
                                    >
                                        Skills
                                    </ScrollLink>
                                    <ScrollLink
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        duration={800}
                                        offset={-70}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            closeMobileMenu();
                                            scrollToProjects();
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                      
                                    >
                                        Projects
                                    </ScrollLink>
                                    <ScrollLink
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        duration={800}
                                        offset={-70}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            closeMobileMenu();
                                            scrollToContacts();
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                       
                                    >
                                        Contact
                                    </ScrollLink>
                                </div>
                                <div className="py-6">
                                    <ScrollLink
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={800}
                                        offset={-70}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            closeMobileMenu();
                                            scrollToAbout();
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        
                                    >
                                        About
                                    </ScrollLink>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Resume PDF available here.{' '}
                            <a href="https://drive.google.com/file/d/1U1g2bVDEoQmKAUMfcakaRUp2jg_WD39i/view?usp=sharing" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                click here <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Hi, I'm PankajKumar Yadav
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">An Full stack web developer.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <ScrollLink
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={800}
                                offset={-70}
                                onClick={scrollToSkills}
                                className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Skills
                            </ScrollLink>

                            <ScrollLink to="projects"
                                spy={true}
                                smooth={true}
                                duration={800}
                                offset={-70}
                                onClick={scrollToProjects}
                                style={{ cursor: 'pointer' }}
                                className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none"
                            >
                                Projects <span aria-hidden="true">→</span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                />
            </div>

            <AboutSection />
            <HeroSection />
            <ProjectSection />
            <Footer />

        </div>

    );
};


