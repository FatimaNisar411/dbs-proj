import axios from "axios";
const baseurl = 'https://expense-tracker-afbe2-default-rtdb.firebaseio.com'
const url = 'https://expense-tracker-afbe2-default-rtdb.firebaseio.com/expense.json'
export async function storeExpense(expense) {
    const res = await axios.post(url, expense)
    const id = res.data.name;
    return id;

}
export async function fetchExpsne() {
    const res = await axios.get(url);
    const arrr = [];
    for (const key in res.data) {
        const obj = {
            id: key,
            amount: res.data[key].amount,
            date: new Date(res.data[key].date),
            title: res.data[key].title

        }
        arrr.push(obj);
    }
    return arrr;
}
export async function editExpense(id, data) {
    return axios.put(baseurl + `/expense/${id}.json`, data)


}
export async function deletefireExpense(id) {

    return axios.delete(baseurl + `/expense/${id}.json`);

}
