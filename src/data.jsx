export const API_KEY = 'AIzaSyAtCgJR0Xwo3WIsh-_pr2depskpldhVYDg'


export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value / 1000) + 'K'
    }
    else{
        return value;
    }

}