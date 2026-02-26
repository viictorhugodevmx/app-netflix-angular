import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES, Movie } from '../../data/movies.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {

  private route = inject(ActivatedRoute);

  movie?: Movie;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find(m => m.id === id);
  }
}
