const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsCamp: {
				nombrecampaña: "",
				inlineRadioOptions: "",
				donde: ""
			},
			inputsRegistro: {
				first_name: "",
				username: "",
				password: "",
				email: "",
				rut: ""
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
			},
			obtenerDataRegistro: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsRegistro;
				oldStore[name] = evento.target.value;
				setStore({ inputsRegistro: oldStore });
			},
			registroUsuario: contacto => {
				console.log(contacto);
				fetch("https://3000-a9e90353-6f2d-479c-9912-869cf4ee8d41.ws-us0.gitpod.io/api/register/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
					});
			}
		}
	};
};

export default getState;
