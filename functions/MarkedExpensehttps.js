import axios from "axios";
const baseurl = 'https://expense-tracker-afbe2-default-rtdb.firebaseio.com';
const url = 'https://expense-tracker-afbe2-default-rtdb.firebaseio.com/marked.json'
 export  async  function getMardked()
 {
    const res = await axios.get(url);
    const arrr = [];
    for (const key in res.data) {
        const obj = {
            id: key,
            amount: res.data[key].amount,
            date: new Date(res.data[key].date),
            title: res.data[key].title,
            tag:res.data[key].tag
        }
        arrr.push(obj);
    }
    return arrr;

 }
 export async  function setMarked(tag,expense) {
    const res = await axios.post(url, {...expense,tag})
    const id = res.data.name;
    return id;
 }