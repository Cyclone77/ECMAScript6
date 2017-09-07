import { firstName, lastName, year, addArg2 as add, foo } from './profile';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

let msg = {
    textContent: ""
};

setName(msg);
console.log(msg.textContent);

console.log(add(1, 3));

setTimeout(() => console.log(foo), 2000);