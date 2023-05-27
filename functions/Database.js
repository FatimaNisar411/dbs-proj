import * as SQLite from 'expo-sqlite';
const database = SQLite.openDatabase('expenseDatabase4.db');
export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            
            ts.executeSql(`
            CREATE TABLE IF NOT EXISTS expenseList (
                 id INTEGER PRIMARY KEY NOT NULL,
                 title TEXT,
                 amount INTEGER,
                 date TEXT);
                `, [], (_,result) => {
                    resolve(result);
            }, (_, error) => reject(error));
            ts.executeSql(`
            CREATE TABLE IF NOT EXISTS tagexpenseList (
                id INTEGER  PRIMARY KEY NOT NULL ,
                title TEXT,
                amount INTEGER,
                tag TEXT,
                date TEXT,
                FOREIGN KEY(id) REFERENCES expenseList(id) ON DELETE CASCADE ) ;
                `, [], (_,result) => {
                    resolve(result);
            }, (_, error) => reject(error));
        });
    })
    return promise;
}
export function storeExpense(expense) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `INSERT INTO expenseList (title, amount, date) VALUES (?, ?, ?)`,
                [expense.title, expense.amount, expense.date],
                (_, result) => {
                    
                    resolve(result.insertId);
                },
                (_, error) => reject(error)
            );
        });
    });
    return promise;
}

export function storetagExpense(tag,expense) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            console.log(expense.id);
            ts.executeSql(
                `INSERT INTO tagexpenseList (id,title,tag, amount, date) VALUES (?,?,?,?,?)`,
                [expense.id,expense.title,tag,expense.amount,expense.date],
                (_, result) => {
                    
                    resolve();
                },
                (_, error) => reject(error)
            );
        });
    });
    return promise;
}
export function fetchExpsne() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
         
            ts.executeSql(`SELECT * FROM  expenseList `, [], (_,result) => {
                
                resolve(result);
            }, (_, error) => reject(error));
        });
    });
    return promise;
}
export function fetchExpsnetaged() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
         
            ts.executeSql(`SELECT * FROM  tagexpenseList `, [], (_,result) => {
                
                resolve(result.rows._array);
            }, (_, error) => { console.log(error) ; reject(error)});
        });
    });
    return promise;
}
export async function editExpense(id, data) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`UPDATE  expenseList SET title='${data.title
                }' ,amount=${data.amount
                },date='${data.date}'
                 WHERE id=${id} `, [], () => resolve(), (_, error) => reject(error));
        });
      
    })
    return promise;
}
export async function deleteexpense(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`DELETE FROM expenseList WHERE id=${id} `, [], () => {console.log("db okk")
                resolve()}, (_, error) => reject(error));
        });
        
    })
    return promise;
}

export async function deletetagged(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`DELETE FROM tagexpenseList WHERE id=${id} `, [], () => {
                resolve()}, (_, error) => reject(error));
        });
        
    })
    return promise;
}