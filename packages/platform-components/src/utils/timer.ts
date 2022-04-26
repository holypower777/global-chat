import { SimpleCallback } from '../typings';

const timer = (fn: SimpleCallback, countdown: number) => {
    let complete = false;
    let ident: NodeJS.Timeout;
    let totalTimeRun: number;
    const startTime = new Date().getTime();

    const timeDiff = (date1: number, date2?: number) => 
        date2 ? date2 - date1 : new Date().getTime() - date1;

    const cancel = () => (clearTimeout(ident));

    const pause = () => {
        clearTimeout(ident);
        totalTimeRun = timeDiff(startTime);
        complete = totalTimeRun >= countdown;
    };

    const resume = () => {
        if (complete) {
            return;
        }
        ident = setTimeout(fn, countdown - totalTimeRun);
    };

    ident = setTimeout(fn, countdown);

    return { cancel: cancel, pause: pause, resume: resume };
};

export default timer;
