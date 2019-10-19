import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: [
    'img { max-height: 380px; }'
  ]
})
export class MovieCardComponent {
  @Input() movie:any
}
