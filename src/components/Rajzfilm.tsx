import type Rajzfilm from "./rajzfilmek";
import { useState, useEffect } from "react";

type RajzfilmListaProps = {
  rajzfilmek: Rajzfilm[];
};

export default function RajzfilmLista(props: RajzfilmListaProps) {
    const [premierMutatasa, setPremierMutatasa] = useState<boolean[]>([]);
    props.rajzfilmek.forEach((_, index) => {
        if (premierMutatasa[index] === undefined) {
            premierMutatasa[index] = false;
        }
    });

    

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
            <button/>
        </div>
      </div>
    ))}
  </>
    )
}
