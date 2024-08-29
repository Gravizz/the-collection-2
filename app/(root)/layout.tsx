// src/layout.tsx
import type { Metadata } from 'next';
import { Inter, Prompt } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const inter = Inter({ subsets: ['latin'] });
const prompt = Prompt({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'The Collection',
  description: 'A collection of all my projects in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={prompt.className}>
            <Flex direction="column" minHeight="100vh">
              <Flex direction={{ base: 'column', md: 'row' }} flex="1">
                <Navbar />
                <Flex
                  direction="column"
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                  height="auto"
                >
                  {children}
                </Flex>
              </Flex>
              <Footer />
            </Flex>
          </div>
        </Providers>
      </body>
    </html>
  );
}
