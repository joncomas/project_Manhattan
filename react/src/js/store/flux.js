const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsCamp: {
				name_camp: "",
				//inlineRadioOptions: "",
				search_target: "Yapo.cl",
				details: "",
				start_date: "2018-04-25",
				ends_date: "2019-03-14",
				item_to_search: ""
			},
			inputsRegistro: {
				first_name: "",
				username: "",
				password: "",
				email: "",
				rut: ""
			},
			inputsLogin: {
				username: "",
				password: ""
			},
			InputsToken: {}
		},
		actions: {
			clean: evento => {
				const store = getStore();
				setStore({
					InputsToken: {}
				});
			},
			obtenerDataCamp: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsCamp;
				oldStore[name] = evento.target.value;
				setStore({ inputsCamp: oldStore });
			},
			obtenerDataRegistro: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsRegistro;
				oldStore[name] = evento.target.value;
				setStore({ inputsRegistro: oldStore });
			},
			obtenerDatosLogin: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsLogin;
				oldStore[name] = evento.target.value;
				setStore({ inputsLogin: oldStore });
			},
			registroCamp: contacto => {
				const store = getStore();
				const bearer = "Bearer " + store.InputsToken.access;
				console.log(bearer);
				fetch("https://3000-a9e90353-6f2d-479c-9912-869cf4ee8d41.ws-us0.gitpod.io/api/users/campaigns/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json",
						Authorization: bearer
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp);
					});
			},
			registroUsuario: contacto => {
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
			},
			// Abajo me logeo e intentaré obtener el token
			loginUsuario: contacto => {
				fetch("https://3000-a9e90353-6f2d-479c-9912-869cf4ee8d41.ws-us0.gitpod.io/api/token/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							InputsToken: resp
						});
						console.log(resp);
					});
			}
		}
	};
};

export default getState;
