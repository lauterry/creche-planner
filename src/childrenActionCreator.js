import axios from "axios";

export const fetchChildren = () => {
	return (dispatch) => {

		axios.get("https://script.google.com/macros/s/AKfycbwYWbZaGiiXp7CSKrJfVszdPPekrNzxdBcwiOxpuXlEIUdklAo/exec")
			.then((res)=> {
				dispatch({
					type: "FETCH_CHILDREN_SUCCESS",
					children: res.data
				});
			})
			.catch((err)=> {
				dispatch({
					type: "FETCH_CHILDREN_FAILURE"
				});
			});
	};
};
