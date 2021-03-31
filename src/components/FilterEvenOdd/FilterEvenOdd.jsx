import React, { useState } from 'react';
import classes from './FilterEvenOdd.module.css';
import { filterEven, filterOdd, generateRandomList } from './utility';

const FilterEvenOdd = ( props ) => {

    const [arrayList, setArrayList] = useState([]);

    const [arraysize, setArraySize] = useState('');

    const [filteredArray, setFilteredArray] = useState([]);

    const createArrayList = () => {
        if(arraysize === '') {
            setArrayList(([1,2,3,4,5,6,7]));
        } else 
            setArrayList(arraysize.split(' '));
    }

    const onFilterArray = (mode) => {
        if(mode === 'even') {
            console.log((arrayList));
            setFilteredArray(filterEven(arrayList));
        } else {
            setFilteredArray(filterOdd(arrayList));
        }
    }

    return ( 
        <>
            <div className={classes.Container}>

                <h1>Number Filter</h1>
                <div className={classes.ButtonContainer}>
                    <input data-testid="numberOfInput" className={classes.Input} type="text" onChange={(e) => setArraySize(e.target.value)} placeholder='Enter the number of inputs' />
                    <button data-testid="generateNumber" className={classes.Button} onClick={createArrayList}>Generate Random Numbers</button>
                </div>

                <div className={classes.Numcontainer}>
                    {arrayList.map((item, index) => <span key={index} data-testid="originalList" className={classes.Number}>{item}</span>)}
                </div>
                
                <div className={classes.NumberContainer}>
                    <button data-testid="oddbutton" className={classes.Button} onClick={() => onFilterArray('odd')}>ODD</button>
                    <button data-testid="evenbutton" className={classes.Button} onClick={() => onFilterArray('even')}>EVEN</button>
                </div>

                <h1>Filtered Array</h1>
                <div className={classes.Output}>
                    {filteredArray.map(item => <span data-testid="filteredList" className={classes.Number}>{item}</span>)}
                </div>
            </div>
        </>
     );
}
 
export default FilterEvenOdd;