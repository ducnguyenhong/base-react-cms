import { FaHome, FaPalette, FaUserFriends } from 'react-icons/fa';

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
        icon: FaUserFriends,
        route: '/users'
      },
      {
        title: 'Menu level 1',
        icon: FaHome,
        subs: [
          {
            title: 'Page level 2',
            route: '/page-level-2'
          },
          {
            title: 'Menu level 2',
            subs: [
              {
                title: 'Page level 3a',
                route: '/page-level-3a'
              },
              {
                title: 'Page level 3b',
                route: '/page-level-3b'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const MENU_ROUTE_DATA = MENU_DATA.map((item) => item.menu)
  .flat()
  .map((item) => (item.subs ? item.subs.map((itemSub) => ({ ...itemSub, parent: { title: item.title } })) : item))
  .flat()
  .map((item) =>
    item.subs ? item.subs.map((itemSub) => ({ ...itemSub, parent: { title: item.title, parent: item.parent } })) : item
  )
  .flat();
