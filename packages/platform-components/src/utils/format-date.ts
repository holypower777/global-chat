const months: Record<string, string> = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
};

const addBackwordZero = (d: number): string => ('0' + (d)).slice(-2);

export const formatDate = (d: Date, withMonthName = false) => {
    const year = d.getFullYear();
    const date = addBackwordZero(d.getDate());
    const month = addBackwordZero(d.getMonth() + 1);

    if (withMonthName) {
        const monthName: string = months[month];
        return `${date} ${monthName} ${year}`;
    }
    return `${date}.${month}.${year}`;
};

export const getHoursAndMinutes = (d: Date) => {
    return `${addBackwordZero(d.getHours())}:${addBackwordZero(d.getMinutes())}`;
};
