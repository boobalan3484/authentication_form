import Backdrop from '@/components/Backdrop'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center wrapper-height gap-4'>
            <h4>
                No Records Found
            </h4>
            <Link href='/register-talent'>
                Register Now!
            </Link>
        </div>
    )
}

export default Dashboard