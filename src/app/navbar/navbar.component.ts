import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor( private _Router: Router) {}
  term:string="";
  fixed:boolean=false;
  @HostListener('window:scroll', ['$event'])
  navbar_fixing()
  {
    if(window.scrollY>500)
    this.fixed=true;
    else
    this.fixed=false;
  }
  ngOnInit(): void {
  }  
  gotohome() {    
    this._Router.navigate(['']);    
  }
  gotofavorites() {    
    this._Router.navigate(['favorites']);    
  }
}
