import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo2',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./pages/home/home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./pages/home/home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'home4',
    loadChildren: () => import('./pages/home/home4/home4.module').then( m => m.Home4PageModule)
  },
  {
    path: 'home5',
    loadChildren: () => import('./pages/home/home5/home5.module').then( m => m.Home5PageModule)
  },
  {
    path: 'home6',
    loadChildren: () => import('./pages/home/home6/home6.module').then( m => m.Home6PageModule)
  },
  {
    path: 'next1',
    loadChildren: () => import('./pages/next/next1/next1.module').then( m => m.Next1PageModule)
  },
  
  {
    path: 'next3',
    loadChildren: () => import('./pages/next/next3/next3.module').then( m => m.Next3PageModule)
  },
  {
    path: 'next2',
    loadChildren: () => import('./pages/next/next2/next2.module').then( m => m.Next2PageModule)
  },
  {
    path: 'next4',
    loadChildren: () => import('./pages/next/next4/next4.module').then( m => m.Next4PageModule)
  },
  {
    path: 'next5',
    loadChildren: () => import('./pages/next/next5/next5.module').then( m => m.Next5PageModule)
  },
  {
    path: 'next6',
    loadChildren: () => import('./pages/next/next6/next6.module').then( m => m.Next6PageModule)
  },
  {
    path: 'subject1',
    loadChildren: () => import('./pages/subject/subject1/subject1.module').then( m => m.Subject1PageModule)
  },
  {
    path: 'subject2',
    loadChildren: () => import('./pages/subject/subject2/subject2.module').then( m => m.Subject2PageModule)
  },
  {
    path: 'subject3',
    loadChildren: () => import('./pages/subject/subject3/subject3.module').then( m => m.Subject3PageModule)
  },
  {
    path: 'subject4',
    loadChildren: () => import('./pages/subject/subject4/subject4.module').then( m => m.Subject4PageModule)
  },
  {
    path: 'subject5',
    loadChildren: () => import('./pages/subject/subject5/subject5.module').then( m => m.Subject5PageModule)
  },
  {
    path: 'subject6',
    loadChildren: () => import('./pages/subject/subject6/subject6.module').then( m => m.Subject6PageModule)
  },
  {
    path: 'list1',
    loadChildren: () => import('./pages/list/list1/list1.module').then( m => m.List1PageModule)
  },
  {
    path: 'list2',
    loadChildren: () => import('./pages/list/list2/list2.module').then( m => m.List2PageModule)
  },
  {
    path: 'list3',
    loadChildren: () => import('./pages/list/list3/list3.module').then( m => m.List3PageModule)
  },
  {
    path: 'list4',
    loadChildren: () => import('./pages/list/list4/list4.module').then( m => m.List4PageModule)
  },
  {
    path: 'list5',
    loadChildren: () => import('./pages/list/list5/list5.module').then( m => m.List5PageModule)
  },
  {
    path: 'list6',
    loadChildren: () => import('./pages/list/list6/list6.module').then( m => m.List6PageModule)
  },
  {
    path: 'payment1',
    loadChildren: () => import('./pages/payment/payment1/payment1.module').then( m => m.Payment1PageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./pages/payment/payment2/payment2.module').then( m => m.Payment2PageModule)
  },
  {
    path: 'payment3',
    loadChildren: () => import('./pages/payment/payment3/payment3.module').then( m => m.Payment3PageModule)
  },
  {
    path: 'payment4',
    loadChildren: () => import('./pages/payment/payment4/payment4.module').then( m => m.Payment4PageModule)
  },
  {
    path: 'payment5',
    loadChildren: () => import('./pages/payment/payment5/payment5.module').then( m => m.Payment5PageModule)
  },
  {
    path: 'payment6',
    loadChildren: () => import('./pages/payment/payment6/payment6.module').then( m => m.Payment6PageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./pages/profile/profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./pages/profile/profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'profile3',
    loadChildren: () => import('./pages/profile/profile3/profile3.module').then( m => m.Profile3PageModule)
  },
  {
    path: 'profile4',
    loadChildren: () => import('./pages/profile/profile4/profile4.module').then( m => m.Profile4PageModule)
  },
  {
    path: 'profile6',
    loadChildren: () => import('./pages/profile/profile6/profile6.module').then( m => m.Profile6PageModule)
  },
  {
    path: 'profile5',
    loadChildren: () => import('./pages/profile/profile5/profile5.module').then( m => m.Profile5PageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'demo2',
    loadChildren: () => import('./pages/demo/demo2/demo2.module').then( m => m.Demo2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
