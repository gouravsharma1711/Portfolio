import React from 'react';

function PageNotFound() {
    return (
        <div className="flex flex-col pt-12 items-center justify-center h-full pb-10 bg-gray-100 dark:bg-gray-900">
            <img 
                src="../public/PageNotFound/PageNotFound.svg" 
                alt="Page Not Found" 
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-6">
                Oops! Page Not Found
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}

export default PageNotFound;
