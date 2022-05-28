import React from 'react';
import { useQuery } from 'react-query';
import Tool from './Tool';
import Loading from '../Shared/Loading/Loading'

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () =>
        fetch('https://whispering-escarpment-42526.herokuapp.com/tools').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-accent text-5xl font-bold mt-10'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-10 px-2 md:px-20'>
                {
                    tools.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;