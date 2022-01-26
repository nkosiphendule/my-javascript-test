function submit() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const display = document.getElementById("display")
    List.innerHTML = "";
}

let people = [
    { name: "nkosi", age: 62 },
    { name: "vusumuzi", age: 28 },
    { name: "wandile", age: 84 },
    { name: "andisiwe", age: 40 },
    { name: "mhlonipheni",age: 90 },
    { name: "sithembiso", age: 106 },
    { name: "happy", age: 72 },
    { name: "selina", age: 80 },
    { name: "precious", age: 63 },
    { name: "mmapaseka", age: 50 },
    { name: "sophie", age: 78 },
    { name: "mududzi", age: 93 },
    { name: "kaskiso", age: 48 },
];
display.innerHTML = '';

for (let i = 0; i < people.length; i++) {
    if (people[i].name == name) {
      display.innerHTML += 
        '<li>' + 
        people[i].name + 
        ' color ' +
        people[i].color + 
        '</li>';
    }
  }