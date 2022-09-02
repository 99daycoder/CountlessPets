import createQuotesTable from './createQuotesTable.js';
import dropQuotesTable from './dropQuotesTable.js';
import populateQuotesTable from './populateQuotesTable.js';

async function resetQuotesTable() {
    return [
        await dropQuotesTable(),
        await createQuotesTable(),
        await populateQuotesTable(),
    ];
};

export default resetQuotesTable;