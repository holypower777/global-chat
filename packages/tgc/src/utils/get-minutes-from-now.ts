// const getMinutesFromNow = (date: Date) => 
//     Math.ceil(Math.abs(new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
const getMinutesFromNow = (date: Date) => 
    Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60);

export default getMinutesFromNow;
