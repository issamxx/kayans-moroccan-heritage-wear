import { Product, ProductCategory } from './types';

export enum Page {
  Home = 'Home',
  ShopAll = 'ShopAll',
  NewArrivals = 'NewArrivals',
  Collections = 'Collections',
  Men = 'Men',
  Women = 'Women',
  AboutUs = 'AboutUs',
  ContactUs = 'ContactUs',
  TrackOrder = 'TrackOrder',
  MyAccount = 'MyAccount',
  Settings = 'Settings',
}

export const MENU_ITEMS_CONFIG = [
  { name: 'Home', href: '#/', key: Page.Home },
  { name: 'Shop All', href: '#/shop-all', key: Page.ShopAll },
  { name: 'New Arrivals', href: '#/new-arrivals', key: Page.NewArrivals },
  { name: 'Collections', href: '#/collections', key: Page.Collections },
  { name: 'Men', href: '#/men', key: Page.Men },
  { name: 'Women', href: '#/women', key: Page.Women },
  { name: 'About Us', href: '#/about-us', key: Page.AboutUs },
  { name: 'Contact Us', href: '#/contact-us', key: Page.ContactUs },
  { name: 'Track Order', href: '#/track-order', key: Page.TrackOrder },
  { name: 'My Account', href: '#/my-account', key: Page.MyAccount },
  { name: 'Settings', href: '#/settings', key: Page.Settings },
];


export const CATEGORIES: ProductCategory[] = [
  ProductCategory.All,
  ProductCategory.TShirt,
  ProductCategory.Sweater,
  ProductCategory.PantsShorts,
  ProductCategory.Caps,
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kayan Skin',
    category: ProductCategory.Sweater,
    description: 'premium cotton blend for comfort and warmth',
    price: 399.00,
    imageUrl: 'https://picsum.photos/seed/sweaterBeige/300/300',
  },
  {
    id: '2',
    name: 'Kayan Neon',
    category: ProductCategory.Sweater,
    description: 'premium cotton blend for comfort and style',
    price: 420.00,
    imageUrl: 'https://picsum.photos/seed/sweaterGreen/300/300',
  },
  {
    id: '3',
    name: 'Kayan Sun',
    category: ProductCategory.Sweater,
    description: 'premium cotton blend for radiant look',
    price: 410.00,
    imageUrl: 'https://picsum.photos/seed/sweaterYellow/300/300',
  },
  {
    id: '4',
    name: 'Imprint Capuche',
    category: ProductCategory.TShirt,
    description: 'premium cotton, capuche print, style',
    price: 249.00,
    imageUrl: 'https://picsum.photos/seed/tshirtBeige1/300/300',
  },
  {
    id: '5',
    name: 'Imprint Capuche',
    category: ProductCategory.TShirt,
    description: 'premium cotton, capuche print, style',
    price: 249.00,
    imageUrl: 'https://picsum.photos/seed/tshirtBeige2/300/300',
  },
  {
    id: '6',
    name: 'Imprint Capuche',
    category: ProductCategory.TShirt,
    description: 'premium cotton, capuche print, style',
    price: 249.00,
    imageUrl: 'https://picsum.photos/seed/tshirtBeige3/300/300',
  },
   {
    id: '7',
    name: 'Urban Explorer Shorts',
    category: ProductCategory.PantsShorts,
    description: 'Comfortable and durable for everyday adventures.',
    price: 320.00,
    imageUrl: 'https://picsum.photos/seed/shorts1/300/300',
  },
  {
    id: '8',
    name: 'Desert Peak Cap',
    category: ProductCategory.Caps,
    description: 'Stylish cap for sun protection and a cool look.',
    price: 180.00,
    imageUrl: 'https://picsum.photos/seed/cap1/300/300',
  },
];