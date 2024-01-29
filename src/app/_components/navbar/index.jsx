"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import "./navbar.css"

const navItems = [
    {
        title: "Services",
        url: "/services",
        subItem: [
            { label: 'Residential Roofing', url: '/services' },
            { label: 'Another action', url: '#' },
            { label: 'Something else here', url: '#' }
        ]
    },
    {
        title: "About us",
        url: "/services",
        subItem: [
            { label: 'Residential Roofing', url: '/services' },
            { label: 'Another action', url: '#' },
            { label: 'Something else here', url: '#' }
        ]
    }, {
        title: "Resources",
        url: "/resources",
        subItem: [
            { label: 'Residential Roofing', url: '/services' },
            { label: 'Another action', url: '#' },
            { label: 'Something else here', url: '#' }
        ]
    },

   

    
]
const Dropdown = ({ data }) => {
    console.log(data)
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    return (
        <li
            className="nav-item dropdown "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                className="nav-link dropdown-toggle text-uppercase m-0 p-0 fst-italic fw-bold fs-7"
                href={data?.url}
                id={`navbarDropdown-${data?.title}`}
                aria-expanded={isActive ? 'true' : 'false'}
            >
                {data?.title}
            </a>
            {isActive && (
                <ul className="dropdown-menu show dropdown-bg " aria-labelledby={`navbarDropdown-${data.title}`}>
                    {data?.subItem.map((item, index) => (
                        <li key={index} className="p-3">
                            <a className="text-decoration-none text-uppercase text-white w-100 fw-bold fst-italic fs-11" href={item.url}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
const Navbar = () => {
    return (
        <div className="position-relative">
            <div className='navbar px-4 d-flex justify-content-between align-items-center flex-nowrap position-fixed top-0 w-100'>
                <div className='d-flex align-items-center gap-4'>
                    <a href='/'>
                        <Image src="/assets/trust-roofing-logo-full-color.svg" width={150} height={110} className="d-lg-block d-none" />
                        <Image src="/assets/trust-roofing-logo-white.svg" width={150} height={110} className="d-block d-lg-none" />
                    </a>
                    <p className="d-lg-none p-0 m-0 text-white fs-7">"Our Name Is Our Promise"</p>

                    <ul className='d-lg-flex gap-5 d-none list-unstyled m-0'>

                        {
                            navItems.map((v, i) => {
                                return <Dropdown data={v} key={i}/>
                            })
                        }
                        <li className='text-uppercase m-0 p-0 fst-italic fw-bold fs-7'>
                        INSTANT ROOF QUOTE
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <a href="tel:8135602998" target="_self" className="hover-scale btn-shadow btn d-none d-md-flex align-items-center rounded-5 px-4 py-2 fw-bold border border-4 border-primary text-primary gap-2 fs-7 bg-white bg-lg-transparent" style={{ height: '50px' }}>
                        <i aria-hidden="true">
                            <img src="/assets/call-btn-icon.svg" alt="call-button" />
                        </i>
                        (813) 560-2998
                    </a>
                    <a href="/contact" target="_self" className="btn-shadow btn btn--blue rounded-5 text-white px-5 fw-bold  fs-7 d-none d-lg-flex align-items-center justify-content-center" style={{ height: '50px' }}>Contact Us</a>
                </div>
            </div>


            {/* Bottom Navigation */}
            <div className='d-lg-none d-block position-fixed bottom-0 z-2 bg-white p-3 d-flex justify-content-between align-items-center flex-nowrap w-100'>

                <div className="d-flex align-items-center gap-4">
                    <button className="border-0 _btn-gradiant d-flex align-items-center rounded-5 px-3 p-2 fw-bold text-white gap-2 fs-7" style={{ height: '50px' }}>
                        <div className="d-flex flex-column gap-1">
                            <div className="bg-white" style={{ height: "3px", width: "30px" }}></div>
                            <div className="bg-white" style={{ height: "3px", width: "30px" }}></div>
                            <div className="bg-white" style={{ height: "3px", width: "30px" }}></div>
                        </div>
                    </button>
                    <a href="tel:8135602998" target="_self" className="btn _btn-gradiant d-flex align-items-center rounded-5 px-4 py-2 fw-bold text-white gap-2 fs-7" style={{ height: '50px' }}>
                        <i aria-hidden="true">
                            <img src="/assets/call-btn-icon-white.svg" alt="call-button" />
                        </i>
                        (813) 560-2998
                    </a>
                </div>

                <button className="border-0 _btn-gradiant d-flex align-items-center rounded-5 px-3 py-2 fw-bold text-white gap-2 fs-7" style={{ height: '50px' }}>
                    Chat
                </button>
            </div>
        </div>
    )
}

export default Navbar