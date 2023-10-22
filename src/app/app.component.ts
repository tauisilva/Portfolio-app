import { ThemeService } from './../assets/shared/services/theme.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';
  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private themeService :ThemeService
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Escolha o tema',
        items: [
          {
            label: 'Dark',
            icon: 'pi pi-sun',
            command: () => {
              this.theme('dark');
            }
          },
          {
            label: 'Light',
            icon: 'pi pi-moon',
            command: () => {
              this.theme('light');
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

  private message(severity:string,summary:string,detail: string) {
    this.messageService.add({icon: 'pi', severity: severity, summary: summary, detail: detail, closable: false });
  }
}
