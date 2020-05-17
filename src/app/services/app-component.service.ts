import { Injectable } from '@angular/core';
import { Config } from '../app-config';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = ({
  headers: new HttpHeaders({'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'})
});

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  TS = '1589651945';
  API_KEY =  'caae684840600b730c185b0835eefa26';
  HASH = 'b10757f591ca6001131641ab844d5d87';
  PARAMS = `?ts=${this.TS}&apikey=${this.API_KEY}&hash=${this.HASH}`;

  baseUrl  = this.config.getBaseUrl();

  constructor(private http: HttpClient, private config: Config) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/characters${this.PARAMS}&limit=7` );
  }

  getChacacterById(id: number) : Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/characters/${id}${this.PARAMS}` ); 
   }

   getCharacterSeries(idCharacter) {
     return this.http.get<any>(`${this.baseUrl}/characters/${idCharacter}/series${this.PARAMS}`);
   }

   getComics(idCharacter) {
    return  this.http.get<any>(`${this.baseUrl}/comics${this.PARAMS}&characters=${idCharacter}`)
   }

}
