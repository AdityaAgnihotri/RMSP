import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public url: string = "http://localhost:5555/data";
  private data: any[];
  private messageSource = new BehaviorSubject("message");
  currentMessage = this.messageSource.asObservable();
  private loading = false;
  
  
  constructor(private http: HttpClient) { }


  getDataJson() {
    const sub: Subject<any> = new Subject();
    if (!this.data) {
      if (!this.loading) {
        this.loadData();
      }
    }
    return sub.asObservable();
  }

 loadData() {  
    return this.http.get(this.url);
  }


  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  
}
