import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [TagModule, DataViewModule, NgIf, NgClass],
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

  ngOnInit(): void {

    this.gitService.getAll('tauisilva').subscribe((repos) => {
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
