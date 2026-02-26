import { Component } from '@angular/core';
import { MOVIES, Movie } from '../../data/movies.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {

  movies: Movie[] = MOVIES;

  search = '';
  selectedCategory: Movie['category'] | 'All' = 'All';

  private debounceTimer: any;

  filtered: Movie[] = this.movies;

  onSearch(value: string) {
    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.search = value;
      this.applyFilters();
    }, 400);
  }

  applyFilters() {
    this.filtered = this.movies.filter(movie => {

      const matchesSearch =
        movie.title.toLowerCase().includes(this.search.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' ||
        movie.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  setCategory(category: Movie['category'] | 'All') {
    this.selectedCategory = category;
    this.applyFilters();
  }
}
