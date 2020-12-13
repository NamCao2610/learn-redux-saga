function* sayHi() {
    yield 'hey'
    yield 'Nam'
    yield 'Dep'
    yield 'Trai'
    return 'hi'
}

const resultGenerator = sayHi();

console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

for (const i of resultGenerator) {
    console.log(i);
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