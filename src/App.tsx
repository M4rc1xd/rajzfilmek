import { useState, useEffect } from 'react'
import type Rajzfilm from './components/rajzfilmek'
import "bootstrap/dist/css/bootstrap.min.css"
import RajzfilmLista from './components/Rajzfilm';

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

  let legregebbiRajzfilm = rajzfilmek[0]?.megjelenesEve
  let legkesobbiRajzfilm = rajzfilmek[0]?.megjelenesEve
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
      <p>Rajzfilmek szama: {rajzfilmek.length}</p>
      <p>Legkorabbi rajzfilm: {legregebbiRajzfilm}</p>
      <p>Legkesobbi rajzfilm: {legkesobbiRajzfilm}</p>
      <p>{toString(rajzfilmek[0]?.premier)}</p>

      <p>Rajzfilmek listaja:</p>
      <RajzfilmLista rajzfilmek={rajzfilmek} />
    </>
  )
}

export default App
