// 'use client'
// import React, { useState } from 'react'
// import { Sidenav, Nav, Toggle } from 'rsuite';
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Menu = () => {
//   const router = useRouter();

//   const [expanded, setExpanded] = useState(true);
//   const [activeKey, setActiveKey] = useState('1');

//   const handleLinkClick = (e, route, key) => {
//     e.preventDefault(); // Prevent default link behavior
//     router.push(route); // Use router.push to navigate
//     setActiveKey(key); // Set the active key based on the clicked item
//   };
// Function to check if screen size is large (lg)
// const isLargeScreen = () => {
//   return window.innerWidth >= 992; // Adjust the pixel value based on your needs
// };

// // Update the expanded state based on the screen size
// const updateExpandState = () => {
//   setExpanded(isLargeScreen());
// };

// // Effect to handle screen resize
// useEffect(() => {
//   // Set initial state based on the screen size
//   updateExpandState();

//   // Add resize event listener
//   window.addEventListener('resize', updateExpandState);

//   // Cleanup event listener on component unmount
//   return () => {
//     window.removeEventListener('resize', updateExpandState);
//   };
// }, []);

//   return (
//     <div className='col-3' >
//       <Sidenav expanded={expanded}>
//         <Sidenav.Body>
//           <Nav activeKey={activeKey} onSelect={setActiveKey}>
//             <Nav.Item eventKey="1" icon={<DashboardIcon />} onClick={(e) => handleLinkClick(e, '/dashboard', '1')}  >
//               {/* <Link href='/dashboard' passHref> */}
//               Dashboard
//               {/* </Link> */}
//             </Nav.Item>

//             <Nav.Item eventKey="2" icon={<GroupIcon />} onClick={(e) => handleLinkClick(e, '/register-talent', '2')} >
//               {/* <Link href='/register-talent' passHref> */}
//               Register Talent
//               {/* </Link> */} 
//             </Nav.Item>
//           </Nav>
//         </Sidenav.Body>
//         <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
//       </Sidenav>
//     </div>
//   )
// }

// export default Menu


// Response 2
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Sidenav, Nav } from 'rsuite';
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import '@/styles/FormStyle.css'
// const Menu = () => {
//   const router = useRouter();

//   const [expanded, setExpanded] = useState(true);
//   const [activeKey, setActiveKey] = useState('1');



//   const handleLinkClick = (e, route, key) => {
//     e.preventDefault(); // Prevent default link behavior
//     router.push(route); // Use router.push to navigate
//     setActiveKey(key); // Set the active key based on the clicked item
//   };

//   const menu_list = [
//     {
//       name: 'Dashboard',
//       icon: <DashboardIcon />,
//       link: '/dashboard'
//     },
//     {
//       name: 'Register Talent',
//       icon: <GroupIcon />,
//       link: '/register-talent'
//     }
//   ]

//   return (
//     <div className='col-12 col-md-3 col-lg-2 menu-border'>
//       <nav>
//         <ul className='list-unstyled my-0 d-flex d-md-block gap-5 gap-md-0'>
//           {menu_list.map((menu, idx) => (
//             <li className='' key={idx}>
//               <Link href={menu.link} className='d-flex gap-3 align-items-center py-3 menu-link'>
//                 {menu.icon}
//                 {menu.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* <Sidenav expanded={expanded}>
//         <Sidenav.Body>
//           <Nav activeKey={activeKey} className='d-flex flex-md-column'>
//             <Nav.Item eventKey="1" icon={<DashboardIcon />} onClick={(e) => handleLinkClick(e, '/dashboard', '1')}>
//               Dashboard
//             </Nav.Item>

//             <Nav.Item eventKey="2" icon={<GroupIcon />} onClick={(e) => handleLinkClick(e, '/register-talent', '2')}>
//               Register Talent
//             </Nav.Item>
//           </Nav>
//         </Sidenav.Body>
//         // <Sidenav.Toggle onToggle={() => setExpanded(!expanded)} /> //
//       </Sidenav> */}
//     </div>
//   );
// };

// export default Menu;


"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import '@/styles/FormStyle.css'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import NavLink from "./NavLink";

// Usage in the nav component
export default function Menu() {
  const menu_list = [
    { link: "/dashboard", icon: <DashboardIcon />, name: "Dashboard" },
    { link: "/register-talent", icon: <GroupIcon />, name: "Register Talent" },
  ];

  return (
    <div className='col-12 col-md-3 col-lg-2 menu-border'>
      <nav className="">
        <ul className="list-unstyled my-0 d-flex d-md-block justify-content-around justify-content-md-start gap-2 gap-md-0">
          {menu_list.map((menu, idx) => (
            <li className="" key={idx}>
              {/* Use NavLink instead of Link for active state handling */}
              <NavLink href={menu.link} className="d-flex gap-3 align-items-center menu-link">
                {menu.icon}
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
