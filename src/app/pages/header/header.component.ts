import { Component, ViewChild  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';




import { RippleModule } from 'primeng/ripple';

import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule, RippleModule, StyleClassModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // sidebarVisible: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}
