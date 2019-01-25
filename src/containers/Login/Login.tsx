import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../component/Input/Input';

class Login extends Component {

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


    render() {

        const localLoginVariable = 'value from Login';

        return (

            <div className={classes.Login}>
                Login container - {this.state.loginValue}

                <div>
                    <button
                        className={classes.loginButton}
                        onClick={this.onChangeLoginButtonClicked}
                    >
                        Change value Hello world from login!
                    </button>
                </div>


                <Input randomPropsName={localLoginVariable}/>

            </div>
        )

    }

}

export default Login;
