'use strict';
console.log("I'm gonna be fucking wealthy");

const addbtn = document.querySelector('.add')
const delbtn = document.querySelector('.del')
const tbody = document.createElement('tbody');
const condiv = document.querySelector('.table');
const rowEl = `<tr>
<td  data-label="Task ID">Task 1</td>
<td  data-label="Description"> CREATE A TWEET THREAD OF 10 TWEETS ABOUT EVERGREEN</td>
<td  data-label="Rewards"> 100 PTS</td>
<td data-label="#"  class="d-flex justify-content-center"> <button  class="btn" data-bs-toggle="modal" data-bs-target="#enroll"> Submit </button></td>
<td  data-label="Status"  class=" justify-content-center">Pending</td>
 <td>
  <button class="btn del dbtn">DELETE</button>
 </td>
</tr>`;
const array = [];

addbtn.addEventListener('click', function() {
tbody.insertAdjacentHTML('afterbegin', rowEl);
array.push(tbody);
condiv.appendChild(tbody);

console.log(button);
console.log(array);

});

delbtn.addEventListener('click', function(){
    const index = array.indexOf(condiv);
if (index > -1) {
  array.splice(index, 1);
condiv.removeChild(tbody);

}

console.log("bookie");
console.log(array);
});