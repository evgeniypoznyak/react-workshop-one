import React from 'react';
import classes from './Input.module.scss';

const input = (props: any) => (

    <div className={classes.Input}>

        INPUT: {props.randomPropsName}

    </div>

);

export default input;