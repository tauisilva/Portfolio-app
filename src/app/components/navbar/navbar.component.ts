import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    MenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private themeService = inject(ThemeService);
  iconTheme: string = 'moon';
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Temas',
        items: [
          {
            label: 'Claro',
            icon: 'pi pi-sun',
            command: () => {
              this.iconTheme = 'sun';
              this.themeService.setTheme('light');
            }
          },
          {
            label: 'Escuro',
            icon: 'pi pi-moon',
            command: () => {
              this.iconTheme = 'moon';
              this.themeService.setTheme('dark');
            }
          },
          {
            label: 'Padrão do sistema',
            icon: 'pi pi-star',
            command: () => {
              this.iconTheme = 'star';
              this.themeService.setThemeNavegador();
            }
          }
        ]
      }
    ]
  }

  getIcon(): string {
    return 'pi pi-' + this.iconTheme;
  }

}
