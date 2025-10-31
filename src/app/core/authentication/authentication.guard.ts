/** Angular Imports */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** Custom Services */
import { Logger } from '../logger/logger.service';
import { AuthenticationService } from './authentication.service';

/** Initialize logger */
const log = new Logger('AuthenticationGuard');

/**
 * Route access authorization.
 */
@Injectable()
export class AuthenticationGuard {
  /**
   * @param {Router} router Router for navigation.
   * @param {AuthenticationService} authenticationService Authentication Service.
   */
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  /**
   * Always allows route access since authentication is handled by nginx + oauth2-proxy.
   * Users are authenticated at the nginx/oauth2-proxy layer before reaching the Angular app.
   *
   * @returns {boolean} Always returns true.
   */
  canActivate(): boolean {
    // Authentication is handled by nginx + oauth2-proxy + Keycloak
    // All requests reaching this app are pre-authenticated
    log.debug('Route access granted - authentication handled by nginx/oauth2-proxy');
    return true;
  }
}
