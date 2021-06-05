import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className = "ui container">
            <div className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
                <div className="content items-center mr-auto ml-auto">
                    <div className="header text-center text-8xl mb-12 mt-32"><h1>404 - Not Found!</h1></div>
                    <div className="description text-4xl">
                        <Link to="/"  className="mx-3 ml-4 text-xl hover:text-custom-hover text-custom-blue">
                            Go Home
                        </Link> 
                    </div>
                </div>
            </div>
    </div>
);

export default NotFound;