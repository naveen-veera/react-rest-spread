import React, { useState } from 'react';
import classes from './ImageLoader.module.css';

const ImageLoader = ( props ) => {

    const [imageList, setImageList] = useState([]);

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();

        // fetch(e.target[0].value)
        // .then(res => res.blob())
        // .then(blob => {
        //     let objectURL = URL.createObjectURL(blob);
        //     setImageList([
        //         ...imageList,
        //         <img className={classes.Image} src={objectURL} />
        //     ])

        // })
    // }

    const onSubmitHandler = async (e) => {
        e.preventDefault();        

        await fetch(e.target[0].value)
        .then(res => res.blob())
        .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                setImageList(prevState => {
                    return [
                        ...prevState,
                        <img className={classes.Image} id="image1" src={objectURL} />
                    ]
                })
        }).catch(err => console.log(err));


        await fetch(e.target[1].value)
        .then(res => res.blob())
        .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                setImageList(prevState => {
                    return [
                        ...prevState,
                        <img className={classes.Image} id="image2" src={objectURL} />
                    ]
                })
        
        }).catch(err => console.log(err));

        await fetch(e.target[2].value)
        .then(res => res.blob())
        .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                setImageList(prevState => {
                    return [
                        ...prevState,
                        <img className={classes.Image} id="image3" src={objectURL} />
                    ]
                })
        }).catch(err => console.log(err));

    }

    return ( 
        <>  
            <h1>Image Loader</h1>
            <form className={classes.Container} method="post" onSubmit={onSubmitHandler}>
                <label className={classes.Label} htmlFor="label">Image URL 1</label>
                <input id="imageinput1" required name="image" className={ classes.Input } type="text" placeholder="Enter the Image URL 1"/>
                <label className={classes.Label} htmlFor="label">Image URL 2</label>
                <input id="imageinput2" required name="image" className={ classes.Input } type="text" placeholder="Enter the Image URL 2"/>
                <label className={classes.Label} htmlFor="label">Image URL 3</label>
                <input id="imageinput3" required name="image" className={ classes.Input } type="text" placeholder="Enter the Image URL 3"/>
                <button type="submit" id="submit" className={classes.Button}>Create</button>
            </form>

            <h1>Image List</h1>

            <div className={classes.OutputContainer}>
                {imageList}
            </div>
        </>
     );
}
 
export default ImageLoader;