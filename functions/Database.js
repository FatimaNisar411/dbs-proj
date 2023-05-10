import * as SQLite from 'expo-sqlite';
import format from './date';
const database=SQLite.openDatabase('expenseDatabase.db');


export async  function init()
{
const promise=new Promise((resolve,reject)=>{
database.transaction((ts)=>{
    ts.executeSql(`CREATE TABLE expenseList IF NOT EXISTS ( id integer primary key ,title TEXT,amount integer,date TEXT)`,[],()=>resolve(),(_,error)=>reject(error));      
});
return promise;
})

}
 export async function storeExpense(expense)
{
const promise=new Promise((resolve,reject)=>{
database.transaction((ts)=>{
    ts.executeSql(`insert into expenseList (title,amount,date) values (?,?,?)`[expense.title,expense.amount,format(expense.date)],[],()=>resolve((result)=>console.log(result)),(_,error)=>reject(error));      
});
return promise;
})

}
export async function fetchExpsne()
{
const promise=new Promise((resolve,reject)=>{
database.transaction((ts)=>{
    ts.executeSql(`SELECT * FROM  expenseList `,[],(result)=>resolve(result.rows._array),(_,error)=>reject(error) );      
});
return promise;
})

}
export async function editExpense(id, data)
{
const promise=new Promise((resolve,reject)=>{
database.transaction((ts)=>{
    ts.executeSql(`UPDATE TABLE expenseList SET title='${data,title}' ,amount=${data.amount},date='${format(data.date)}' WHERE id=${id} `,[],()=>resolve(),(_,error)=>reject(error) );      
});
return promise;
})

}
export async function deletefireExpense(id)
{
const promise=new Promise((resolve,reject)=>{
database.transaction((ts)=>{
    ts.executeSql(`DELETE FROM expenseList WHERE id=${id} `,[],()=>resolve(),(_,error)=>reject(error) );      
});
return promise;
})

}

