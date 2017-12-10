export const updateField = field => {
  return dispatch => {
    dispatch({ type: "UPDATE_FIELD", field });
  };
};

export const dismiss = () => {
  return dispatch => {
    dispatch({ type: "DISMISS_MODAL" });
  };
};

export const present = () => {
  return dispatch => {
    dispatch({ type: "PRESENT_MODAL" });
  };
};

export const newEvent = (title, client, time, desc, date, cb) => {
  return dispatch => {
    dispatch({ type: "LOADING" });
		const req = {
			method: 'POST',
			headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: localStorage.getItem('token'),
				title, client, time, desc, date
			})
		};

	fetch('/api/createnewevent', req)
	.then(res => res.json())
	.then(data => {
			if(!data.ok){ throw Error(data.msg); }
			dispatch({ type: 'EVENT_CREATE_SUCCESS', msg: data.msg});
			cb();
	})
	.catch(err => {
			let msg;
			(err.message == 'Failed to fetch') ? (msg = 'Falha ao enviar solicitação') : (msg = err.message);
			dispatch({ type: 'EVENT_CREATE_FAIL', msg});
	});
		
  };
};

export const getEvents = () => {
	return dispatch => {
		const req = {
			method: 'POST',
			headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({token: localStorage.getItem('token')})
		}

		fetch('/api/getevents', req)
		.then(res => res.json())
		.then(data => {
				if(!data.ok){ throw Error(data.msg); }
				dispatch({ type: 'EVENT_GET_SUCCESS', events: data.events});
		})
		.catch(err => {
				let msg;
				(err.message == 'Failed to fetch') ? (msg = 'Falha ao enviar solicitação') : (msg = err.message);
				dispatch({ type: 'EVENT_GET_FAIL', msg});
		});
	}
}