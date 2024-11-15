import { Inject, Injectable, forwardRef } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class EtatServeService {

  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn()!);
  userAuthState = this.userState.asObservable();

  constructor( @Inject(forwardRef(()=>TokenService)) public token: TokenService) {}

  setAuthState(value: boolean) {
    this.userState.next(value);
  }
}

