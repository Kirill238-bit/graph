import Graph from '@/components/graph'
import Image from 'next/image'
import dataMassive from '../data/dataMassive.json'

export default function Home() {
  return (
    <main>
     <div>
      <Graph data={dataMassive}/>
     </div>
    </main>
  )
}
