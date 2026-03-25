{
// 1. JavaScript কী এবং এটি কোথায় ব্যবহার করা হয়?

// =>TODO: javasCript hosse akti programing language. jekono website ke dynamic & interactive korte javasCript use kora hoi. jmn button e click korle kisu ghotbe ak page theke r ak page e jaoya jabe etc.

}

{

// 2. var, let, এবং const এর মধ্যে পার্থক্য কী?

// what is variable?
// => variable hosse data rakhar jayga.

// => var, let & const er moddhe parthokko :

// 1/ var :  re-assign kora jay.  [notun kore man set kora]
//  re-declare kora jay.  [akoi nam diye onno variable]
// var functional scope.
// var global-scope

// 2/ let : re-assign kora jay.
// re-declare kora jay na.
// block scope
// functional scope

// 3/ const : re-assign kora jay na.
// re-declare kora jay na.
// block scope
// functionnal scope


// note: var akoi sathe global & functional scope kivabe hoi?

// ans: eita nirvor kore var khothai declare kora ase .
// var jodi kono function er baire declare kora hoi. tahole take function er vetore & baire 2 jayga thekei access kora jabe . tai var global scope. r jodi var ke function er vetore declare kora hoi tahole take baire theke access kora jay na. tai var functional scop .

}

{

// 3. JavaScript এ Closure কী? একটি উদাহরণ দাও।

// => js e closure er example hosse akta function er vetore akta variavle declare kora ase . & sei function e r o akti function declare kora ase. vetor er function ti bairer function er variable ke access korte parbe.function er kaj sash houyar poreo.


// function functionOne () {
//     var x="Fatema";

//     function functionTwo () {
//         console.log( x )
//     }
//     return functionTwo
// }

// let y=functionOne() ;
// y()

// function likhte giye ja ja vul korci:

// 1/ function = () syntex error.
// 2/ return na korar karone undefind assilo
// 3/ errror assilo y is not a function

// kno y is not a function assilo?
    
// karon return na kore kono kisuke call korle seita undefind thake . r undefind ke function hisebe call korle seita (y) is not a function dekhai.


}

{

// 4. Hoisting কী JavaScript এ?
    //TODO: Hosting hosse javasCript e code run korar age sob variable(var, let, const) & function er declaretion guloke upore likha. 
    
// var ke hosting korle kno undefind ase ?let & const ke hosting korle kno error ase?
    
    //TODO: var hosting er somoi js jevabe var ke dekhe . 
    // var x; //kono man nei tai undefind
    // console.log(x)
    // x = 10
    
    // // let const same 
    // console.log(x)  // ekhane puro declaretion tai upore uthe jay r tai ekhane error ase 
    // let x=10
    
    //TODO: function er khetre hosting kaj kore 
    
}

{

// 5. == এবং === এর মধ্যে পার্থক্য কী?
    // ==shudhu data dekhe
    
    // === data and data type dekhe
    
}


{

// 6. Arrow Function কী এবং এটি সাধারণ Function থেকে কীভাবে আলাদা?
    
    // => arrow function bolte ami ja bujhi function likhar akta choto & sohoj poddhoti. eita akta 1line function . choto condition er jonno use kora hoi.=> eitai arrow function er mul porichoi .
     

    // এটি সাধারণ Function থেকে কীভাবে আলাদা? 
    //     exm :
    
    // normal function 
    // function x (a, b) {
    //     console.log( a+ b )
    // }
    
    
    // arrow function
    // const y=(a, b) => {
    //     return a+b;
    // }
    
}

{

// 7. map(), filter(), এবং forEach() এর মধ্যে পার্থক্য কী?
    
// map() kaj kore array er upor.akta array er protita item er upor kaj kore akta notun array return kore.
    
    //filter() er kaj hoilo sorto sapekkhe item ke niye new arraw banano .
    
    // forEach() arrar er protita item er upor akbr kore kaj kore kintyu kisu return kore na 
}

    
{

    // 8. Asynchronous JavaScript কী? Promise এবং async/await ব্যাখ্যা করো।
    
    // Asynchronous mane hoilo js akti kaj sash houyar jonno puro program ke thamiye na rekhe baki kaj chaliye jaoyar poddhoti. 

    // jkhn kono kaje somoi lage jmn API call . sei kaj ta background e cholte thake . kaj sash e js sei result ta niye asshe. ei puro system ta kei Asynchronous JavaScript bole
    
    //  Promise এবং async/await ব্যাখ্যা করো
    
    // => async asole ja bole : function ke bole thamo. jotokhn na kaj sash hosse thamo kaj sash hoile amake promise pathiyo.
    // => await kotokhn w8 korbo? jotokhn porjontu data memory ba server theke ready hoye na ase .

}


{

    // 9. DOM কী এবং এটি কীভাবে manipulate করা হয়?
    // DOM hoilo Document Object Model.

    // কীভাবে manipulate করা হয়?
    // js diye html Element ke select kore manipulate kora hoi.
    

}


{

// 10. Event Bubbling এবং Event Delegation কী?
    // Event Bubbling 
    // akta Element e event hoile seita dhape dhape tar parent - parent - parent porjontu uthe jay.
    
    // Event Delegation  
    // child element gulute alada alada event na diye parent e aktai event diye control kora 
    
   
    
    }