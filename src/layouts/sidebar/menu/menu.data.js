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
        route: '/users'
      },
      {
        title: 'Hành động',
        icon: FaHome,
        subs: [
          {
            title: 'Danh sách người dùng 2',
            icon: FaHome,
            route: '/users'
          },
          {
            title: 'Danh sách người dùng 3',
            icon: FaHome,
            route: '/users'
          }
        ]
      }
    ]
  }
];

export const MENU_ROUTE_DATA = MENU_DATA.map((item) => item.menu).flat();
