import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../component/Input/Input';

class Login extends Component<any, any> {

    state = {
        loginValue: 'Hello world from login!'
    };

    onChangeLoginButtonClicked = () => {

        console.log('onChangeLoginButtonClicked')

        /*
        // OPTION 1
        this.setState(
            {loginValue: 'Hello world from OPTION 1!'}
        );
        */

        /*
         // OPTION 2
         this.setState((oldState) => {
             return {
                 ...oldState,
                 loginValue: 'Hello world from OPTION 2!'
             }
         });
         */

        /*
        // OPTION 3
        const newStateValue = updateObject(this.state, {loginValue: 'Hello world from OPTION 3!'});
         this.setState(newStateValue);
 
         function updateObject(oldState: Readonly<any>, updatedProperties: any): object {
             return {
                 ...oldState,
                 ...updatedProperties
             };
         }
         */

    };

    changeAppState = (value: any) => {
        this.props.loginToApp(value);
    }

    onChangeLoginTextHandler = (event: any) => {

        // console.log('onChangeLoginTextHandler', event.target.value);

        /*
        // TWO WAY BINDING

        const newStateValue = updateObject(this.state, {loginValue: event.target.value});
        this.setState(newStateValue);

        function updateObject(oldState: Readonly<any>, updatedProperties: any): object {
            return {
                ...oldState,
                ...updatedProperties
            };
        }

       // this.changeAppState(event.target.value);

        */

    };


    render() {

        const localLoginVariable = 'value from Login';

        return (

            <div className={classes.Login}>
                Login container - {this.state.loginValue}
                <h1>{this.props.example}</h1>
                <div>
                    <button
                        className={classes.loginButton}
                        onClick={this.onChangeLoginButtonClicked}
                    >
                        Change value Hello world from login!
                    </button>
                </div>


                {/*<Input inputHandler={this.onChangeLoginTextHandler} randomPropsName={localLoginVariable}/>*/}

            </div>
        )

    }

}

export default Login;
