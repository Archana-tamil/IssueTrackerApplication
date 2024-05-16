
let filterIssueForm = document.getElementById('filter-issue-form');

let issuesJson = document.getElementById('issue-data').getAttribute('data');

let issues = JSON.parse(issuesJson);

let issueList = document.getElementById('issues-list');


filterIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let filteredIssues = issues.filter(issue => {
    // Filter by author
    if (authorVal && issue.author !== authorVal) {
      return false;
    }
    // Filter by labels
    return labelsArr.every(label => issue.labels.includes(label));
  });

  renderIssues(filteredIssues, issueList);
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