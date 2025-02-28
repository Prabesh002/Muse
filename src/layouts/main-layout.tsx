import React from 'react';
import MuNavbar, { NavItem } from '@/components/mu-navbar';
import MuFooter from '@/components/mu-footer';
import logo from '@/assets/logo/muse_ai.svg';

interface MainLayoutProps {
  children: React.ReactNode;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  navItems = defaultNavItems,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MuNavbar items={navItems} logo={logo} />
      <main className="flex-1">
        {children}
      </main>
      <MuFooter />
    </div>
  );
};

export default MainLayout;