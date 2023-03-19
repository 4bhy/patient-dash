import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const Sidebar = () => {
    const [show, setShow] = useState(false);
    return (
        <main className={show ? 'space-toggle' : null}>
            <nav class="flex justify-between px-5 py-1 items-center">
                <div class="pt-2 relative ml-8 text-gray-600">

                    <input class="border-2 rounded-3xl border-gray-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="flex items-center">
                    <ul class="flex items-center space-x-6">
                        <li class="font-semibold text-gray-700">
                            <i class="fa fa-bell text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li class="font-semibold text-gray-700"><i class="fa fa-cog text-gray-400" aria-hidden="true"></i></li>
                        <li>
                            <i class="fa fa-sticky-note text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i class="fa fa-bullhorn text-gray-400" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i class="fa fa-user text-gray-400" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </nav>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <div className='header-toggle' onClick={() => setShow(!show)}>
                            <i className={`fas fa-bars mt-2 text-white ml-6 mb-4 ${show ? 'fa-solid fa-xmark' : null}`}></i>
                        </div>

                        <div className='nav-list w-44'>
                            <Link to='/dashboard' className='nav-link active'>
                                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Stats</span>
                            </Link>
                            <Link to='/hotel' className='nav-link'>
                                <i className='fas fa-hotel nav-link-icon'></i>
                                <span className='nav-link-name'>Users</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i className='fas fa-image nav-link-icon'></i>
                                <span className='nav-link-name'>Group</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-shield" aria-hidden="true"></i>
                                <span className='nav-link-name'>Protection</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-ambulance" aria-hidden="true"></i>
                                <span className='nav-link-name'>Ambulance</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-medkit" aria-hidden="true"></i>
                                <span className='nav-link-name'>Medikits</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                                <span className='nav-link-name'>Hospitals</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                            <i className='fas fa-hotel nav-link-icon'></i>
                                <span className='nav-link-name'>News</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-thermometer-full" aria-hidden="true"></i>
                                <span className='nav-link-name'>Tools</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-medkit" aria-hidden="true"></i>
                                <span className='nav-link-name'>Pharamas</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span className='nav-link-name'>Doctors</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span className='nav-link-name'>Patients</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-address-card-o" aria-hidden="true"></i>
                                <span className='nav-link-name'>Records</span>
                            </Link>
                            <Link to='/gallery' className='nav-link'>
                                <i class="fa fa-shield" aria-hidden="true"></i>
                                <span className='nav-link-name'>Vault</span>
                            </Link>
                        </div>
                    </div>

                    <Link to='/logout' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link>
                </nav>
            </aside>
            <ProfileCard />
        </main>
    );
};

export default Sidebar;