import React from 'react'


export const Herosection_1 = ({ data }: { data: any }) => {
    return (
        <div>
            <div className='mt-5 text-center '>
                <h1 className='text-center bg-black text-white inline-block text-lg p-1'>{data.title}</h1>
            </div>
            <div className='mt-5 w-full'>
            {data.items.map((item: any, index: any) => (
  <div className='flex justify-between mt-5' key={index}>
    {index % 2 === 0 ? (
      // For even index (first item, third item, and so on)
      <>
        <div>
          <img src={item.img} alt={item.alt} className='w-full h-full' />
        </div>
        <div className='w-1/2'>
          <h1 className='text-center'>{item.title}</h1>
          <p className='mt-5'>{item.desc}</p>
        </div>
      </>
    ) : (
      // For odd index (second item, fourth item, and so on)
      <>
        <div className='w-1/2'>
          <h1 className='text-center'>{item.title}</h1>
          <p className='mt-5 ml-5'>{item.desc}</p>
        </div>
        <div>
          <img src={item.img} alt={item.alt} className='w-full h-full' />
        </div>
      </>
    )}
  </div>
))}

            </div>
        </div>
    )
}
