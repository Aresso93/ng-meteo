import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/model/forecast';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  forecastArray: Forecast[] = []

  constructor(private mService: MeteoService) {}

  ngOnInit(): void {
    this.mService.getMeteoData().subscribe(data => this.forecastArray = data)
  }

}
