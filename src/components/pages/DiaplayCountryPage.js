import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import SearchBar from '../SearchBar';
import ErrorBoundary from '../ErrorBoundry';
import DisplayCountryData from '../DisplayCountryData';

const DisplayCountryDataPage = () => {
    let { searchTerm } = useParams();
    return(
        <div>
            <SearchBar countryPage={true}/>
            <ErrorBoundary>
                <DisplayCountryData searchTerm={searchTerm}/>
            </ErrorBoundary>
        </div>
        
    );
}

const mapStateToProps = (state) => {
    return { searchTerm: state.searchTerm };
}

// const boundreid = <ErrorBoundary><DisplayCountryData/></ErrorBoundary>

export default connect(mapStateToProps)(DisplayCountryDataPage);