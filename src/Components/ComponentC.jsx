import { useSelector } from "react-redux";

export const ComponentC = () => {

	// const store= useSelector((el)=>el); 

	const data= useSelector((store) => {
		return store.data
	})

	return <div>
		<div>{data}</div>
	</div>
}