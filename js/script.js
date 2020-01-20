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
   First selected main div where to append Items I am about to create.
   Then created a<li<ul<div elements and appended to each other as childrens
   I looped over li and a elements to make the code static
   Then I added an eventlistener for clicking on buttons to change pages
   Highlighting buttons were really tough :)
   I looped thorugh all the a buttons removed their classnames and added active class
   name to the one which is clicked or ttargeted
***/
const numOfPages = Math.ceil(studentlist.length / showOnEachPage);

const appendPageLinks = (studentlist) => {
  const mainDiv = document.querySelector('.page');
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  mainDiv.appendChild(paginationDiv);
  const paginationUl = document.createElement('ul');
  paginationUl.className = 'paginationUl';
  paginationDiv.appendChild(paginationUl);
  for(let i = 0; i < numOfPages; i += 1 ){
    const paginationLi = document.createElement('li');
    const paginationA = document.createElement('a');
    paginationLi.appendChild(paginationA);
    paginationA.href = '#';
    paginationA.className = 'active';
    paginationA.textContent = i + 1;
    paginationUl.appendChild(paginationLi);

    paginationA.addEventListener('click', (e) => {

      const aTarget = document.querySelectorAll('a');
      for(let i =0; i < aTarget.length; i +=1){
        aTarget[i].className = "";
        e.target.className = "active";

      }

     /*
      What I did here is I arranged the index of people to be viewed on each page
     */
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
showPage(studentlist, 1);


// const mainDiv = document.getElementsByClassName('page');
// console.log(mainDiv);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
