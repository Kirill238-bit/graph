import Graph from '@/components/graph'
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
