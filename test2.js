'use strict';

// Example JSON data returned from your database
let data = {
    rows: [
        {
            firstName: 'Jill',
            lastName:  'Smith',
            age:       '22',
            statusDate: Date()
        },
        {
            firstName: 'Fred',
            lastName:  'Blogs',
            age:       '34',
            statusDate: Date()
        },
        {
            firstName: 'Brian',
            lastName:  'Jones',
            age:       '42',
            statusDate: Date()
        }
    ]
};

let moment = require('moment');

let htmlTableRows = ``;

// Iterate of the rows in the data, use an ES6 "arrow function" to operate on each one
data.rows.forEach((row) => {
    // Use ES6 string template to create HTML table rows
    htmlTableRows += `<tr>
        <td>${row.firstName}</td>
        <td>${row.lastName}</td>
        <td>${row.age}</td>
        <td>${moment(row.statusDate).format("YYYY-MM-DD HH:mm:ss")}</td>
    </tr>`;
});

// HTML for a table
let htmlTable = `<table style="width:100%">${htmlTableRows}</table>`;

console.log(htmlTable);