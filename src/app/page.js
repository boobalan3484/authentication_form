'use client'
import '@/styles/FormStyle.css'
import { redirect } from 'next/navigation';

export default function HomePage({ children }) {
  return (
    // <main className='section-bg position-relative' style={{height:'100vh', zIndex:'-2'}}>
    //   {children}
    // </main>
    redirect('/register-talent')
  );
}