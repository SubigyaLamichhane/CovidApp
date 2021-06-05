import React from 'react';
import { connect } from 'react-redux';

// import { errorStatusChange } from '../actions/index';
import DisplayCountryData from './DisplayCountryData';

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
        // this.props.errorStatusChange(true);
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
        
      if (this.hasError) {
        // You can render any custom fallback UI
        return (
            <div className = "ui container">
                <div style={{marginBottom: '15px'}} className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
                    <div className="content items-center mr-auto ml-auto">
                        <div className="header text-center text-8xl mb-12 mt-32">Not Found</div>
                    </div>
                </div>
            </div>
        );
      }
  
      return this.props.children; 
    }
}

const mapStateToProps = (state) => {
    return {searchTerm: state.searchTerm};
}

export default connect(mapStateToProps,{})(ErrorBoundary);