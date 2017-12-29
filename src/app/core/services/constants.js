'use strict';
/* global NODE_ENV */

export default function (app) {

		if (NODE_ENV === 'production') {
				app.constant('API_URL', 'http://retina-lviv.com/api/')
		} else {
				app.constant('API_URL', 'http://localhost:8080/api/')
		}

		app
			.service('Clients', function ($http, API_URL,$q) {
					'ngInject';

					this.getClients = function () {
							return $q.resolve([{
									"name": "Artem Pushkar",
									"email": "artempushkar@gmail.com",
									"phone": "734183185",
									"message": "empty",
									"position": "intern",
									"dinner": false,
									"amount": 40,
									"country": "Ukraine",
									"city": "Orativ",
									"work": "GL",
									"orderId": "70a16d80-c5a6-11e7-9a72-f9d45f6c227a",
									"paid": true,
									"_id": "GCpLWSAUbFNmLYlK"
							},
									{
											"name": "Artem Pushkar",
											"email": "artempushkar@gmail.com",
											"phone": "734183185",
											"message": "asd",
											"position": "doctor",
											"dinner": true,
											"amount": 1900,
											"country": "Ukraine",
											"city": "Orativ",
											"work": "asdasda",
											"orderId": "3c925120-e1bd-11e7-bf91-5d9bcccb195b",
											"paid": false,
											"_id": "VsxQgfE9XBPQ9Mgd"
									},
									{
											"name": "Artem Pushkar",
											"email": "artempushkar@gmail.com",
											"phone": "734183185",
											"message": "asdasd",
											"position": "doctor",
											"dinner": true,
											"amount": 1900,
											"country": "Ukraine",
											"city": "Orativ",
											"work": "asdsd",
											"orderId": "80130c50-e1bd-11e7-825e-2354786becc8",
											"paid": false,
											"_id": "bW8pMQyYFEjZJQXd"
									},
									{
											"name": "Artem Pushkar",
											"email": "artempushkar@gmail.com",
											"phone": "734183185",
											"message": "empty",
											"position": "intern",
											"dinner": false,
											"amount": 700,
											"country": "Ukraine",
											"city": "Orativ",
											"work": "GL",
											"orderId": "36ba9c70-c5a3-11e7-a204-7338500d3fc6",
											"paid": true,
											"_id": "ccWwdf2QY69FBnZN"
									}])
							// return $http.get(`${API_URL}clients`).then(res => res.data);
					};
			});
}
