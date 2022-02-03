import { Component } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { Table1Component } from './component/table1/table1.component'

const APP_ROUTES: Routes = [
    {path: 'table1', component: Table1Component},

     {path: '', pathMatch: 'full', redirectTo:'Table1'}
]; 

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );