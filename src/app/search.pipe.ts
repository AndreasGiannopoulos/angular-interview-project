import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(movielist: any[], term: string,type:string): any[] {   
    return movielist.filter((movie) => 
    movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
