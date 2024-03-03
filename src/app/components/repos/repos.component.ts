import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { GithubService } from '../../services/github.service';
import { fIsoDate } from '../../utils/data';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [
    TagModule,
    DataViewModule,
    NgIf, NgClass,
    CarouselModule
  ],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.scss',
  providers: [GithubService],
  encapsulation: ViewEncapsulation.None
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
    // this.repos = repos;
    this.load();
    // this.repos.forEach((r) => {
    //   const l = r.lang;
    //   r.langs = this.getLan(l);
    // })
  }

  load() {
    this.gitService.getAll().subscribe((repos) => {
      if (repos) {
        const res = repos.slice(0, 10);
        res.forEach(async (r: any) => {
          const img = await this.gitService.getImg(r?.html_url).toPromise();
          r.img = img;
          const languages = await this.gitService.getLangs(r?.full_name).toPromise();
          r.langs = this.getLan(languages);
        });
        this.repos = res;
      }
    })
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
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
