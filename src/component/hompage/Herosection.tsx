import React from 'react'


export const Herosection = ({ data }: { data: any }) => {
    return (
        <div className='container'>
            <div className='herosection-img '>
                <div className='pt-80 ml-5 w-full'>
                    <p className='bg-white  inline-block ml-5 p-1 text-lg'>{data.title}</p>
                </div>
            </div>
           
        </div>
    )
}
