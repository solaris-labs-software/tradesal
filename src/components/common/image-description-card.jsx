import React from 'react';

const ImageDescriptionCard = ({ imageUrl, description }) => {
    return (
        <div className="flex align-middle justify-center h-[30vh] gap-0 rounded-md">
            <img className="h-[30vh] w-[20vw]" src={imageUrl} alt="Card Image" />
            <div className="bg-secondary w-1/2 rounded-md">
                <p className='text-white text-xl p-2'>{description}</p>
            </div>
        </div>
    );
};

export default ImageDescriptionCard;