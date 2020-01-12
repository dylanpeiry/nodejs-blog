module.exports.helpers = {
    ifEq: (val1, val2, options) => {
        console.log('salut',val1,val2);
        if (val1 === val2)
            return options.fn(this);
        return options.inverse(this);
    },
    ifGt: (val1, val2, options) => {
        if (val1 > val2)
            return options.fn(this);
        return options.inverse(this);
    },
    ternary: (cond1, cond2, val1, val2) => {
        return cond1 === cond2 ? val1 : val2;
    },
    ifMod: (val1, val2, options) => {
        if ((val1) % val2 === 0)
            return options.fn(this);
        return options.inverse(this);
    },
    formatDate: (date) => {
        let d = new Date(date);
        return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} à ${d.getHours()}h${d.getMinutes()}`;
    }
};