const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsCamp: {
				nombrecampaña: "",
				inlineRadioOptions: ""
			}
		},
		actions: {
			obtenerDataCamp: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsCamp;
				oldStore[name] = evento.target.value;
				setStore({ inputsCamp: oldStore });
				console.log(oldStore);
			}
		}
	};
};

export default getState;
