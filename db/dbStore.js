'use strict';

function main() {

    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');

    async function getAllItems() {
    // Queries a dataset.

        // Create a client
        const bigqueryClient = new BigQuery();

        // The SQL query to run
        
        const sqlQuery = `SELECT id, title, date_time, location, price, images
            FROM \`lfanttest1.items.items\`
            ORDER BY id ASC
            LIMIT 1000`;
        //SELECT * FROM `lfanttest1.items.items` LIMIT 1000

        const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'EU',
        //params: {corpus: 'romeoandjuliet', min_word_count: 250},
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        //console.log('Rows:');
        //rows.forEach(row => console.log(row));

        return rows;
    }

    //getAllItems();

    module.exports = {
    getAllItems,
    }
  }

main();