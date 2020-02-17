import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstructorsService {

  constructor(private http: HttpClient) { }

  getInstructors() {
    return [
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' },
      { id: 1, name: 'Margineanu Adrian', ocupation: 'Student', description: 'Short description...' }
    ];
  }
}
