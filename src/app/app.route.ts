
import { Routes } from '@angular/router';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';


export const routes: Routes = [

  { path: 'stickyheader', component: StickyHeaderComponent },

  // canActivate: [CanActivateRouteGuard] this needs to be added to Home screen
];
