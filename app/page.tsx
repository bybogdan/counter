import Image from 'next/image'
import { Counter } from './components/Conter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
    </main>
  )
}
