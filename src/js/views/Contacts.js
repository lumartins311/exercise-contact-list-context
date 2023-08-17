import React, { useState, useEffect, useContext } from "react"; //importe useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // importe contexto

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context); //ejecuto el contexto y desempaco

	// hace que cada vez que se cargue se ejecute una funcion, en este caso quiero que se ejecute obtenerdatos
	console.log(useContext(Context));
	console.log(store.contacts);
	const [state, setState] = useState({
		showModal: false
	});
	useEffect(function() {
		actions.obtenerdatos();
	}, []);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
