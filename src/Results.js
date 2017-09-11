import React, { Component } from 'react';

class Results extends Component () {
    render(){
    return (
        <div className='results'>
            <p> First Word </p>
            <p> Translation </p>
            <input type="text" />
            <div>
                <button> Submit </button>
                <button> Reset </button>
            </div>
        </div>
    );
}
}
export default Results;
