import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import "./GameTiming.css";
const GameTiming = ({time}) => {

    const getLocalStorage = localStorage.getItem("Total-time") || '[]';
    let Parstimes = JSON.parse(getLocalStorage);

    
    const [totalTime, setTotal] = useState(Parstimes);

useEffect(()=>{
    setTotal(parseInt(time + Parstimes));
},[time]);

    if(Parstimes){
        localStorage.setItem('Total-time', JSON.stringify(totalTime));
    }else{
        localStorage.setItem('Total-time', JSON.stringify(time));
    }

        const meetingTime = [
            {time: 2},
            {time: 5},
            {time: 7},
            {time: 10}
        ];


    const alert = ()=>{
        swal({
            title: "Meeting Done",
            text: "Invited to meet again later!",
            icon: "success",
            button: "OK",
          });
    }

    const localStorageGet = localStorage.getItem('brackTime');

    const [brack, setBrack]= useState(localStorageGet);
    const breakTime = (brackTime)=>{
        setBrack(brackTime);
        if(localStorageGet){
            localStorage.setItem("brackTime",brackTime);
        }else{
            localStorage.setItem("brackTime", 0);
        }
    };


    localStorage.setItem("brackTime",brack);

  
   

    
    return (
        <div className='bg-[#ddd] shadow-lg p-5'>
            <div className='sticky top-3'>
            <div className="flex justify-center">
                    <img className="w-12 rounded-full" src="https://avatars.githubusercontent.com/u/94119962?v=4" alt="" />
                    <div className="ml-4">
                    <span className="text-lg font-bold text-purple-800">Developer</span>
                    <h1 className="font-bold text-base text-[#03504c] hover:text-[#1a628b] cursor-pointer">Rahad Hasan</h1>
                    </div>
                </div>
                <h1 className='text-xl font-bold text-black border-b-2 border-slate-900 text-center mt-5'>Meeting-Time</h1>
                <h1 className="text-lg text-center font-semibold text-slate-900 mt-9">
                    Will attend the meeting: 
                    
                    <span className="text-red-900 border-double border-4 border-[#70a1ff] p-2 block mt-4 font-bold rounded-xl">
                        <h1>Lionel-Messi</h1>
                        <h1>Neymar jr</h1>
                        <h1>Cristiano ronaldo</h1>
                        <h1>Kylian Mbappé</h1>
                        <h1>Mohamed-Salah</h1>
                        <h1>Erling Haaland</h1>
                     </span> 
                </h1>

                <h1 className="mt-4 text-center font-bold text-xl text-slate-900">Meeting break time</h1>
                <div className="mb-0 flex justify-center">
                    {
                       meetingTime.map(time=> <button onClick={()=>breakTime(time.time)} className="btn-sm rounded-full bg-[#218c74] font-bold text-xl ml-2 mt-3 text-[#fff]">{time.time}<span>m</span></button>)
                    }
                
                </div>
                <div className="border-dashed border-2 mt-10 rounded-md border-slate-900 p-3">
                    <h1 className='text-center text-lg font-semibold '>Meeting time</h1>
                    <span className="px-6 py-5 text-center text-xl font-bold rounded-xl bg-slate-400 block mt-3 ">{totalTime}<span>m</span></span>

                    <h1 className='text-center text-lg font-semibold mt-5'>Break time</h1>
                    <span className="px-6 py-5 text-center text-xl font-bold rounded-xl bg-slate-400 block mt-3 ">{brack}<span>m</span></span>
                </div>
                <button onClick={alert} className="btn btn-success w-full mt-4 text-base font-bold text-white">Meeting Completed</button>
            </div>
        </div>
    );
};

export default GameTiming;