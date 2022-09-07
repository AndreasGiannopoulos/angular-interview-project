import {  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class FavoritesService {

    constructor(private _HttpClient: HttpClient){}

    favoriteList: Array<any> = [];

    addfavorite(movie:object){
        this.favoriteList.push(movie);
        this.favoriteList[0].favorite = true
    }
    removefavorite(index:number){
        this.favoriteList.splice(index, 1);
    }
    getfavoritelist(){
        return this.favoriteList
    }
    
}