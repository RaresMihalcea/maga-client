import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveYearService {

  constructor() { }

  getDefaultActiveYear(): number {
    return 2023
  }
}
