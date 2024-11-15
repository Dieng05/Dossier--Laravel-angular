import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  
  private issuer = {
    login: 'http://localhost:8000/api/login',
    register: 'http://localhost:8000/api/register',
  };
  
  constructor() { }

  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  
  // Verify the token
  isValidToken(): boolean {
    const token = this.getToken();
  
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    }
  
    return false;
  }
  

  payload(token: any) {
    
    if(token !==null){
      return token;
    }
    else{

      return null;
    }
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}

