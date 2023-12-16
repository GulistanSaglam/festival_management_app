// import {useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import MainNavigation from "../components/MainNavigation"

function RootLayout() {
    // const navigation = useNavigation(); // propertylerinden biri state'tir.
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;