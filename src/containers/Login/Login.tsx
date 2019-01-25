import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../component/Input/Input';

class Login extends Component {

    render() {

        const localLoginVariable = 'value from Login';

        return (
            <div className={classes.Login}>
                LOGIN
                <Input randomPropsName={localLoginVariable} />

            </div>
        )

    }

}

export default Login;
