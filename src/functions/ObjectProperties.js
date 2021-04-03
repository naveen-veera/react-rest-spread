
export default (objectArr = [], ...rest) => {

    const argumentList = rest;

    const newObject = {}


    for(let i = 0; i < argumentList.length; i++) {

        for(let j = 0; j < objectArr.length; j++) {
            if(objectArr[j].name === argumentList[i]) {
                newObject[objectArr[j].name] = objectArr[j];
                break;
            }
        }

    }
    return newObject;
}