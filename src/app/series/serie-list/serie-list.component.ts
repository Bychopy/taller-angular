import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons = 0;
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.averageSeasons = this.calculateAverageSeasons();
    });
  }

  onSelectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  private calculateAverageSeasons(): number {
    if (this.series.length === 0) {
      return 0;
    }

    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

}
