import '../styles/globals.css';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import { DefaultSeo } from 'next-seo';
import React, { type FC, type ReactElement, type ReactNode } from 'react';

import { configApp } from '@/configs/app';

interface Layout {
  getLayout?: (page: ReactElement) => ReactNode;
}

export type NextPageWithLayout<P = undefined, IP = P> = NextPage<P, IP> &
  Layout;

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & Layout;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component?.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${configApp.NAME}`}
        defaultTitle="Create Next App"
        description="Generated by create next app"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
