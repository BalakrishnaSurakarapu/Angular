import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService { 

  private dataUrl = 'assets/weather.json';

  constructor(private http:HttpClient, ) { }
  getStudents(){
    return this.http.get('assets/students.json')
  }
  
  getWeatherData() {
    return this.http.get<any[]>('assets/weather.json');
  }


  // getWeather(){debugger
  //   return this.http.get('assets/weather.json')
  // }

}