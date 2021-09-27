import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  
  loginWithGitHub(username) {
    const headers = new HttpHeaders({
      "Authorization" : `Token ${environment.gitToken}`
    })
    return this.http.get(`https://api.github.com/users/${username}/repos`, {headers})
  }
}
