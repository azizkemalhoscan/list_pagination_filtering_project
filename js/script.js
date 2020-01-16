/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/






/* studentlist variable created - selected li items by their classname
   number of element will be shown in each page set to 10
*/
 const studentlist = document.getElementsByClassName('student-item cf')
 const showOnEachPage = 10;





/* Here I first looped over all the 54 students and then hided all of them
   After function showPage is created.
   StartIndex and endIndex are created for computing each elements index on a page
   I looped through studentlist again and hided and showed elements by checking its index
   with the specified condition below.
*/

for(let i = 0; i < studentlist.length; i+=1){
    studentlist[i].style.display = 'none';
  }
 const showPage = (studentlist, page) => {

  const startIndex = (page * showOnEachPage) - showOnEachPage;

  const endIndex = page * showOnEachPage;

  for(let i = 0; i < studentlist.length; i += 1) {
    if(i >= startIndex && i < endIndex) {
      studentlist[i].style.display = 'block';
    } else {
      studentlist[i].style.display = 'none';
    }
  }
}


// Function is called




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const numOfPages = Math.ceil(studentlist.length / showOnEachPage);

const appendPageLinks = (studentlist) => {
  const mainDiv = document.querySelector('.page');
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  mainDiv.appendChild(paginationDiv);
  const paginationUl = document.createElement('ul');
  paginationDiv.appendChild(paginationUl);
  for(let i = 0; i < numOfPages; i += 1 ){
    const paginationLi = document.createElement('li');
    const paginationA = document.createElement('a');
    paginationLi.appendChild(paginationA);
    paginationA.href = '#';
    paginationA.textContent = i + 1;
    paginationUl.appendChild(paginationLi);

    paginationA.addEventListener('click', (e) => {
      paginationA.classList.remove('active');
      e.target.className ='active';
      let page = parseInt(e.target.textContent);
      let minimumIndex = (page * 10) - 10;
      let maximumIndex = page * 10;
      for( let i =0; i < studentlist.length; i += 1){
        if(i >= minimumIndex && i < maximumIndex){
          studentlist[i].style.display = '';
        } else {
          studentlist[i].style.display = 'none';
        }
      }
    })
  }
  return mainDiv;
}



appendPageLinks(studentlist);
showPage(studentlist, page);




// const mainDiv = document.getElementsByClassName('page');
// console.log(mainDiv);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
