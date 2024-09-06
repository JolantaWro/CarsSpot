import React from 'react';
import Card from '../ui/card';
import { servicesData } from '../../config/services'

const Services = () => {
    
    return (
    <div className='bg-secondary'>
        <div className='grid grid-cols-12 mx-auto gap-6 xs:grid-cols-4 sm:grid-cols-8 max-w-[1200px]'>
           <div className='col-span-12 flex items-start self-stretch xs:col-span-4 sm:col-span-8 '>
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