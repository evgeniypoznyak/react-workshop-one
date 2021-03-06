import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Aux from '../Aux/Aux'

class Layout extends Component {

    render() {

        return (

            <Aux>
                <Toolbar/>
                <div className={classes.Layout}>
                    {this.props.children}
                </div>
            </Aux>

        )

    }

}

export default Layout
