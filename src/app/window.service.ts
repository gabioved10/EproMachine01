import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  get windiwRef() {
    return window
  }

  constructor() { }
}
