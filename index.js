function getFirstSelector(selector){
  //return first element that matches
  return document.querySelector(selector);
}
//Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
function nestedTarget(){
  return document.querySelector('#nested .target');
}
//Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`.
//Make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li');

  for(let i= 0; i< rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML, 10) + n;
  }
  return rank;
}
/*Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them.*/

//THIS IS MY INCORRECT SOLUTION ATTEMPT
/*function deepestChild(){
  var grand = document.getElementById('grand-node').querySelectorAll('div');
    for (let i = 0; i < grand.length; i++){
      if (grand[i] !== null){
        return grand[i];
      }
      return
    }
}

// This is one solution
function deepestChild() {
  //return document.querySelector('#grand-node div div div div')
  let childArray = document.getElementById('grand-node')
  let next = childArray.children[0]

  while (next) {
    childArray = next
    next = childArray.children[0]
  }
  return childArray
}
*/

function deepestChild() {
  let node = document.getElementById('grand-node')
  let deeper = node.children[0]

  while (deeper) {
    node = deeper
    deeper = node.children[0]
  }

  return node
}
