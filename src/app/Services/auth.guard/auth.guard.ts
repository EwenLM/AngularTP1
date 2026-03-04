import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth/auth';

export const AuthGuard = () => {
  const auth: Auth = inject(Auth);
  const router: Router = inject(Router);

  if (!auth.isAuthenticated()) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
