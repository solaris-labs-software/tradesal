import React from 'react';

const ImageDescriptionCard = ({ imageUrl, description }) => {
    return (
        <div className="flex align-middle justify-center h-[30vh] gap-0 w-[50vw] rounded-md">
            <img src={imageUrl} alt="Card Image" />
            <div className="bg-primary w-1/2 rounded-sm">
                <p className='text-white text-xl p-2'>{description}</p>
            </div>
        </div>
    );
};

export default ImageDescriptionCard;