const ticks = [4,3.5,3,2.5,2,1.5,1,0.5,0];
const uniqueLabel = [];
const result = ticks.map((v,i) => {
        const formattedValue = parseInt(v);
        return uniqueLabel.indexOf(v) === -1 &&  Number(formattedValue) === v && uniqueLabel.push(v)  ?
        {label : formattedValue , value : v ,index : uniqueLabel.length - 1}  : undefined;
}).filter(v => v !== undefined);

console.log(result);