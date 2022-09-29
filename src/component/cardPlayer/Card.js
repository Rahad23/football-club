import React from 'react';

const Card = (props) => {
    const {clubName, dtails, id, img, time} = props.club;
    const cutString = dtails.slice(0, 100) + "...";

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-2xl p-4">
            <figure><img src={img} alt="Shoes" className='w-44'/></figure>
            <div className="card-body">
                <h2 className="card-title">{clubName}</h2>
                <p className='text-base'>{cutString}</p>
                <h4 className='text-lg font-semibold text-amber-800'>Meeting time: {time}m</h4>
                <div className="card-actions">
                <button onClick={()=>props.getTime(time)} className="btn btn-primary w-full mt-3">Add to list</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;