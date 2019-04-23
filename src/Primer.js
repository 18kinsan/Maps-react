import React, {component, Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './Kore';

class App extends Component{
    constructor(){
        super();
        this.state ={};
    }
    render(){
        return (
            <div>
                <Navbar/>
                <br></br>
                
            </div>
        )
    }
}