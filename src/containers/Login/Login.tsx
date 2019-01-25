import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../component/Input/Input';

class Login extends Component {

    state = {
      loginValue: 'Hello world from login!'
    };

    render() {

        const localLoginVariable = 'value from Login';

        return (
            <div className={classes.Login}>
                Login container - {this.state.loginValue}
                <Input randomPropsName={localLoginVariable} />

            </div>
        )

    }

}

export default Login;
