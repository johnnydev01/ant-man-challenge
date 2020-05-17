import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentService } from 'src/app/services/app-component.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterComponent implements OnInit {

  constructor(private appComponentService: AppComponentService) { }

  data: any;

  ngOnInit() {
    this.getCharacter(1010801);
    this.getCharacterSeries(1010801);

  }


  getCharacter(id: number) {
    this.appComponentService.getChacacterById(id)
     .subscribe(data => {
       console.log(data)
        this.data = data.data.results[0];
     })
 }

 getCharacterSeries(idCharacter: number) {
   this.appComponentService.getCharacterSeries(idCharacter)
    .subscribe(data => {
      console.log('Series', data)

      // this.data = data.data.results[7];
    })
 }

}
