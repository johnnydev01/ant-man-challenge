import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppComponentService } from './services/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'ant-man-challenge';

  constructor(private appComponentService: AppComponentService) {

  }
  ngOnInit(): void {
    this.getCharacter(1010801);
  }

  thumbnail;


  getCharacters() {
    this.appComponentService.getAllCharacters()
      .subscribe(data => {
        console.log('Data', data.data.results);
      });
  }

  getCharacter(id: number) {
     this.appComponentService.getChacacterById(id)
      .subscribe(data => {
        this.thumbnail =  data.data.results[0].thumbnail;
      })
  }
}
