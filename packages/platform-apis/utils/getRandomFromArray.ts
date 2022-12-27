const getRandomFromArray = <T>(arr: Array<unknown>) =>
    arr[Math.floor(Math.random() * arr.length)] as T;

export default getRandomFromArray;
