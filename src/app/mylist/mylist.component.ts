import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  mylist: Array<any> = [];
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _FavoritesService: FavoritesService) {}

  getMyList() {
    this.mylist = this._FavoritesService.getfavoritelist();
  }

  ngOnInit(): void {
    this.getMyList();
  }

}
