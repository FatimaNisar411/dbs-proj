import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { context } from "../store/context";

function AllExpences()

{
    const {data}=useContext(context)
return <ExpensesOutput expenses={data} period={'All'}/>
}
export default AllExpences;