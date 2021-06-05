import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar';
import DisplayCountryData from '../DisplayCountryData';
import DisplayWorldData from '../DisplayWorldData';
import ErrorBoundary from '../ErrorBoundry';
import history from '../../history';

class HomePage extends React.Component {
    DisplayData = () => {
        if(this.props.searchTerm.length===0){
            return <DisplayWorldData />
        } else {
            // return (<ErrorBoundary>
            //     <DisplayCountryData searchTerm={this.props.searchTerm}/>
            // </ErrorBoundary>       
            // );
            history.push(`/country/${this.props.searchTerm}`);
        }
    }
    render(){
        return (
            <div className="font-body h-screen text-custom-text">
                <SearchBar/>
                {this.DisplayData()}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {searchTerm: state.searchTerm}
}

export default connect(mapStateToProps)(HomePage);