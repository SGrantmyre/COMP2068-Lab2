//init variables to be used in functions
var response = "";
var result;

//functions to perform operations
const add = (x, y) => {
    result = x+y;
    response = `${x} + ${y} = ${result}`;
};
const subtract = (x, y) => {
    result = x-y;
    response = `${x} - ${y} = ${result}`;
};
const multiply = (x, y) => {
    result = x*y;
    response = `${x} ⋅ ${y} = ${result}`;
};
const divide = (x, y) => {
    result = x/y;
    response = `${x} ÷ ${y} = ${result}`;
};


//function to calculate from url
const calculation = (req, res) => {
    const query = req.query;
    const x = parseInt(query.x);
    const y = parseInt(query.y);
    const method = query.method;

    switch(method.toLowerCase()){
        case 'add':
            add(x,y);
            break;
        case 'subtract':
            subtract(x,y);
            break;
        case 'multiply':
            multiply(x,y);
            break;
        case 'divide':
            divide(x,y);
            break;
        default:
            response = 'Invaild calculation.';
            break;
    }
    
    //send result to page
    res.send(response);
};
module.exports = calculation;

