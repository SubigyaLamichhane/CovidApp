import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { search } from '../actions';

class SearchBar extends React.Component {
    state = { term: '' }

    firstCharacterUpperCase = (e) => {
        if(e.target.value.length===1){
            this.setState({term: e.target.value.toUpperCase()});
        } else {
            this.setState({term: e.target.value});
        }
        
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.term);
    }

    render(){
        return(
            <div className = "ui container">
                <div className="flex mt-8 justify-center items-center">
                    <div className="text-4xl mr-8">Covid App</div>
                    <div className="flex-grow">
                        <form onSubmit = {this.onFormSubmit} className = "">
                            <div className="">
                                 <input autocomplete="off" style={{height:'40px'}} className="pl-5 border-2 focus:outline-none focus:border-custom-blue focus:ring border-custom-border rounded-3xl w-full" id = "name" placeholder="Search.." type="text" value = {this.state.term}
                                onChange = {this.firstCharacterUpperCase }/>
                            </div>   
                        </form>
                    </div>
                    <div className="mx-3 ml-4 text-xl hover:text-custom-hover text-custom-blue"><Link to="/symptoms">Symptoms</Link></div>
                    <div className="mx-3 text-xl hover:text-custom-hover text-custom-blue"><Link to="/preventions">Preventions</Link></div>
                </div>
            </div>
           
        );
    }
}

export default connect(null, {search})(SearchBar);