
const test1 = {
    'input':{
        'array':[20,17,12,9,8,3,0,-4],
        'query':12
            },
    'output':2
    };

const test2 = {
    'input':{
        'array':[7,5,2,0,-2,-3,-9],
        'query':-3
            },
    'output':5
    };

    // test case 3 has empty list
const test3 = {
'input':{
    'array':[],
    'query':4
        },
'output':-1
};

// test case 4 doesn't has the query element.
const test4 = {
'input':{
    'array':[50,25,23,10,9,1] ,
    'query':3
        },
'output':-1
};

const test5 = {
    'input':{
        'array':[50,25,23,10,9,1] ,
        'query':1
    },
    'output':5
}

function binary(array,middle,query){
    
    if(array[middle]===query){
        console.log(array[middle])
        return 'found';
    }else if(array[middle]>query){
        return 'right';
    }else if(array[middle]<query){
        return 'left';
    }
}

function binary_search(array,query){

    let start = 0;
    let end = array.length-1;
    

    while(end>start){

        let middle = Number.parseInt((start+end)/2);
        let result = binary(array,middle,query);

        if (result==='found'){
            return middle;
        }else if(result==="right"){

            start=middle;
        }else if(result==="left"){
            end=middle;
        }
    }
    return -1
}


function test_function(func,test){

return test['output'] === func( test['input']['array'], test['input']['query'] )

}

test_case = [test1,test2,test3,test4,test5]

test_case.forEach(function (test) {

    console.log(test_function(binary_search, test));
});
