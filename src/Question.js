import React, { Component } from 'react';

var input = {
    fromLanguage: "",
    toLanguage: ''
}
class Question extends Component() {
    constructor() {

        super();
         this.state = input
    }
    languageOption(e) {
       var fromLanguage = e.target.value
        var toLanguage = e.target.value
        if (fromLanguage == 'English') {
            return <div>{this.props.english} </div>
        }
        if (fromLanguage == 'French') {
            return <div>{this.props.French} </div>
        }
        if (fromLanguage == 'German') {
            return <div>{this.props.german} </div>
        }
        if (fromLanguage == 'Spanish') {
            return <div>{this.props.spanish} </div>
        }
    }


    render() {
        return (
            <div className="questionInput">
                <button> Test</button>
                <h1> Which language Would you like to display?</h1>
                <p> From </p>
                <select name="from">
                    <option value="fromEnglish" >English </option>
                    <option value="fromSpanish" >Spanish </option>
                    <option value="fromGerman" >German </option>
                    <option value="fromFrench" >French </option>
                </select>
                <p> To </p>
                <select name="to">
                    <option value="toEnglish" >English </option>
                    <option value="toSpanish" >Spanish </option>
                    <option value="toGerman" >German </option>
                    <option value="toFrench" >French </option>
                </select>
            </div>
        );
    }
}
export default Question;
