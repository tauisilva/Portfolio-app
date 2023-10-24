import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MenuItemCommandEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu: any;

  items: MenuItem[] | undefined;
  mobileItems: MenuItem[] | undefined;
  isMobile: boolean = false;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home-admin'] },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: ['/edit'] },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
      {
        label: 'Exit',
        icon: 'pi pi-fw pi-times-circle',
        command: (event: MenuItemCommandEvent) => {
          if (event.originalEvent) {
            this.logout(event.originalEvent);
          }
        }
      }
    ];
    this.mobileItems = [
      { icon: 'pi pi-fw pi-home', routerLink: ['/home-admin'] },
      { icon: 'pi pi-fw pi-calendar' },
      { icon: 'pi pi-fw pi-pencil', routerLink: ['/edit'] },
      { icon: 'pi pi-fw pi-file' },
      { icon: 'pi pi-fw pi-cog' },
      {
        icon: 'pi pi-fw pi-times-circle',
        command: (event: MenuItemCommandEvent) => {
          if (event.originalEvent) {
            this.logout(event.originalEvent);
          }
        }
      }
    ];
  }
  ngAfterViewInit() {
    this.checkIsMobile();
  }
  private checkIsMobile() {
    // Determine if the screen width is below a certain threshold (e.g., 768px for mobile)
    this.isMobile = window.innerWidth < 768;

    // Use this.isMobile to set the items in the menu
    if (this.isMobile) {
      this.menu.model = this.mobileItems;
    } else {
      this.menu.model = this.items;
    }
  }

  private logout(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '🐼 Deseja sair?',
      accept: () => {
        this.router.navigate(['/home']);
        this.messageService.add({ severity: 'warn', summary: 'Logout', detail: 'Até mais 🐔' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Não saiu 🐥' });
      }
    });
  }
}
