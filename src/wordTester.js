
let carNamesArray;

export const checkWordCount = (e) => {
    e.preventDefault();
    carNamesArray = (e.target[0].value).split(',')
    console.log(carNamesArray)
    if(carNamesArray.every((a) => a.length <= 5 )){
        console.log("통과")
    }else{
        console.log('XX')
    }
}

