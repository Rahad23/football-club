import React, { useEffect, useState } from 'react';
import Card from '../cardPlayer/Card';
import CardHeader from '../headerCard/CardHeader';
import Questions from '../question/Questions';
const PlayerDtails = ({getTime}) => {
    
    const [club, setClubs] = useState([]);
    // console.log(club);
    useEffect(()=>{
        fetch('FoodballClubs.json')
        .then(res=> res.json())
        .then(data=> setClubs(data))
    },[])
    return (
        <div className="mt-0 lg:mt-28">
            <CardHeader></CardHeader>
        <div className='p-6'>
            <div className='mr-6'>
            <h1 className='text-3xl font-semibold text-slate-800
            ml-6 mb-5'>Will have a meeting</h1>
        </div>
        <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
        {
            club.map(getClub=> <Card club ={getClub} key={getClub.id} getTime={getTime}></Card>)
        }
        </div>
            </div>
            <div className="container mx-auto p-5">
              <Questions></Questions>
            </div>
        </div>
    );
};

export default PlayerDtails;