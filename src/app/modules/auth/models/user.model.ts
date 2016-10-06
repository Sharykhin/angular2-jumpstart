export class UserModel {

	constructor(
		username: string,
		password: string,
		roles: Array<string> = ['ROLE_USER']
		) {}
}