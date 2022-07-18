import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   // path: 'calendar',
  //   // loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule)
  // },
  // {
  //   // path: 'charts',
  //   // loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsNg2Module)
  // },
   {
    path: 'HealthIns',
    loadChildren: () => import('../../forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'Health-Ins',
    loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'datatables',
    loadChildren: () => import('../../data-tables/data-tables.module').then(m => m.DataTablesModule)
  },
  {
    path: 'uikit',
    loadChildren: () => import('../../ui-kit/ui-kit.module').then(m => m.UIKitModule)
  },
  // {
  //   path: 'components',
  //   loadChildren: () => import('../../components/ui-components.module').then(m => m.UIComponentsModule)
  // },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)
  },
  // {
  //   path: 'cards',
  //   loadChildren: () => import('../../cards/cards.module').then(m => m.CardsModule)
  // },
  {
    path: 'colorpalettes',
    loadChildren: () => import('../../color-palette/color-palette.module').then(m => m.ColorPaletteModule)
  },
  // {
  //   path: 'chat',
  //   loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule)
  // },
  {
    path: 'chat-ngrx',
    loadChildren: () => import('../../chat-ngrx/chat-ngrx.module').then(m => m.ChatNGRXModule)
  },
  {
    path: 'Contaracts',
    loadChildren: () => import('../../inbox/inbox.module').then(m => m.InboxModule)
  },
  {
    path: 'ReportBuilder',
    loadChildren: () => import('../../taskboard/taskboard.module').then(m => m.TaskboardModule)
  },
  {
    path: 'Staffreport',
    loadChildren: () => import('../../staffreport/staffreport.module').then(m => m.StaffreportModule)
  },
  {
    path: 'Users',
    loadChildren: () => import('../../player/player.module').then(m => m.PlayerModule)
  }
  ,
  
  {
    path: 'UsersAccess',
    loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
  }
];
