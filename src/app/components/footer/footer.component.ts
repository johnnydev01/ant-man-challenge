import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponentService } from 'src/app/services/app-component.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(private appcomponentService: AppComponentService) { }

  data: any;

  ngOnInit() {
    this.getCharacter(1010801)
  }


  getCharacter(id: number) {
    this.appcomponentService.getChacacterById(id)
      .subscribe(data => {
        this.data = data;
      });
  }

}
