import { Component, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';
  items: MenuItem[] | undefined;
  selectedIcon: string = 'pi pi-moon';

  @ViewChild('menu', { static: true }) menu: any;

  constructor(
    private messageService: MessageService,
    private themeService :ThemeService
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Default',
        items: [
          {
            label: 'Dark',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          },
          {
            label: 'Light',
            icon: 'pi pi-sun',
            command: () => {
              this.selectIcon('pi pi-sun');
              this.theme('light');
            }
          }
        ]
      },
      {
        label:'Design',
        items:[
          {
            label: 'Original',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          },
          {
            label: 'Analoga',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          },
          {
            label: 'Complementar',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          },
          {
            label: 'Triádico',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          },
          {
            label: 'Monocromático',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('dark');
              this.selectIcon('pi pi-moon');
            }
          }
        ]
      }
    ];
  }
  private theme(theme: string) {
    if(theme === 'light'){
      this.themeService.switchTheme(theme)
      this.message('success', 'Tema ' + theme,' aplicado com sucesso');
    }else{
      this.themeService.switchTheme(theme)
      this.message('info', 'Tema ' + theme,' aplicado com sucesso');
    }

  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }

  private message(severity:string,summary:string,detail: string) {
    this.messageService.add({icon: 'pi', severity: severity, summary: summary, detail: detail, closable: false });
  }
}
