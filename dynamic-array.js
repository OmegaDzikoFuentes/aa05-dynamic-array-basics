class DynamicArray {

  constructor(defaultSize=4) {

    this.capacity = defaultSize;

    this.data = Array(this.capacity);

    this.length = 0;

  }

  read(index) {
// O(1) time complexity
   return this.data[index];
  }

  unshift(val) {
// O(n) time complexity
for (let i = this.length; i > 0; i--) {

  this.data[i] = this.data[i - 1];

}

this.length++;

this.data[0] = val;

  }

}


module.exports = DynamicArray;
