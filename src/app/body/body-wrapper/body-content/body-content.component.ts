import { Component, Input } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
})
export class BodyContentComponent {

  @Input() genre:string = ""
  result:any= []
  loading:boolean = false
ngOnInit(){
  this.getApi(this.genre,1)
}
  getApi(genre: string, page: number) {
this.loading = true
    axios
      .get(
        `https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&genres=${genre}&page=${page}`
      )
      .then((r) => {
       
        this.result = r.data.results;
        this.loading = false
        console.log(r.data)
      });
  }
}
