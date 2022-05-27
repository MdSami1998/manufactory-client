import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-secondary text-4xl font-bold text-center py-5'>Question & Answer Section </h1>
            <div className=' w-full md:w-3/4 mx-auto pb-5'>
                <div className='glass text-white p-8 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>1. How will you improve the performance of a React Application?</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> To improve React performance keep component state local where it's required.To prevent unwanted re-renders, memorize React components.And React code splitting using dynamic import()
                    </p>
                </div>

                <div className='glass text-white my-5 p-8 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>2. What are the different ways to manage a state in a React application?</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> There are four main types of state you need to properly manage in your React apps:
                        <ul style={{ listStyleType: 'list-disk' }} className='w-2/3 mx-auto'>
                            <li>Local state.</li>
                            <li>Global state.</li>
                            <li>Server state.</li>
                            <li>URL state.</li>
                        </ul>
                    </p>
                </div>

                <div className='glass text-white p-8 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>3. How does prototypical inheritance work?</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowes one object to inherit the attributes and methods of another.JavaScript is the most popular prototype-capable language, and its features are quite uncommon.
                    </p>
                </div>

                <div className='glass text-white p-8 my-5 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>4. Why you do not set the state directly in React</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> 

                    </p>
                </div>
                <div className='glass text-white p-8 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> 

                    </p>
                </div>

                <div className='glass text-white p-8 my-5 font-bold rounded-xl'>
                    <h1 className='text-2xl font-bold mb-5 text-accent'>6. What is a unit test? Why should write unit tests?</h1>

                    <p className='font-medium text-xl leading-10 text-justify'>
                        <span className='text-accent font-bold'>ANS: </span> <br /> Unit testing enables the programmer to rewrite code at a later time while ensuring that the module continues to function properly. The practice is to create test cases for all functions and methods so that any changes that cause a problem can be swiftly discovered and corrected.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;