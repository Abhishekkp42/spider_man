import { useDispatch } from "react-redux"
import { addData } from "../Redux/action";

export const ComponentB = () => {

	const dispatch = useDispatch()

	const handlechange=(x)=>{
		dispatch(addData(x));
		console.log("xxx")
	 }


	return <div>
		<input type="text" onChange={(e) => handlechange(e.target.value)} />
		<button>Submit</button>
	</div>
}