import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import {mainRouting} from '../app.routing';

import {LoginComponent} from './component/login';
import {contentHeaders} from '../common/headers';

@NgModule({
  imports: [
    BrowserModule,
    mainRouting
  ],
  declarations: [
    LoginComponent
  ],
  bootstrap: [
    LoginComponent
  ]
})

export class LoginModule {
  constructor(public router: Router, public http: Http) {
  }

  login(event: any, username: string, password: string) {
    event.preventDefault();
    /*let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:8000/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );*/

    let authentication = false;

    let $this = this;

    this.http.get('http://localhost:8000/data/users.json', { headers: contentHeaders })
    	.subscribe(
    		response => {
    			response.json().forEach((user:any) => {
		    		if (user.username == username && user.password == password) {
		    			authentication = true;
		    			localStorage.setItem('currentUser', user.username);
		    			location.href = './#/workspace';
		    		}
		    	});
		    	if (!authentication) {
		    		alert("Login Failed!");
		    	}
    		},
    		error => {
    			alert(error.text());
    			console.log(error.text());
    		}
    	);
  }

}