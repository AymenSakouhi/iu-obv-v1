

const array1 = [{"text":"sakouhi","name" : "Aymen", "a" : 'b'}, 12, 8, 130, 44];

if(array1.find( ({ text, name }) => text === 'sakouhi' && name === "Aymen" )) {
    console.log('success')
} else {
    console.log('not success')
}





