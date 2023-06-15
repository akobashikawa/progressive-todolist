const { getItems } = require('./todolist');

function main() {
    const items = getItems();
    console.log(items);
}

main();