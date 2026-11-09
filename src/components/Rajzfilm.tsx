import type Rajzfilm from "./rajzfilmek";
import { useState } from "react";

type RajzfilmListaProps = {
  rajzfilmek: Rajzfilm[];
};

export default function RajzfilmLista(props: RajzfilmListaProps) {
  const [premierMutatasa, setPremierMutatasa] = useState<boolean[]>([]);

  function premierKapcsolasa(index: number) {
    setPremierMutatasa((elozo) => {
      const ujAllapot = [...elozo];
      ujAllapot[index] = !ujAllapot[index];
      return ujAllapot;
    });
  }

    return(
  <>
    {props.rajzfilmek.map((rajzfilm, index) => (
      <div key= {index} className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">{rajzfilm.cim}</h2>
          <p className="card-text">
            <i>{rajzfilm.studio}</i>
          </p>
          <p className="card-text">{rajzfilm.megjelenesEve}</p>
          <p className="card-text"> 
            { rajzfilm.megjelenesEve< 2000 && ( "Klasszikus Rajzfilm") }
            { rajzfilm.megjelenesEve < 2010 && rajzfilm.megjelenesEve >= 2000 && ( "Régebbi Rajzfilm") }
            { rajzfilm.megjelenesEve >= 2010 &&( "Modern Rajzfilm") }
            </p>
            {premierMutatasa[index] && (
              <p className="card-text">Premier: {rajzfilm.premier}</p>
            )}
            <button
              className="btn btn-primary"
              onClick={() => premierKapcsolasa(index)}
            >
              {premierMutatasa[index] ? "Premier elrejtése" : "Premier megjelenítése"}
            </button>
        </div>
      </div>
    ))}
  </>
    )
}
