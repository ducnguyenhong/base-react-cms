import { FaHome } from 'react-icons/fa';

export const MENU_DATA = [
  {
    section: 'Trang chủ',
    menu: [
      {
        title: 'Bảng điều khiển',
        icon: FaHome,
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
