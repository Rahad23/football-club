import React from 'react';
import "./GameTiming.css";
const GameTiming = () => {
        const meetingTime = [
            {time: 2},
            {time: 5},
            {time: 7},
            {time: 10}
        ]
    return (
        <div className='bg-[#ddd] shadow-lg p-5'>
            <div className='sticky top-3'>
                <h1 className='text-xl font-bold text-black border-b-2 border-slate-900 text-center mt-5'>Meeting-Time</h1>

                <h1 className="text-lg text-center font-semibold text-slate-900 mt-9">
                    Will attend the meeting: 
                    
                    <span className="text-red-900 border-double border-4 border-[#70a1ff] p-2 block mt-4 font-bold rounded-xl">
                        <h1>Chelsea</h1>
                        <h1>AFC Bournemouth</h1>
                        <h1>Arsenal</h1>
                        <h1>Aston Villa</h1>
                        <h1>Brentford</h1>
                        <h1>Liverpool</h1>
                     </span> 
                </h1>

                <h1 className="mt-4 text-center font-bold text-xl text-slate-900">Meeting break time</h1>
                <div className="mb-0">
                    {
                       meetingTime.map(time=> <button className="btn-sm rounded-full bg-[#218c74] font-bold text-xl ml-2 mt-3 text-[#fff]">{time.time}<span>m</span></button>)
                    }
                
                </div>
                <div className="border-dashed border-2 mt-10 rounded-md border-slate-900 p-3">
                    <h1 className='text-center text-lg font-semibold '>Meeting time</h1>
                    <span className="px-6 py-5 text-center text-xl font-bold rounded-xl bg-slate-400 block mt-3 ">400m</span>

                    <h1 className='text-center text-lg font-semibold mt-5'>Break time</h1>
                    <span className="px-6 py-5 text-center text-xl font-bold rounded-xl bg-slate-400 block mt-3 ">30m</span>
                </div>
                <button className="btn btn-success w-full mt-4 text-base font-bold text-white">Activity Completed</button>
            </div>
        </div>
    );
};

export default GameTiming;