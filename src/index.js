#!/usr/bin/env node
import supabase from './authentication.js';
import readline from 'readline';
import prompt from 'prompt';

prompt.start();

console.log('Welcome to BeSpoke!');

function selection_menu() {
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
  console.log('7. to create "sale"');
  console.log('');
  console.log('8. to view "commission report"');
  console.log('');
  console.log('9. Main menu');
  console.log('0. exit application');
}

function edit_sales_person_menu() {
  console.clear();
  console.log('Please select id of sales person to edit:');
  edit_menu();
}

function edit_product_menu() {
  console.clear();
  console.log('Please select which product data to edit:');
  console.log('');
  console.log('1. Name');
  console.log('2. Manufacture');
  console.log('3. Style');
  console.log('4. Purchase price');
  console.log('5. Sale price');
  console.log('6. Quantity on hand');
  console.log('7. Commission percentage');
  console.log('');
  console.log('9. Main menu');
  console.log('0. exit application');
  edit_menu();
}

function edit_menu() {
  prompt.get(['id'], function (err, result) {
    if (err) {
      return onErr(err);
    }

    // console.log(' You selected: ' + result.id);
    var id_number = result.id;
    var table = 'sales_person';
    list_edit_function(table, id_number)
  });
}

function main() {
  var table = null;

  prompt.get(['main_menu'], function (err, result) {
    if (err) {
      return onErr(err);
    }

    var selection = result.main_menu
    console.log(' You selected: ' + selection);

    if ( selection == 0 ) { process.exit(); }
    if ( selection == 9 ) { selection_menu(); }
    console.log(`Fetching data from selection ${ selection }, please wait...`);
  
    if ( selection == 1 )
    {
      table = 'sales_person';
      list_function(table);
    }
    if ( selection == 2 )
    {
      table = 'products';
      list_function(table);
    }
    if ( selection == 3 )
    {
      table = 'sales';
      list_function(table);
    }
    if ( selection == 4 )
    {
      table = 'customer';
      list_function(table);
    }
    if ( selection == 5 )
    {
      table = 'sales_person';
      edit_sales_person_menu(table);
    }
    if ( selection == 6 )
    {
      table = 'products';
      edit_product_menu(table);
    }
  });
}

async function list_function(table_name) {
  let { data: supaData, error } = await supabase
  .from(table_name)
  .select('*')

  print_function(supaData);
}

async function list_edit_function(table_name, id_number) {
  let { data: supaData, error } = await supabase
  .from(table_name)
  .select('*')
  .eq('id', id_number)

  console.log(supaData)
  console.log("Add new data when prompted.  Leave blank if there's no change.")
  console.log("To delete type 'null'; emails will not be allowed to leave empty.")

  prompt.get([
    'new_first_name',
    'new_last_name',
    // 'new_email',
    // 'new_address',
    // 'new_phone',
    // 'new_start_date',
    // 'new_termination_date',
    // 'new_manager'
  ], function (err, result) {

    if (err) {
      return onErr(err);
    }

    if ( result.new_first_name != '' ) {
      edit_first_name_function(table_name, id_number, result.new_first_name);
    }
    if ( result.new_last_name != '' ) {
      edit_last_name_function(table_name, id_number, result.new_last_name);
    }

    // console.log(' You selected: ' + result.new_first_name);
    
  });
}

async function edit_first_name_function(table_name, id_number, column_data) {
  let { data: supaData, error } = await supabase
  .from(table_name)
  .upsert({ 'id': id_number, 'first_name': column_data })
  .select()

  // print_function(supaData, error);
}

async function edit_last_name_function(table_name, id_number, column_data) {
  let { data: supaData, error } = await supabase
  .from(table_name)
  .upsert({ 'id': id_number, 'last_name': column_data })
  .select()

  // print_function(supaData, error);
}

async function print_function(supabase_data) {
  console.clear();
  console.log(supabase_data)
  console.log('\n ********** ********** ********** \n');

  selection_menu()
  main()

  // return true
}

function onErr(err) {
  console.log(err);
  return 1;
}

selection_menu();
main();