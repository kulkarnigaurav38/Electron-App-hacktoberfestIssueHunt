const hacktoberfest = require("hacktoberfest-issue-hunt");
hacktoberfest({ token: "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" })
  .then((issues) => {
    console.log(issues);

    let index = 1;
    // let inputLabelLength = document.getElementById("inputLabel").value.length;
    // let inputLanguageLength = document.getElementById("inputLanguage").value.length;

    // if () {
    //   let label = document.getElementById("inputLabel").value;
    //   let language = document.getElementById("inputLanguage").value;
    //   let tableContent = issues.filter()
    // } else {
    let tableContent = issues.map((issue) => {
      let patharray = issue.link.split("/");
      let repoName = patharray[3];
      return `<tr>
                <td>${index++}</td>
                <td>${repoName}</td>
                <td>
                  <a href="${issue.link}" target="_blank">${issue.title}</a>
                </td>
                <td>${issue.labels}</td>
                <td>${issue.createdAt}</td>
                <td>${issue.state}</td>
                <td>${issue.comments}</td>

              </tr>`;
    });
    // }
    document
      .querySelector("tbody")
      .insertAdjacentHTML("afterbegin", tableContent);
  })
  .catch((err) => console.log(err));
