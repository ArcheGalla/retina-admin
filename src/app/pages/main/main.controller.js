'use strict';

export default class MainController {
		constructor(Clients) {
				'ngInject';
				this.Clients = Clients;

				this.search = '';
		}

		$onInit() {
				this.Clients
					.getClients()
					.then(clients => {
							this.clients = clients;
					})
					.catch(err => {
							this.error = err;
					});
		}
}

