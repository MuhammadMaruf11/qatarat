import type { FC, ReactNode } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};


export default Layout;