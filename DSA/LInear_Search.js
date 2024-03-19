// Given an descending array find the index of given number
// we first make some test case to check if our function works or not

test1 = {
        'input':{
            'array':[20,17,12,9,8,3,0,-4],
            'query':12
                },
        'output':2
        };

test2 = {
        'input':{
            'array':[7,5,2,0,-2,-3,-9],
            'query':-3
                },
        'output':5
        };

        // test case 3 has empty list
test3 = {
    'input':{
        'array':[],
        'query':4
            },
    'output':-1
    };

    // test case 4 doesn't has the query element.
test4 = {
    'input':{
        'array':[50,25,23,10,9,1] ,
        'query':3
            },
    'output':-1
    };

function linear_search(array,query){
    
    for(let i=0;i<array.length;i++){
        if(array[i]===query){
            return i;
        }
    }
    
    return -1;

}


function test_function(func,test){

    return test['output']===func(test['input']['array'],test['input']['query'])

}

test_case = [test1,test2,test3,test4]

test_case.forEach(function (test) {
    console.log(test_function(linear_search, test));
});

// Result:
// └─$ node LInear_Search.js
// true
// true
// true
// true
