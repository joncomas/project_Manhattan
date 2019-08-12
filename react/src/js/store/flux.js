const enlace = "https://3000-c9fe59de-1983-4d56-95a7-5d7053a69968.ws-us0.gitpod.io";
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
			respCamp: [],
			respUrlCamp: [],
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
			InputsLoginBeta: "",
			InputsToken: {}
		},
		actions: {
			clean: evento => {
				const store = getStore();
				setStore({
					inputsLogin: "",
					InputsToken: ""
				});
				localStorage.clear();
				//window.location = "/login";
				//console.log("Este console va donde se supone que se borra la wea", store.InputsToken);
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
				let oldStore = store.inputsValidador;
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
				fetch(enlace + "/api/users/campaigns/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json",
						Authorization: bearer
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						//console.log("Este console log, se muestra cuando se efectua el registro de camp", resp);
					});
			},
			obtenerCampanas: () => {
				const store = getStore();
				const bearer = "Bearer " + store.InputsToken.access;
				fetch(enlace + "/api/users/campaigns/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: bearer
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							respCamp: resp
						});
						//console.log("Lo que trae el fetch get de campañas", resp);
					});
			},
			obtenerUrlCampanas: () => {
				const store = getStore();
				const bearer = "Bearer " + store.InputsToken.access;
				fetch(enlace + "/api/results/13", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: bearer
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							respUrlCamp: resp
						});
						//console.log("Lo que trae el fetch get de las URL de campañas", resp);
					});
			},
			eliminacionCamp: (contactoid, redirect) => {
				const store = getStore();
				const bearer = "Bearer " + store.InputsToken.access;
				fetch(enlace + "/api/users/campaigns/" + contactoid, {
					method: "DELETE",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json",
						Authorization: bearer
					}
				}).then(resp => {
					//					Esta línea es para validad el ok, respuesta de servidor.
					if (resp.ok) {
						alert("La campaña ha sido eliminada con exito");
						redirect.push("/campana");
					}
				});
			},
			registroUsuario: (contacto, redirect) => {
				redirect.push("/login");
				fetch(enlace + "/api/register/", {
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
				const store = getStore();
				fetch(enlace + "/api/token/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("resp sin json", resp);
						if (resp.ok === true) {
							setStore({
								InputsLoginBeta: resp.ok
							});
						}
						//console.log("Debería guardar el response.ok, true o false", store.InputsLoginBeta);
						return resp.json();
					})
					.then(resp => {
						setStore({
							InputsToken: resp
						});
						if (store.InputsLoginBeta === true) {
							redirect.push("/campana");
						} else {
							alert("Su nombre de usuario o contraseña no coinciden");
						}
						//console.log("Acá debería estar todo lo que responde el fetch del login", resp);
					});
			}
		}
	};
};

export default getState;
