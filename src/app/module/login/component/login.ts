import { Component } from '@angular/core';

declare var module: any

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './login.html'
})

export class LoginComponent  { name = 'Angular'; }
