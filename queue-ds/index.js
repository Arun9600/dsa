//For Arrays
function Test() {
  const arr = [];
  function enqueue(element) {
    arr.push(element);
  }
  function print() {
    if (arr.length === 0) {
      return "Nothing to show";
    } else {
      let data = "";
      for (let i = 0; i < arr.length; i++) {
        data += arr[i] + " ";
      }
      return data;
    }
  }
  function del() {
    return arr.shift();
  }

  function size() {
    return arr.length;
  }
  return {
    enqueue,
    print,
    del,
    size,
  };
}
const queue = Test();
queue.enqueue(10);
queue.enqueue(10);
queue.enqueue(10);
console.log(queue.print());
queue.del();
console.log(queue.print());
console.log(queue.size());

//For Objects
function testObj() {
  let obj = {};
  let front = 0;
  let rear = -1;

  function addObj(element) {
    obj[++rear] = element;
  }

  function objPrint() {
    let result = Object.values(obj);
    for (let s of result) {
      return s;
    }
  }

  function objSize() {
    return Object.values(obj).length;
  }

  return {
    addObj,
    objPrint,
    objSize,
  };
}

const objQueue = testObj();
objQueue.addObj({ name: "Arun", age: 29 });
console.log(objQueue.objPrint());
console.log(objQueue.objSize());
