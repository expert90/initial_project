import { RouterModule  }     from '@angular/router';

import { LoginComponent }    from './module/login/component/login';

export const mainRouting = RouterModule.forChild([
    { path: 'login', component: LoginComponent }
]);