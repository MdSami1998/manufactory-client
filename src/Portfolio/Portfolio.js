import React from 'react';
import profileImg from '../assets/profile.png'
import htmlIcon from '../assets/icons/html5.png'
import cssIcon from '../assets/icons/css3.png'
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react-icon.png'
import expressIcon from '../assets/icons/express.png'
import mongoIcon from '../assets/icons/MongoDB_Logo.svg.png'

const Portfolio = () => {

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={profileImg} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Name: MD. Sami Al Zaber</h1>
                    <p class="py-6 text-2xl">
                        <span className='text-accent'>Email: </span>
                        samizaber822@gmail.com
                    </p>
                    <div class="py-6 text-xl">
                        <p className='text-accent text-2xl'>Education: </p>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead className='text-secondary'>
                                    <tr>
                                        <th></th>
                                        <th className='text-lg'>Degree</th>
                                        <th className='text-lg'>Subject</th>
                                        <th className='text-lg'>Passing year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='text-secondary'>1</th>
                                        <td>SSC</td>
                                        <td>Science</td>
                                        <td>2015</td>
                                    </tr>
                                    <tr class="hover">
                                        <th className='text-secondary'>2</th>
                                        <td>HSC</td>
                                        <td>Science</td>
                                        <td>2017</td>
                                    </tr>
                                    <tr>
                                        <th className='text-secondary'>3</th>
                                        <td>Bechalor</td>
                                        <td>Computer Science And Technology</td>
                                        <td>Running</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <p class="py-6 text-2xl"><span className='text-accent'>
                        Skills: </span>
                        <div className='bg-gray-400 p-8 rounded'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                <div>
                                    <img className='w-16 mx-auto' src={htmlIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>HTML5</p>
                                </div>
                                <div>
                                    <img className='w-12 mx-auto' src={cssIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>CSS3</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src={jsIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>Javascript</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src={reactIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>React JS</p>
                                </div>
                                <div>
                                    <img className='w-20 mx-auto' src={expressIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>Express JS</p>
                                </div>
                                <div>
                                    <img className='w-12 mx-auto' src={mongoIcon} alt="" />
                                    <p className='font-semibold text-lg text-secondary mt-1'>MongoDB Server</p>
                                </div>
                            </div>
                            <p className='text-black font-semibold text-2xl'>I Learend these 6 technologies skill as a web developer.</p>
                        </div>
                    </p>
                    <div className='text-xl'>
                        <p className='text-accent text-2xl'>Here are my own 3 projects link:</p>

                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead className='text-secondary'>
                                    <tr>
                                        <th></th>
                                        <th className='text-lg'>Project Name</th>
                                        <th className='text-lg'>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='text-secondary'>1</th>
                                        <td>Medicure</td>
                                        <td className='hover:text-accent'>
                                            <a href='https://medicure-2fe04.firebaseapp.com/'
                                                target="_blank" rel="noopener noreferrer" > <span className='text-blue-500 hover:underline'>Click here:</span> <span className='underline'>https://medicure-2fe04.firebaseapp.com/</span></a>
                                        </td>
                                    </tr>
                                    <tr class="hover">
                                        <th className='text-secondary'>2</th>
                                        <td>Mobile-Warehouse</td>
                                        <td className='hover:text-accent'>
                                            <a href='https://mobile-warehouse-a4bf9.web.app/'
                                                target="_blank" rel="noopener noreferrer" > <span className='text-blue-500 hover:underline'>Click here:</span> <span className='underline'>https://mobile-warehouse-a4bf9.web.app/</span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='text-secondary'>3</th>
                                        <td>Manufactory</td>
                                        <td className='hover:text-accent'>
                                            <a href=''
                                                target="_blank" rel="noopener noreferrer" > <span className='text-blue-500 hover:underline'>Click here:</span> <span className='underline'></span></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;