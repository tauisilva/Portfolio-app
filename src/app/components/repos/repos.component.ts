import { Component, OnInit, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { GithubService } from '../../services/github.service';
@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [TagModule],
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
        console.log(p)
        this.repos = p;
      }
    })
  }
}
