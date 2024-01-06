import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface iRoute {
    children: ReactNode
}

const PrivateRoute: React.FC<iRoute> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/api/auth');
            if (!response.ok) {
                router.push('/login');
            }
        };

        checkAuth();
    }, []);

    return <>{children}</>;
};

export default PrivateRoute;