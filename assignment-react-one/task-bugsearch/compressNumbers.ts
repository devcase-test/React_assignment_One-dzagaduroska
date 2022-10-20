export function compressNumbers(num: string) {
    const numAsString = eval("'" + num + "'");
    let result: number[] = [];
    const stringAsArray = [...numAsString];

    stringAsArray.forEach((val, idx) => {
        if (result[result.length - 1] === val) {
            return;
        }
        let count = 1;
        for (let i = 0; i < stringAsArray.length; i++) {
            if (stringAsArray[i] === val) {
                count++;
            }
        }
        result.push(count);
        result.push(val);
    });
    return result.join('');
}
