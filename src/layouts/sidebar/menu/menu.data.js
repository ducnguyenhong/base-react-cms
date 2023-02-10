import { FaHome, FaPalette } from 'react-icons/fa';

export const MENU_DATA = [
  {
    section: 'Trang chủ',
    menu: [
      {
        title: 'Bảng điều khiển',
        icon: FaPalette,
        route: '/'
      }
    ]
  },
  {
    section: 'Người dùng',
    menu: [
      {
        title: 'Danh sách người dùng',
        icon: FaHome,
        route: '/users22f'
      },
      {
        title: 'Hành động',
        icon: FaHome,
        subs: [
          {
            title: 'Danh sách người dùng 2',
            route: '/users'
          },
          {
            title: 'Danh sách người dùng 22',
            subs: [
              {
                title: 'Danh sách người dùng 3',
                route: '/users22'
              },
              {
                title: 'Danh sách người dùng 33',
                route: '/users223'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MENU_ROUTE_DATA = MENU_DATA.map((item) => item.menu).flat();
