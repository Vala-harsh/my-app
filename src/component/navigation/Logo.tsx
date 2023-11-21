import Link from 'next/link'
import React from 'react'

export const Logo = ({data}:{data:any}) => {
  return (
    <div>
<Link href={data.link}>
<img src={data.img} alt={data.altimg} className="w-16 h-16" />

</Link>
    </div>
  )
}
