import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanAlwaysActivateGuard implements CanActivate {	

	canActivate() {
		return true;
	} 
}