import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitatiService {

  constructor(private htpp: HttpClient) { }
  getInvitati() {
    return [
      { id: 1, surname: 'Margineanu', name: 'Adrian'},
      { id: 2, surname: 'Margineanu', name: 'Adrian'},
      { id: 3, surname: 'Margineanu', name: 'Adrian'},
      { id: 4, surname: 'Margineanu', name: 'Adrian'},
      { id: 5, surname: 'Margineanu', name: 'Adrian'},
      { id: 6, surname: 'Margineanu', name: 'Adrian'},
      { id: 1, surname: 'Margineanu', name: 'Adrian-Iulian'},
      { id: 2, surname: 'Margineanu', name: 'Adrian'},
      { id: 3, surname: 'Margineanu', name: 'Adrian'},
      { id: 4, surname: 'Margineanu', name: 'Adrian'},
      { id: 5, surname: 'Margineanu', name: 'Adrian'},
      { id: 6, surname: 'Margineanu', name: 'Adrian'},
    ];
  }
}
