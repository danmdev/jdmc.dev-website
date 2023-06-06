export interface NavbarMenuContent {
  name: string;
  href: string;
}

export type NavbarMenu = {
  items: NavbarMenuContent[];
}