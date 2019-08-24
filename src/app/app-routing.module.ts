import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  /**
   * for while we don't have a home page
   * so we are redirecting to checkout route
   */
  {
    path: '',
    redirectTo: 'checkout',
    pathMatch: 'full',
  },

  /**
   * lazy loading the checkout route
   * because user shall not need this part
   * of the application early
  */
  {
    path: 'checkout',
    loadChildren: () =>  import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
  },

  /**
   * for any other inexisting route
   * redirect to checkout.
   * Usually we show a PageNotFound
   */
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'checkout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
