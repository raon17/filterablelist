let filterInput = document.querySelector('#filterInput').addEventListener('keyup', filterNames);
function filterNames(){
   let filterValue = document.querySelector('#filterInput').value.toUpperCase();
   console.log(filterValue);
   let ul = document.querySelector('#names');
   let li = ul.querySelectorAll('li.collection-item');
   // Loop through collection-item lis
   for(let i=0; i < li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      // If matched
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
         li[i].style.display = '';
      } else {
         li[i].style.display = 'none';
      }
   }
}