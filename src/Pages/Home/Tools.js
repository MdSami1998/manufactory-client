import React from 'react';
import { useQuery } from 'react-query';
import Tool from './Tool';
import Loading from '../Shared/Loading/Loading'

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () =>
        fetch('tools.json').then(res =>
            res.json()
        )
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            {
                tools.map(tool => <Tool tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;