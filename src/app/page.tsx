import { Herosection } from '@/component/hompage/Herosection'
import { Herosection_1 } from '@/component/hompage/Herosection_1';
import data from "@/content/home.json";
import Image from 'next/image'
export default function Home() {
 return(
  <div>
     <Herosection data={data.herosection}/>
     <Herosection_1 data={data.herosection_1}/>
  </div>
 )
}