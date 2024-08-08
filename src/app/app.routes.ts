import { Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [

    {
        path: '',
        component: ProductsPageComponent
    },
    {
        path: 'product',
        component: ProductPageComponent
    }
];
