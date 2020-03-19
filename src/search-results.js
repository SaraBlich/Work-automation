//Results to be showed in the list 

const searchResultsEl = document.querySelector('#search-results');

const generateHTML = text => `<li class = "list-group-item">${text}</li>`;

export const showResults = (searchOption, results) => {
    let html;

    if(searchOption === 'films')
    {
        html = results.map(result =>
            generateHTML(`<b>Title:</b> ${result.title}, <b>Director:</b> ${result.director}`)
            );
    }

    else if(searchOption ==='people')
    {
        html = results.map(result => 
            generateHTML(`<b>Name:</b> ${result.name}, <b>Height:</b> ${result.height}`)
            );

    }
    //added to the list, getting rid of "," from the tab
    searchResultsEl.innerHTML = html.join('');
};