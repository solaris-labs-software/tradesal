import React from 'react';
import quote from '/src/assets/quote.svg';

const ImageDescriptionCard = ({ imageUrl, description, person }) => {
    return (
        <div className="flex flex-col md:flex-row align-middle h-auto md:h-[50vh] w-full justify-center rounded-md p-4">
            <img
                className="hidden md:block w-full md:w-1/3 rounded-l-md custom-shadow"
                src={imageUrl}
                alt="Card Image"
            />
            <div
                className="bg-neutral-800 w-full md:w-2/3 custom-shadow rounded-md md:rounded-r-md flex flex-col justify-between"
            >
                <div className="p-4">
                    <img src={quote} alt={'quote'} className="mb-2 w-10 h-10 fill-current text-white" />
                    <p className="text-white text-xl mb-4">{description}</p>
                </div>
                <div className="px-4 pb-4">
                    <p className="text-white text-md italic text-right">-- {person}</p>
                </div>
            </div>
        </div>
    );
};
export default ImageDescriptionCard;

