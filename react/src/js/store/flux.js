const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
