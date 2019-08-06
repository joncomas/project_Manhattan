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
			inputsValidador: {
				passwordrep: "",
				emailrep: ""
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
			obtenerDataRegistroDos: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsRegistro;
				oldStore[name] = evento.target.value;
				setStore({ inputsValidador: oldStore });
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
						//console.log(resp);
					});
			},
			eliminacionCamp: contactoid => {
				const store = getStore();
				const bearer = "Bearer " + store.InputsToken.access;
				fetch(
					"https://3000-a9e90353-6f2d-479c-9912-869cf4ee8d41.ws-us0.gitpod.io/api/users/campaigns/" +
						contactoid,
					{
						method: "DELETE",
						body: JSON.stringify(),
						headers: {
							"Content-Type": "application/json",
							Authorization: bearer
						}
					}
				).then(resp => {
					//					Esta línea es para validad el ok, respuesta de servidor.
					//					if (resp.ok) {
					//						alert("okkkk");
					//					}
				});
			},
			registroUsuario: (contacto, redirect) => {
				redirect.push("/login");
				fetch("https://3000-a9e90353-6f2d-479c-9912-869cf4ee8d41.ws-us0.gitpod.io/api/register/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						//console.log(resp);
					});
			},
			// Abajo me logeo e intentaré obtener el token
			loginUsuario: (contacto, redirect) => {
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
						redirect.push("/");
						//console.log(resp);
					});
			}
		}
	};
};

export default getState;
