
let searchIssueForm = document.getElementById('search-issue-form');

let searchJson = document.getElementById('issue-data').getAttribute('data');

let searchIssues = JSON.parse(searchJson);

let searchList = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let titleValue = searchIssueForm.querySelector('input[name="title"]').value;
  let descriptionValue = searchIssueForm.querySelector('input[name="description"]').value;

  let searchedIssues = issues.filter(issue => {
    return issue.title.includes(titleValue) && issue.description.includes(descriptionValue);
  });

  renderIssues(searchedIssues, searchList);
});

// Function to render issues
function renderIssues(issues, listElement) {
  listElement.innerHTML = '';
  issues.forEach(issue => {
    let div = document.createElement('div');
    div.classList.add('card', 'w-100');
    div.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">Title: ${issue.title}</h4>
        <h5 class="card-title">Author: ${issue.author}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Description: ${issue.description}
        </h6>
      </div>
    `;
    listElement.appendChild(div);
  });
}