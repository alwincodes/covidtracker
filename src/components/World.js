import React, {Component} from 'react';
import Axios from 'axios';
import axios from 'axios';


class World extends Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response =>{
            this.setState( {data : response.data} )
        })
    }
    render(){
        return(
            <div className = "row">
              <div className = "col-md-12">
                  <table className="table table-primary table-bordered table-striped">
                      <thead>
                          <tr>
                              <td>Country</td>
                              <td>Total Cases</td>
                              <td>Recovered</td>
                              <td>Deaths</td>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.data.map((val,key)=>{
                                  return(
                                    <tr>
                                       <td>{val.country}
                                            <img style={{width:'64px', marginLeft : '10px'}}alt="Flags of the corresponding country" src={val.countryInfo.flag}/>
                                       </td>
                                       <td>{val.cases}</td>
                                       <td>{val.recovered}</td>
                                       <td>{val.deaths}</td>
                                    </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
              </div>
            </div>
        )
    }
}

export default World;