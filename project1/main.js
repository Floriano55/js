const obj = [
    { id : 1, name : 'john'} , 
    { id : 2 },
    { id : 3 },
    { id : 1, name : 'john', age: 45},
    { id : 4, name : 'jane'},
    { id : 1, name : 'john'}
]

for (var i = obj.length-1; i > 0 ; i--) {
    for (var j = i-1; j >= 0 ; j--) {

        console.log(i+" "+j)

        if (obj[j].id == obj[i].id) {

            Object.assign(obj[j],obj[i])

            obj.splice(i,1)
            
            console.log("splice "+i+" "+j)

            break
        }
    }
}

for (var i = 0; i< obj.length; i++) {
    console.log(i+" "+obj[i].id+" "+obj[i].name+" "+obj[i].age)
}