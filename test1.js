const arr1 = [];

for (let i = 1; i <= 100; i++) {
  arr1.push(i);
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
const arr2 = [];
arr1.forEach((number, index) => {
  if (number % 3 === 0 && number % 5 === 0) {
    arr1[index] = "FooBar";
    arr2.push(arr1[index]);
  } else if (number % 3 === 0) {
    arr1[index] = "Foo";
    arr2.push(arr1[index]);
  } else if (number % 5 === 0) {
    arr1[index] = "Bar";
    arr2.push(arr1[index]);
  } else if (!isPrime(number)) {
    arr2.push(number);
  }
});

console.log(arr2.reverse().join(", "));
