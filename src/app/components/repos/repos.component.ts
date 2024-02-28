import { Component, OnInit, inject } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { GithubService } from '../../services/github.service';
import { NgClass, NgIf } from '@angular/common';
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

  repos: any[] = [];

  ngOnInit(): void {

    this.gitService.getAll('tauisilva').subscribe((p) => {
      if (p) {
        console.log(p[0])
        this.repos = p;
      }
    })
  }
}
