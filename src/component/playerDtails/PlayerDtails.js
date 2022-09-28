import React from 'react';
import Card from '../cardPlayer/Card';

const PlayerDtails = () => {
    return (
        <div className='mt-28 p-6'>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">FootBall-Club</a>
        </div>
        <div className='mr-6'>
            <h1 className='text-3xl font-semibold text-slate-800
            ml-6 mb-5'>Select today’s exercise</h1>
        </div>
         <Card></Card>
        </div>
    );
};

export default PlayerDtails;