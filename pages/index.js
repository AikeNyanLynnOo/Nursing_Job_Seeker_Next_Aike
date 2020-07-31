import React from 'react';
import Link from 'next/link';
import LayoutWithFooter from '../components/LayoutWithFooter';

export default class Index extends React.Component {
    
    state = {
        job_type : '',
        job_location : ''
    }
    handleChange = (event) => {
        console.log(event.target);
        this.setState({[event.target.name] : event.target.value});
    }
    handleSearch = () => {
        console.log(this.state.job_type);
        console.log(this.state.job_location);
    }
    render (){
        return (
            
        <LayoutWithFooter title="Home">
<div className="slider-area ">
            
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center" data-background="/assets/img/mainbg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find nursing jobs here !</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xl-8">
                                
                                <form action="#" className="search-box" style={{marginBottom : 100}}>
                                    <div className="row" style={{width : 80 + "%"}}>
                                    <select name="job_location" id="select1" onChange={this.handleChange} className="form-control select-itms" style={{width : 40 + "%",height : 4.5 + "em", marginRight : 2.5+"em", marginLeft : 1+ "em"}}>
                                                <option value="" disabled selected>Employment Type</option>
                                                <option value="">Full Time</option>
                                                <option value="">Part Time</option>
                                        </select>
                                        <select name="job_location" id="select1" onChange={this.handleChange} className="form-control select-itms" style={{width : 40 + "%",height : 4.5 + "em" ,  marginLeft : 1+ "em"}}>
                                                <option value="" disabled selected>Work Location</option>
                                                <option value="Hokkaido">Hokkaido</option>
                                                <option value="Honshu">Honshu</option>
                                                <option value="Shikoku">Shikoku </option>
                                                <option value="Kyushu">Kyushu</option>
                                                <option value="Okinawa">Okinawa</option>
                                        </select>
                                    </div>
                                        
                                    <div className="search-form">
                                        <Link href="" >
                                        <a onClick = {this.handleSearch}>Find job</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </LayoutWithFooter>
        
        )
    }
}