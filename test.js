function uniqueify(arr = []) {
    let tmp = [];
    return arr.filter((a) => {
        return !tmp.includes(a) && tmp.push(a);
    });
}

let arr2 = uniqueify(arr1);