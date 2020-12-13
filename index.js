// Tao 1 function generator 
function* sayHi() {
    yield 'hey' //Tao nhung buoc dong bo
    yield 'Nam'
    yield 'Dep'
    yield 'Trai'
    return 'hi' //Tra ve ket qua cuoi cung
}

const resultGenerator = sayHi();

console.log(resultGenerator.next()); // { value: 'hey', done: false}
console.log(resultGenerator.next()); // { value: 'Nam', done: false}
console.log(resultGenerator.next()); // { value: 'Dep', done: false}
console.log(resultGenerator.next()); // { value: 'Trai', done: false}
console.log(resultGenerator.next()); // { value: 'hi', done: true} Khi gap return se ket thuc function

for (const i of resultGenerator) {
    console.log(i); // hey Nam dep trai 
}

function* sayHiNamdepzai() {
    yield 'Nam'
    const cute = yield 'dep zai'
    return cute;
}

const result2 = sayHiNamdepzai();
console.log(result2.next());
console.log(result2.next());
console.log(result2.next('cute'));