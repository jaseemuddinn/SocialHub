import Dots from "./Dots";
import group1 from '../assets/group1.jpg'
import group2 from '../assets/group2.jpg'
import group3 from '../assets/group3.jpg'

const AboutText = () => {
    return (
        <>
            <section className="overflow-hidden px-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
                

                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-1 sm:py-4">
                                        <img
                                            src={group1}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={group2}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={group3}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <Dots />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-[#1d1b44]">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                                    <blockquote class="relative">
                                        <svg class="absolute -top-6 -start-8 h-16 w-16 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                                        </svg>
                                        <div class="relative z-10">
                                            <p class="text-gray-800 sm:text-xl"><em>
                                                We are just trying to make this world a better place for everyone.
                                            </em></p>
                                        </div>
                                    </blockquote>
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    Social Hub aims to address the employment disparity faced by individuals with disabilities. By creating an inclusive online platform powered by AI and machine learning, we provide tailored course recommendations, ensuring skill development aligned with their abilities. This platform facilitates access to job opportunities, connecting these talented individuals with companies seeking remote work solutions. Our goal is to break barriers, promote diversity, and foster a supportive community where everyone can contribute and thrive.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    We're addressing the employment disparity faced by differently-abled individuals. In a job market with limited opportunities, our platform plays a pivotal role in promoting inclusivity. By offering customized solutions for skill development, we aim to bridge the gap, empower diverse abilities, and contribute to a more equitable future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutText;
