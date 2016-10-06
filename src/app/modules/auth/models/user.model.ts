export class UserModel {

	constructor(
		public username: string,
		public password: string,
		public roles: Array<string> = ['ROLE_USER']
		) {}
}