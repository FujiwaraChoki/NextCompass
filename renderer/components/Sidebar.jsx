import { useRef, useEffect } from 'react';

function Sidebar() {
    const drawerRef = useRef(null);
    const drawerSideRef = useRef(null);

    useEffect(() => {
        const drawer = drawerRef.current;
        const drawerSide = drawerSideRef.current;

        if (typeof window !== 'undefined') {
            const Hammer = require('hammerjs');
            const hammer = new Hammer(drawer);

            hammer.on('swiperight', () => {
                drawerSide.classList.add('open');
            });

            return () => {
                hammer.off('swiperight');
            };
        }
    }, []);

    return (
        <div className="drawer" ref={drawerRef}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side" ref={drawerSideRef}>
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
