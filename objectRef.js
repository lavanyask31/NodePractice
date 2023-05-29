const obj1 = {
  name: "batman",
};

let obj2 = obj1;
// obj2.name = "xxx";s
obj2 = {
  name: "xxx",
};
console.log("obj2", obj2);
console.log("obj1", obj1);
