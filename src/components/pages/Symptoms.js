import React from 'react';
import { Link } from 'react-router-dom';

const SymptomsPage = () => {
    return (
        <div>
            <div className = "ui container">
                <div className="flex mt-8 justify-center items-center">
                    <div className="text-4xl mr-8"><Link to="/">Covid App</Link></div>
                    <div className="flex-grow">
                    </div>
                    <div className="mx-3 ml-4 text-xl hover:text-custom-hover focus:text-custom-hover text-custom-hover"><Link className="hover:text-custom-hover focus:text-custom-hover" to="/symptoms">Symptoms</Link></div>
                    <div className="mx-3 text-xl hover:text-custom-hover focus:text-custom-hover text-custom-blue"><Link to="/preventions">Preventions</Link></div>
                </div>
                <div className="mt-24 text-sm md:text-lg lg:text-xl">
                    <div className="mb-5"><h1 className="text-custom-blue text-4xl md:text-5xl lg:text-6xl">Symptoms</h1></div>
                    <div className="md:flex lg:flex">
                        <div style={{width: '1000px'}} className="">
                            <h2>Most Common Symptoms:</h2>
                            <div className="pl-10 mt-2 mb-4">
                                <ul className="list-inside list-disc">
                                    <li>fever</li>
                                    <li>Dry Cough</li>
                                    <li>Tiredness</li>
                                </ul>
                            </div>
                            <h2>Less Common Symptoms:</h2>
                            <div className="pl-10 mt-2 mb-4">
                                <ul className="list-inside list-disc">
                                    <li>Aches and Pains</li>
                                    <li>Sore Throat</li>
                                    <li>diarrhoea</li>
                                    <li>conjunctivitis</li>
                                    <li>headache</li>
                                    <li>Loss of taste or smell</li>
                                </ul>
                            </div>
                            <h2>Serious Symptoms:</h2>
                            <div className="pl-10 mt-2 mb-4">
                                <ul className="list-inside list-disc">
                                    <li>Difficulty breathing</li>
                                    <li>Chest pain or pressure</li>
                                    <li>loss of speech</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-10 pb-20 lg:pt-0">
                            <p>
                                Seek immediate medical attention if you have serious symptoms. 
                                Always call before visiting your doctor or health facility. 
                                <br></br>
                                <br></br>
                                People with mild symptoms who are otherwise healthy should 
                                manage their symptoms at home.
                                <br></br>
                                <br></br>
                                On average it takes 5–6 days from when someone is infected with
                                the virus for symptoms to show, however it can take up to 14 days.
                                <br></br>
                                <br></br>
                                If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work.
                                <br/>
                                <br/>
                                Outbreaks have been reported in restaurants, choir practices, fitness classes, nightclubs, offices and places of worship where people have gathered, often in crowded indoor settings where they talk loudly, shout, breathe heavily or sing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SymptomsPage;