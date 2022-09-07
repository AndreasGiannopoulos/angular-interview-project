import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentid: number = 0;
  mediaType: string = '';
  movie: any = null;
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TrendingService: TrendingService,
    private _FavoritesService: FavoritesService
  ) {
    this.currentid = this._ActivatedRoute.snapshot.params.id;
    this.mediaType = this._ActivatedRoute.snapshot.params.mediatype;
  }
  getTrendingDetails() {
    this._TrendingService
      .getdetails(this.mediaType, this.currentid)
      .subscribe((response) => {
        this.movie = response;
      });
  }
  addToMyList(){
    this.movie.favorite = true
    this._FavoritesService
      .addfavorite(this.movie)
  }
  removeFromList(){
    this.movie.favorite = false
    this._FavoritesService
      .removefavorite(this.movie.index)
  }
  // moviedetails(){
  //   console.log(this.movie)
  // }
  ngOnInit(): void {
    this.getTrendingDetails();
  }
  // ngDoCheck(): void {
  //   this.moviedetails()
  // }
}
