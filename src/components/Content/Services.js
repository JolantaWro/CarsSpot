import React from 'react';
import Card from '../ui/card';
import { servicesData } from '../../config/services'

const Services = () => {
    return (
    <div className='bg-secondary'>
        <div className='grid grid-cols-12 mx-auto gap-6 xs:grid-cols-4 sm:grid-cols-8 max-w-[1200px]'>
           <div className='py-[88px] gap-20 col-span-12 flex items-start self-stretch xs:col-span-4 xs:flex-col xs:px-4 sm:col-span-8 sm:flex-col sm:px-4 md:px-2 lg:px-2'>
           {
            servicesData.map((data, index) => (
                <Card 
                    key={data.id}
                    title={data.title}
                    introduction={data.introduction}
                    description={data.description}>
                </Card>
            ))
           }
           </div>
        </div>
    </div>
)};

export default Services;