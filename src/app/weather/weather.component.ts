import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private Student: StudentService) { }
  name: any;
  city: string = '';
  weather: any;
  error: string | null = null;

  weatherData: any[]=[];
  studentData:any;
  ngOnInit(): void { this.get();}

  get(){
    this.Student.getStudents().subscribe(
      (data) => {
        this.studentData = data;
        console.dir( this.studentData, 'data')
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getWeather(): void {debugger
    if (this.city.trim()) {
      const cityWeather = this.weatherData.find(
        data => data.name.toLowerCase() === this.city.trim().toLowerCase()
      );
      
      if (cityWeather) {
        this.weather = cityWeather;
        this.error = null;
      } else {
        this.weather = null;
        this.error = 'City not found in the data';
      }
    } else {
      this.weather = null;
      this.error = 'Please enter a city name';
    }
  }
}
