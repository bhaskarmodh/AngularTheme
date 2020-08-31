import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/apps/dashboard'
            },
            {
                id       : 'calendar',
                title    : 'Calendar',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'academy',
                title    : 'Academy',
                translate: 'NAV.ACADEMY',
                type     : 'item',
                icon     : 'school',
                url      : '/apps/academy'
            },
            {
                id       : 'contacts',
                title    : 'Contacts',
                translate: 'NAV.CONTACTS',
                type     : 'item',
                icon     : 'account_box',
                url      : '/apps/contacts'
            },
            {
                id       : 'scrumboard',
                title    : 'Scrumboard',
                translate: 'NAV.SCRUMBOARD',
                type     : 'item',
                icon     : 'assessment',
                url      : '/apps/scrumboard'
            }
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'group',
        icon    : 'web',
        children: [
            {
                id   : 'cards',
                title: 'Cards',
                type : 'item',
                icon : 'crop_portrait',
                url  : '/ui/cards'
            },
            {
                id   : 'forms',
                title: 'Forms',
                type : 'item',
                icon : 'web_asset',
                url  : '/ui/forms'
            },
            {
                id   : 'agent-screen',
                title: 'Agent Screen',
                type : 'item',
                icon : 'web_asset',
                url  : '/ui/agent-screen'
            },
            {
                id   : 'colors',
                title: 'Agent Screen',
                type : 'item',
                icon : 'color_lens',
                url  : '/ui/colors'
            },
            {
                id   : 'icons',
                title: 'Icons',
                type : 'item',
                icon : 'photo',
                url  : '/ui/icons'
            },
            {
                id   : 'typography',
                title: 'Typography',
                type : 'item',
                icon : 'text_fields',
                url  : '/ui/typography'
            },
        ]
    },
];
