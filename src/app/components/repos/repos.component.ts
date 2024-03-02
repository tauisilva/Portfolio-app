import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [TagModule, DataViewModule, NgIf, NgClass, CarouselModule],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.scss',
  providers: [GithubService]
})

export class ReposComponent implements OnInit {
  private gitService = inject(GithubService);
  skeleton = {
    card: false,
    card_img: false
  };
  repos: any[] = [];
  respOptions: any[] | undefined;

  ngOnInit(): void {
    this.respOptions = [
      { breakpoint: '2559px', numVisible: 5, numScroll: 1 },
      { breakpoint: '1919px', numVisible: 5, numScroll: 1 },
      { breakpoint: '1439px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1366px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '599px', numVisible: 1, numScroll: 1 }

    ]
    this.load();
  }

  load() {
    this.gitService.getAll().subscribe((repos) => {
      if (repos) {
        this.repos = repos;
        repos.forEach(async (r: any) => {
          const img = await this.gitService.getImg(r?.html_url).toPromise();
          r.img = img;
        });
      }
    })
  }
}
