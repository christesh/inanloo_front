import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [


    { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/HealthIns/RegClaim', title: 'Basic Forms', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Health-Ins/Claims', title: 'Smart Tables', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

];
