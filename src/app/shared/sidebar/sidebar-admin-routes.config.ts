import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES1: RouteInfo[] = [
    { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'contracts', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/Contaracts', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Users', title: 'Player', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/UsersAccess', title: 'دسترسی کاربران', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/HealthIns/RegClaim', title: 'Basic Forms', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Health-Ins/Claims', title: 'Smart Tables', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '', title: 'گزارش ساز', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass:'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/ReportBuilder', title: 'گزارش قراردادها', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        { path: '/Staffreport', title: 'گزارش عملکرد کارکنان', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    ] },
    { path: '/pages/verticaltimeline', title: 'تایم لاین', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

];
