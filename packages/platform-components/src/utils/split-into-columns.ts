import getSumOfArray from './get-sum-of-array';

const findBestDistribution = (nums: Array<Array<Array<number>>>) => {
    let smallestDiff = Infinity;
    let bestIndex = 0;

    const sums = nums.map((distribution) => distribution.map(getSumOfArray));

    sums.forEach((sum, i) => {
        const diff = Math.max(...sum) - Math.min(...sum);
        if (diff < smallestDiff) {
            smallestDiff = diff;
            bestIndex = i;
        }
    });

    return nums[bestIndex];
};

const getMaxColumnLength = (nums: Array<number>, columns: number) => {
    let startSum = Math.max(...nums);
    let endSum = getSumOfArray(nums);

    while (startSum <= endSum) {
        const middleSum = Math.floor(startSum + (endSum - startSum) / 2);
        let numberOfSplits = 1;
        let currentSum = 0;

        for (const num of nums) {
            currentSum += num;

            if (currentSum > middleSum) {
                numberOfSplits += 1;
                currentSum = num;
            }
        }

        if (numberOfSplits > columns) {
            startSum = middleSum + 1;
        } else {
            endSum = endSum - 1;
        }
    }

    return startSum;
};

const getDistribution = (lengths: Array<number>, columns: number, maxColumnLen: number) => {
    const balancedColumns: Array<Array<number>> = []; 

    let tempSum = lengths[0];
    let tempArr: Array<number> = [tempSum];

    for (let i = 1; i < lengths.length; i += 1) {
        const len = lengths[i];

        if (tempSum + len > maxColumnLen) {
            balancedColumns.push(tempArr);
            tempArr = [len];
            tempSum = len;
        } else {
            tempSum += len;
            tempArr.push(len);
        }
    }

    if (balancedColumns.length < columns) {
        balancedColumns.push(tempArr);
        tempArr = [];
    }

    if (tempArr.length) {
        balancedColumns[balancedColumns.length - 1].push(...tempArr);
    }

    if (balancedColumns.length > columns) {
        const last = balancedColumns.pop();
        balancedColumns[balancedColumns.length - 1].push(...last!);
    }

    if (balancedColumns.length < columns) {
        const biggestArray = Math.max(...balancedColumns.map((e) => e.length));

        if (balancedColumns[biggestArray]) {
            const itemToPush = balancedColumns[biggestArray].pop()!;

            balancedColumns.push([itemToPush]);
        }
    }

    return balancedColumns;
};

const splitIntoColumns = (lengths: Array<number>, columns: number) => {
    if (!lengths || !lengths.length) {
        return [];
    }

    if (columns === 1 || columns === 0) {
        return [lengths];
    }

    if (columns > lengths.length) {
        return lengths.map(e => [e]);
    }

    const maxColumnLen = getMaxColumnLength(lengths, columns);
    const variants = [
        getDistribution(lengths, columns, maxColumnLen),
        getDistribution(lengths, columns, Math.ceil(getSumOfArray(lengths) / columns)),
        getDistribution(lengths, columns, Math.ceil(getSumOfArray(lengths) / columns) - 1),
        getDistribution(lengths.reverse(), columns, maxColumnLen).map(e => e.reverse()).reverse(),
    ];

    return findBestDistribution(variants.filter((distr) => distr.length === columns));
};

export default splitIntoColumns;
