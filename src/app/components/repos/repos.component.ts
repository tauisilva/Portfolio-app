import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { environment } from '../../../env/env';
import { repos } from '../../models/dados';
import { GithubService } from '../../services/github.service';
import { fIsoDate } from '../../utils/data';
@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [
    CarouselModule,
    DataViewModule,
    NgClass, NgIf,
    TagModule,
  ],

  templateUrl: './repos.component.html',
  styleUrl: './repos.component.scss',
  providers: [GithubService],
  encapsulation: ViewEncapsulation.None
})

export class ReposComponent implements OnInit {
  private gitService = inject(GithubService);
  isPort = environment.REPO_NAME;
  skeleton = {
    card: false,
    card_img: false
  };
  repos: any[] = [];
  respOptions: any[] | undefined;

  ngOnInit(): void {
    this.respOptions = [
      { breakpoint: '2559px', numVisible: 5, numScroll: 5 },
      { breakpoint: '1919px', numVisible: 5, numScroll: 5 },
      { breakpoint: '1439px', numVisible: 3, numScroll: 3 },
      { breakpoint: '1366px', numVisible: 3, numScroll: 3 },
      { breakpoint: '1199px', numVisible: 2, numScroll: 2 },
      { breakpoint: '991px', numVisible: 2, numScroll: 2 },
      { breakpoint: '599px', numVisible: 1, numScroll: 1 }

    ]
    this.load();
    // this.loadLocal();
  }

  loadLocal() {
    const rep = repos.slice(0, 10);
    this.repos.forEach((r) => {
      const l = r.lang;
      r.langs = this.getLan(l);
    })
    const index = rep.findIndex(i => i.name === this.isPort);
    if (index !== -1) {
      rep.unshift(rep.splice(index, 1)[0]);
    }
    this.repos = rep;
  }

  load() {
    this.gitService.getAll().subscribe(async (repos) => {
      if (repos) {
        const res = repos.filter((obj: { description: string | null; }) => obj.description !== null && obj.description !== '');
        console.log(res.length);

        res.forEach(async (r: any) => {
          const img = await this.gitService.getImg(r?.html_url).toPromise();
          r.img = img;

          const languages = await this.gitService.getLangs(r?.full_name).toPromise();
          r.langs = this.getLan(languages);
        });
        if (typeof this.isPort === 'string') {
          const index = res.findIndex((i: { name: string; }) => i.name === this.isPort);

          if (index !== -1) {
            res.unshift(res.splice(index, 1)[0]);
          }
        }

        this.repos = res;
      }
    });
  }


  formatData(data: Date) {
    return fIsoDate(new Date(data));
  }

  getLan(data: any): any {
    const total: any = Object.values(data).reduce((acc: any, value: any) => acc + value, 0);
    console.log(74.21 + 22.05 + 3.75);
    const obj = Object.entries(data).map(([key, value]: [any, any]) => ({
      name: key,
      percentage: ((value / total) * 100).toFixed(2),
      color: this.getRandomColor(),
    }));
    obj.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
    return obj;
  }

  getRandomColor(): string {
    let color = '';
    do {
      color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (color === '#FFFFFF' || color === '#000000');
    return color;
  }

}
