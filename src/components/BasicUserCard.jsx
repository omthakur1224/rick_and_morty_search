import React, { useEffect } from 'react'
import axios from "axios"
function BasicUserCard() {
    useEffect(()=>{

    },[])
    const getData=()=>{
        axios.get('https://rickandmortyapi.com/api/character/?name=rick&page=1')
        .then((res)=>{
            console.log("data",res.data);
        })
    }
  return (
    <div>
        <h1>Rick and Morty Search</h1>
        <div>
         {/* {
            jobs.map((elem )=>

            <div key={elem.id} style={{
                        "width":"90%",
                        "marginLeft":'5%',
                        "marginRight":"5%",
                        "height":"200px",
                        "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        "backgroundColor":'skyblue'
                        }}>
                    <h3  className='headings' >
                        <span>Company Name :</span> <span>{elem.company_name}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Job Title :</span> <span>{elem.job_title}</span>
                    </h3>
                    <h3 className='headings'>
                        <span>Tech Stack :</span> <span>{elem.Required_Skills.map((e)=> <span>{e}&nbsp;|| &nbsp;</span> )}</span>
                    </h3>
                    <Link className='link' to={`/job_desc/${elem.id}`}>
                    <Button variant='contained'
                                   >Know more here</Button>
                            </Link>
              </div>
         )
        } */}
    </div>
    </div>
  )
}

export default BasicUserCard