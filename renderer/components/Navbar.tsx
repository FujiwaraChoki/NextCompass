import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabIndex={0}>
                            <Link href="#" className="rounded-lg">
                                <div className="rounded-lg">
                                    AI
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </div>
                            </Link>
                            <ul className="p-2">
                                <li className="rounded-lg"><Link href="/chat">Chat</Link></li>
                                <li className="rounded-lg"><Link href="/image">Image</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-primary normal-case text-xl">NextCompass</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <Link href="#" className="rounded-lg">
                            <div className="rounded-lg">
                                AI
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </div>
                        </Link>
                        <ul className="p-2">
                            <li className="rounded-lg"><Link href="/chat">Chat</Link></li>
                            <li className="rounded-lg"><Link href="/image">Image</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-info"><AiFillGithub size={30} /></a>
            </div>
        </div>
    );
};

export default Navbar;
