import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentService } from 'src/app/services/app-component.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComicsComponent implements OnInit {

  constructor(private appComponentService: AppComponentService) { }

  data: Array<any>;

  ngOnInit() {
    this.getComics(1010801)
  }


  getComics(idCharacter: number) {
    this.appComponentService.getComics(idCharacter)
      .subscribe(data => {
        console.log('Comics', data.data.results)
        this.data = data.data.results;
      });
  }

}
