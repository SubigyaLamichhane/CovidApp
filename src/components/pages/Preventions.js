import React from 'react';
import { Link } from 'react-router-dom';

const PreventionsPage = () => {
    return (
        <div>
            <div className = "ui container">
                <div className="flex mt-8 justify-center items-center">
                    <div className="text-4xl mr-8"><Link to="/">Covid App</Link></div>
                    <div className="flex-grow">
                    </div>
                    <div className="mx-3 ml-4 text-xl hover:text-custom-hover focus:text-custom-hover text-custom-blue"><Link className="hover:text-custom-hover focus:text-custom-hover" to="/symptoms">Symptoms</Link></div>
                    <div className="mx-3 text-xl hover:text-custom-hover focus:text-custom-hover text-custom-hover"><Link to="/preventions">Preventions</Link></div>
                </div>
                <div className="mt-24 text-sm md:text-xl lg:text-2xl">
                    <div className="mb-5"><h1 className="text-custom-blue text-4xl md:text-5xl lg:text-6xl">Preventions</h1></div>
                    <ul className="list-inside list-disc">
                        <li>Don’t touch your eyes, nose or mouth.</li>
                        <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                        <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub. </li>
                        <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                        <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
                        <li>Wear a mask when physical distancing is not possible.</li>
                        <li>Stay home if you feel unwell.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PreventionsPage;