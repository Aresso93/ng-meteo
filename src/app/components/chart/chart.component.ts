import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { Forecast } from 'src/app/model/forecast';
import { MeteoService } from 'src/app/services/meteo.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public chart: any;
  constructor(private meteoServ: MeteoService){}

  ngOnInit(): void {
    this.meteoServ.getMeteoData().subscribe(data =>{
      console.log('HADOKEN', data);
      this.initChart(data)
    })
    // this.createChart();
  }

  initChart(data:Forecast[]) {

  const ctx:any= document.getElementById('myChart');

const chart:any = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(forecast => forecast.time.toISOString()),
      datasets: [{
        label: 'Precipitation Probability',
        data: data.map(forecast => forecast.precipitation),
        borderWidth: 1
      },
      {
        label: 'Humidity',
        data: data.map(forecast => forecast.humidity),
        borderWidth: 1
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title:{
            display:true,
            text:'%'
          }
        }
        }

    }
  });

  chart.canvas.parentNode.style.height = '500px';

  }

  // createChart(){

  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
	// 							 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	//        datasets: [
  //         {
  //           label: "Umidità",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Velocità del vento",
  //           data: ['542', '542', '536', '327', '17',
	// 								 '0.00', '538', '741'],
  //           backgroundColor: 'limegreen'
  //         }
  //       ]
  //     },
  //     options: {
  //       aspectRatio:3
  //     }

  //   });
  // }


}
