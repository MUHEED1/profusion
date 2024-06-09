import Arrow from '@/public/icons/arrow'
import Image from 'next/image'
import React from 'react'
import pic from "@/public/images/code.png"
import Task from '../components/task'
import Resources from '../components/resources'
import { Code } from '@nextui-org/react'
import Code1 from '../components/code'
import Accordionn from '../components/accordionn'

const Page = () => {
    return (
        <div className=''>
            <Task />
            <Resources />
            <Code1 />
            <Accordionn/>
        </div>
    )
}

export default Page