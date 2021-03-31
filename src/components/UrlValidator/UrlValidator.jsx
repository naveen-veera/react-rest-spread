import React, { useState } from 'react';
import classes from './UrlValidator.module.css';

const UrlValidator = ( props ) => {


    const [show, setShow] = useState(false);
    const [method, setMethod] = useState('GET');

    const [message, setMessage] = useState({
        status : 'none',
        message : ''
    });

    const checkValidity = (url) => {

        fetch(url)
        .then(res => {
            if(res.status == 200) {
                setMessage({status : 'success', message: `Successful ${url} `})
            } else {
                setMessage({status : 'fail', message: 'Something went wrong with Http Request'})
            }
            
        }).catch(err => {
            console.log('Errors');
            setMessage({status : 'fail', message: 'Something went wrong with Http Request'})
        });


    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let domain = e.target[0].value;
        let params = e.target[1].value.split(',');

        let finalURL = `${domain}/${params}`;
        console.log(finalURL);
        checkValidity(finalURL)

    }

    const onChangeDropDown = (e) => {
        let methodName = e.target.value;

        if(['PUT', 'POST'].includes(methodName)) {
            setShow(true);
        } else {
            setShow(false);
        }
        setMethod(methodName);
    }



    const bodyElement = (
        show && 
        <>
            <label className={classes.Label} htmlFor="label">Body</label>
            <textarea required className={classes.TextArea} rows="4" cols="10" placeholder="Fill this only for the PUT and the POST methods" ></textarea>
        </>
    );

    const AlertElement = (
                message.status !== 'none' &&
                <div className={`${classes.Message} ${message.status === 'success' ? classes.Green : classes.Red}`}>
                    {message.message}
                </div>
    )


    return ( 
        <>
            <h1>Url Validator</h1>
            
            <form className={classes.Container} onSubmit={onSubmitHandler}>
                
                {AlertElement}

                <label className={classes.Label} htmlFor="label">Domain</label>
                <input className={ classes.Input } type="text" placeholder="Enter the Domain URL"/>
                <label className={classes.Label} htmlFor="label">Path</label>
                <input className={ classes.Input } type="text" placeholder="Enter the path variables separated by comma"/>


                <label className={classes.Label} htmlFor="label">Method</label>
                <select className={classes.Dropdown} onChange={onChangeDropDown} defaultValue={method} >
                    <option selected className={classes.Option} defaultValue="GET">GET</option>
                    <option className={classes.Option} defaultValue="POST">POST</option>
                    <option className={classes.Option} defaultValue="PUT">PUT</option>
                    <option className={classes.Option} defaultValue="DELETE">DELETE</option>
                </select>

                {bodyElement}
                <button type="submit" className={classes.Button}>Validate</button>
            </form>
        </>
     );
}
 
export default UrlValidator;