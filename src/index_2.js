const { count } = require('console');
var supabase = require('./authentication.js');

console.log('Welcome to BeSpoke!');
console.log('Please select one of the following commands:');
console.log('');
console.log('1. for list of "sales persons"');
console.log('2. for list of "products"');
console.log('3. for list of "sales"');
console.log('4. for list of "customers"');
console.log('');
console.log('5. to edit "sales persons"');
console.log('6. to edit "products"');
console.log('');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

openReadLine()

readline.question('Your selection: ', selection => {
  console.log(`Fetching data from selection ${ selection }, please wait...`);

  if ( selection == 1 ) { listSalesPerson(); }
  if ( selection == 2 ) { listProducts(); }
  if ( selection == 3 ) { listSales(); }
  if ( selection == 4 ) { listCustomers(); }

  if ( selection == 5 ) { editor(); }

  readline.close();
});

function editor() {
  readline.question(`Enter sales person's id: `, selection => {
    console.log(`Fetching data id ${ selection }'s data, please wait...`);
  
    editSalesPerson( selection );
  
    readline.close();
  });
}

async function editSalesPerson( id ) {
  let { data: glass, error } = await supabase
  .from('sales_person')
  .select()
  .eq('id', id)
  
  // console.log(glass, error)

  column = glass[0];

  openReadLine();
  console.log(column['id'])
  closeReadLine();

  console.log(column['first_name'])
  console.log(column['last_name'])

  // for ( var i = 0; i < count(glass[0]); i++ ) {
  //   console.log('number of columns: ', i);
  // }

  return true
}

async function listSalesPerson() {
  let { data: glass, error } = await supabase
  .from('sales_person')
  .select('*')

  console.log(glass, error)
  closeReadLine()

  return true
}

async function listProducts() {
  let { data: glass, error } = await supabase
  .from('products')
  .select('*')

  console.log(glass, error)

  return true
}

async function listSales() {
  let { data: glass, error } = await supabase
  .from('sales')
  .select('*')

  console.log(glass, error)

  return true
}

async function listCustomers() {
  let { data: glass, error } = await supabase
  .from('customer')
  .select('*')

  console.log(glass, error)

  return true
}

// async function editSalesPerson() {
//   let { data: glass, error } = await supabase
//   .from('sales_person')
//   .update({ first_name: 'Ulla' })
//   .eq('id', 1)
//   .select()

//   console.log(glass, error)

//   return true
// }

function openReadLine() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

function closeReadLine() {
  readline.close();
}