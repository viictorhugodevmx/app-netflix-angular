import { Component } from '@angular/core';
import { MOVIES, Movie } from '../../data/movies.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  movies: Movie[] = MOVIES;

  getByCategory(category: Movie['category']) {
    return this.movies.filter(m => m.category === category);
  }

  hero = MOVIES[0];

}
