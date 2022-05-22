import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            backgroundImage: ` ur(${banner})`
        }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-2xl">
                    <p class="text-xl md:text-4xl font-bold"><span className='text-accent text-3xl'>Fine Carpenter Tools</span> <br /> Complete furnishing with best quality</p>
                    <p class="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary bg-transparent text-secondary hover:bg-secondary hover:text-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;