import React, { Component } from 'react';
import classes from './App.module.scss';
import './App.scss';
import Input from '../../component/Input/Input';

class App extends Component {
    render() {
        const someValue: string = 'some props value';
        return (

            <div className={classes.App}>

                <section className={classes.AppSection}>

                    App container

                    <span className="JustNotHashedClass">I never ever be hashed!</span>

                    <Input randomPropsName={someValue}/>

                </section>

            </div>

        );
    }
}

export default App;
