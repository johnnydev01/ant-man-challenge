import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentService } from 'src/app/services/app-component.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeriesComponent implements OnInit {

  constructor(private appComponentService: AppComponentService) { }

  data: Array<any>;

  ngOnInit() {
    this.getCharacterSeries(1010801);
  }


  getCharacterSeries(idCharacter: number) {
    this.appComponentService.getCharacterSeries(idCharacter)
     .subscribe(data => {
       console.log('Series', data)
       this.data = data.data.results;
     });
  }
}
