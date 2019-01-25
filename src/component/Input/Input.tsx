import React from 'react';
import classes from './Input.module.scss';

const input = (props: any) => {


    return (

        <div className={classes.Input}>

            INPUT: {props.randomPropsName}

            <div className={classes.inputWrapper}>

               From input stateless: <input onChange={props.inputHandler}/>

            </div>

        </div>

    )
};

export default input;
