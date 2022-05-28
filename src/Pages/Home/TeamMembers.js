import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';

const TeamMembers = () => {
    const [members, setmembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => setmembers(data))
    }, [])
    return (
        <div>
            <h1 className='text-accent text-3xl md:text-5xl font-semibold mt-0 md:mt-20 mb-8'>Our Team Members</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 m-0 md:m-20'>
                {
                    members.map(member => <TeamMember key={member._id} member={member}></TeamMember>)
                }
            </div>
        </div>
    );
};

        export default TeamMembers;