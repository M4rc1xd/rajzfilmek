import { useState, useEffect } from 'react'
import type Rajzfilm from './components/rajzfilmek'

function App() {

  const [rajzfilmek, setRajzfilmek] = useState<Rajzfilm[]>([])

  useEffect(() => {
    async function adatBetoltese() {
      const response = await fetch("/rajzfilmek.json");
      const data: Rajzfilm[] = await response.json();
      setRajzfilmek(data);
    }
    adatBetoltese();
  }, []);

  let legregebbiRajzfilm = rajzfilmek[0].megjelenesEve
  let legkesobbiRajzfilm = rajzfilmek[0].megjelenesEve
  for (const rajzfilm of rajzfilmek) {
    if (rajzfilm.megjelenesEve < legregebbiRajzfilm) {
      legregebbiRajzfilm = rajzfilm.megjelenesEve
    }
    if (rajzfilm.megjelenesEve > legkesobbiRajzfilm) {
      legkesobbiRajzfilm = rajzfilm.megjelenesEve
    }
  }

  return (
    <>
      Rajzfilmek szama: {rajzfilmek.length}
      Legkorabbi rajzfilm: {legregebbiRajzfilm}
      Legkesobbi rajzfilm: {legkesobbiRajzfilm}
    </>
  )
}

export default App
