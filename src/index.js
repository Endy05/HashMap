import { HashMap } from './HashMap';

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log('Length (до перезапису):', test.length());
console.log('Capacity (до moon):', test.capacity);

test.set('apple', 'crimson');
test.set('banana', 'bright yellow');
test.set('dog', 'dark brown');

console.log('Length (після перезапису):', test.length());

test.set('moon', 'silver');

console.log('Capacity (після resize):', test.capacity);
console.log('Length (після moon):', test.length());

console.log('Get apple:', test.get('apple'));
console.log('Get moon:', test.get('moon'));
console.log('Get non-existing:', test.get('unknown'));

console.log('Has carrot?', test.has('carrot'));
console.log('Has unknown?', test.has('unknown'));

console.log('Remove hat:', test.remove('hat'));
console.log('Remove unknown:', test.remove('unknown'));

console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());

test.clear();
console.log('After clear - length:', test.length());
console.log('After clear - keys:', test.keys());
