class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i);
    }
    return result % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    //this.table[index] = value;
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameValue = bucket.find((item) => item[0] === key);
      if (sameValue) {
        sameValue[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    //return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      let sameValue = bucket.find((item) => item[0] === key);
      if (sameValue) {
        return sameValue;
      }
    }
    return undefined;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set("name", "Arun");
table.set("age", 29);
table.print();
