//.splice()
//this method DOES change the original array!
//array.splice(index, howmany)

const display = document.querySelector(".display");

const movies = ["Elf", "Annie", "Hero 6"];

movies.splice(2, 1, "Mulan");

display.innerHTML = movies;
