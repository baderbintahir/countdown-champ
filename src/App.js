import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { From, FormControl, Button, Form } from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'July 3, 2020',
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
    }

    render(){
        return(
            <div className='App'>
                <div className='App-title'>Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline = {this.state.deadline}
                />
                <Form inline>
                    <FormControl 
                        className='deadline-input'
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                     />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;