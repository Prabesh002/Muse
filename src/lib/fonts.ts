import localFont from 'next/font/local';

export const museFont = localFont({
  src: [
    {
      path: '../assets/fonts/MuseFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MuseFont-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MuseFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-muse',
});