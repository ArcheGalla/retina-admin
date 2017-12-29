'use strict';
/* global NODE_ENV */

export default function (app) {

		if (NODE_ENV === 'production') {
				app.constant('API_URL', 'http://retina-lviv.com/api/')
		} else {
				app.constant('API_URL', 'http://localhost:8080/api/')
		}

		app
			.service('Clients', function ($http, API_URL) {
					'ngInject';

					this.getClients = function () {
							return $http.get(`${API_URL}clients`).then(res => res.data);
					};
			});
}
