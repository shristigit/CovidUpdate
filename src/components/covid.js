import React, {useEffect} from 'react';
import cors from 'cors';


const  Covid =() => {
    const getCovidData = async () => {
        try{
        const res = await fetch(' https://api.covid19india.org/data.json' ,{
        mode : 'no-cors' 
         
         
       });
       const data = await res.json(); //
       console.log('tfygg');
        console.log(res.json);
        // console.log(x[0]);       
    }
    catch(err) {
      console.log('error');
              console.log(err);
        }
    }

    useEffect(() => {
      console.log('hbhg');
        getCovidData();

    }, []);

  return (
   <>
   <h2>LIVE COVID-19 UPDATES</h2>
   </>
  );
}

export default Covid;
