// button to swap table

tableIndex = 0;



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

for (let i = 1; i <= 30; i++) {schoolArr.push(new School(`school ${i}`, "test", Math.floor((i+1)/5)));}

console.log(schoolArr);

// populate the list on the website (no more than 25 at a time i think)


tableElem = document.createElement("table");

for (let i = tableIndex*24; i <= (tableIndex+1)*24; i++) { // may want to change these values later if I end up getting more than 25 elements to display 
  // first element will always be a label.
  let a
  a = document.createElement("tr"); // create table row
  //console.log(i, schoolArr[i])

  if (i%2) { a.classList.add("odd");} else {a.classList.add("even");}

  // table header
  th = document.createElement("th");
  th.textContent = schoolArr[i].name;
  a.append(th);

  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td1.textContent = schoolArr[i].desc;
  td2.textContent = schoolArr[i].score;
  a.append(td1); 
  a.append(td2);

  tableElem.append(a);
}

listObj.insertAdjacentElement("beforeend", tableElem);