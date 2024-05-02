import Link from 'next/link';
import { Suspense } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

import HeaderAuth from './header-auth';
import SearchInput from './search-input';
import ThemeSwitcher from './theme-switcher';

export default function Header() {
  return (
    <Navbar className='shadow mb-6 rounded'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          Debate
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <ThemeSwitcher />
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
