var items = ["chair", "Bench", "Pad", "Laptop"]
console.log(items)

//Using for loop
console.log('*****Using For Loop*****');
for(var i=0; i<items.length; i++){
    console.log(i, items.length , items[i])  
}

//Using for and in
console.log('*****Using For.....In*****');
for(var i in items.slice(0,3)){
    console.log(items[i])
}

// Using For Each 
console.log('*****Using For.....Each*****');
items.slice(1,4).forEach(function(item, index){
    // if(index <3){
        console.log(index)
        console.log(item)
    // }
})

 
// var list =[]
// var itemsValue = ""
// for(var i=0; i<items.length; i++){
//     console.log(i, items.length , items[i])
//     list.push(items[i])  
//     itemsValue = itemsValue + ' ' +  items[i]
// }
// console.log(itemsValue)
// console.log(list)

var value =3000;

// for(var i=0; i<1500 ;i++)
if(1==1){
    console.log('Hello')
}

var  newItems1 = []

newItems1 = items.map(function(item, index){
    return item + '_' + index
})

console.log(newItems1)

var  newItems2 = []

newItems2 = items.forEach(function(item,index){
    return item + '_' + index
})

console.log(newItems2)

var values = ["red", "yellow", "blue"]

for(var i in values){
    values[i] = 'New Value'
}

console.log(values)

for(var i in values)[
    console.log(values[i])
]