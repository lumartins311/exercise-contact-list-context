const getState = ({ getStore, setStore }) => {
	//la funcion setStore se encarga de actualizar el Contacts de abajo
	return {
		store: {
			//Your data structures, A.K.A Entities

			//contactos estado que se va a leer para todos
			Contacts: []
		},

		actions: {
			obtenerdatos: async function() {
				//accion, funcion que puedo volver a utilizar cuando quiera
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda"); //esto me regresa una respuesta, que la guerdo en un espacio de memoira
					//le digo que espere por esa respuesta
					let data = await response.json(); //le digo que convierta esa respuesta en un jason y lo guardo en un espacio de memoira y que espere por la convercion de esa respuesta
					console.log(data);
					setStore({ contacts: data }); //({propiedad:el valor que quiero actuaizar})
				} catch (error) {
					console.log(error);
				}
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
