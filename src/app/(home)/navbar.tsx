import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {OrganizationSwitcher, UserButton} from "@clerk/nextjs"
import SearchInput from './search-input'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center shrink-0 pr-6'>
            <Link href="/">
                <Image src="/logo.svg" alt='Logo' width={36} height={36} />
            </Link>
            <h3 className='text-xl'>Docs</h3>
        </div>
        <SearchInput />
        <div className='flex gap-3 pl-6 items-center'>
          <OrganizationSwitcher 
            afterCreateOrganizationUrl="/"
            afterSelectOrganizationUrl="/"
            afterLeaveOrganizationUrl="/"
            afterSelectPersonalUrl="/"
          
          />
          <UserButton />
        </div>
    </nav>
  )
}

export default Navbar