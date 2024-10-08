// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import '@/styles/FormStyle.css'

// // Custom NavLink component for active link handling
// export default function NavLink({
//     href,
//     exact = false,
//     children,
//     className,
//     ...props
//   }) {
//     const pathname = usePathname();
//     const isActive = exact ? pathname === href : pathname.startsWith(href);
//     const newClassName = isActive ? `${className} active` : className;
  
//     return (
//       <Link href={href} className={newClassName} {...props}>
//         {children}
//       </Link>
//     );
//   }


// import { useState, useRef } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function NavLink({
//   href,
//   exact = false,
//   children,
//   className,
//   ...props
// }) {
//   const pathname = usePathname();
//   const isActive = exact ? pathname === href : pathname.startsWith(href);
//   const newClassName = isActive ? `${className} active` : className;
  
//   const rippleRef = useRef(null);

//   const createRipple = (e) => {
//     const button = e.currentTarget;
//     const circle = document.createElement('span');
//     const diameter = Math.max(button.clientWidth, button.clientHeight);
//     const radius = diameter / 2;

//     circle.style.width = `${diameter}px`;
//     circle.style.height = `${diameter}px`;
//     circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
//     circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
//     circle.classList.add('ripple');

//     rippleRef.current = circle;
//     button.appendChild(circle);

//     setTimeout(() => {
//       circle.remove();
//     }, 600); // Remove ripple after animation
//   };

//   return (
//     <Link href={href} className={newClassName} {...props}>
//       <span className="menu-link" onClick={createRipple}>
//         {children}
//       </span>
//     </Link>
//   );
// }


// Response 3
import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import "@/styles/FormStyle.css"
export default function NavLink({
  href,
  exact = false,
  children,
  className,
  ...props
}) {
  const pathname = usePathname();
  const router = useRouter();  // Use router for programmatic navigation
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const newClassName = isActive ? `${className} active` : className;
  
  const rippleRef = useRef(null);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    rippleRef.current = circle;
    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600); // Remove ripple after animation

    // Delay the navigation to let the ripple effect play
    setTimeout(() => {
      router.push(href);  // Use router to programmatically navigate
    }, 300); // Adjust the delay if needed for longer/shorter ripple
  };

  return (
    <span className={`menu-link ${newClassName}`} onClick={createRipple} {...props}>
      {children}
    </span>
  );
}
