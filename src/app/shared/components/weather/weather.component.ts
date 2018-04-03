import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    /* this._weatherService.getJSON().subscribe(data => {
      console.log(data);
    }); */
  }

}
