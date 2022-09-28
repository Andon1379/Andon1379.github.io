
// obtain list, format it correctly
var listObj;
listObj = document.getElementsByTagName("list")[0];
//console.log(listObj);

// make mock schools to populate the list
 
let schoolArr = [];
class School {
  constructor(name, desc, score ){
    this.name = name;
    this.desc = desc;
    this.score = score;
  }
}

// make school arr

for (let i = 0; i <= 29; i++) {schoolArr.push(new School(i.toString(), "Big Chungus", Math.floor((i+1)/5)));}

console.log(schoolArr);

// populate the list on the website (no more than 25 at a time i think)


tableElem = document.createElement("table");
listObj.insertAdjacentElement("beforeend", tableElem);
tableElems = [];
for (let i = 0; i <= 25; i++) { // may want to change these values later if I end up getting more than 25 elements to display 
  // first element will always be a label.
  let a
  a = document.createElement("tr");
  a.append(document.createElement("th"));
  for (let j = 0; j <= 2; i++) {
    a.append(document.createElement("td"));
  }
  tableElems.push(a);
}
