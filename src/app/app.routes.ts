import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { QuemSouComponent } from './pages/quem-sou/quem-sou.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "links",
        component: LinksComponent
    },
    {
        path: "quemsou",
        component: QuemSouComponent
    }
];
