import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLocationService } from './api-location.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public apiLocationService: ApiLocationService,
    public http: HttpClient
  ) { }

  public async sendEmail(emailAddress, emailBody) {
    return this.http.post<any>(`${this.apiLocationService.apiLocation}/contact/sendEmail`,
      {emailAddress, emailBody }, {observe: 'response'}).subscribe(res => {
        if(res.status === 200) {
          return 'Success'
        } else {
          return 'Error'
        }
    })
  }

}
