import React, { useState } from 'react';
import classes from './ImageLoader.module.css';

const ImageLoader = ( props ) => {

    const [imageList, setImageList] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        fetch(e.target[0].value)
        .then(res => res.blob())
        .then(blob => {
            let objectURL = URL.createObjectURL(blob);
            setImageList([
                ...imageList,
                <img className={classes.Image} src={objectURL} />
            ])

        })
    }


    return ( 
        <>  
            <h1>Image Loader</h1>
            <form className={classes.Container} method="post" onSubmit={onSubmitHandler}>
                <label className={classes.Label} htmlFor="label">Image URL</label>
                <input className={ classes.Input } type="text" placeholder="Enter the Image URL"/>
                <button type="submit" className={classes.Button}>Create</button>
            </form>

            <h1>Image List</h1>

            <div className={classes.OutputContainer}>
                {imageList.map(item => item)}
            </div>
        </>
     );
}
 
export default ImageLoader;