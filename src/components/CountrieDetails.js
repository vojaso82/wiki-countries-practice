import React from 'react';
import { Link, Route } from 'react-router-dom';
import countries from '../countries.json';



class CountrieDetails extends React.Component{
state= {
    country: {}
}

    componentWillReceiveProps(){
        // console.log(this.props)
        let cca3 = this.props.match.params.cca3
        // console.log(cca3)
        let country = countries.find(eachCountry => eachCountry.cca3 === cca3)
        // console.log(country)
        
        this.setState({
            country
        });
    }
 
    

    render(){
        return(
            <div className="col-7">
            <h1>{this.state.country.name?.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {this.state.country.borders?.map((eachBorder) => {
                            // console.log(eachBorder)
                            let countryName = countries.find(eachCountry => eachBorder === eachCountry.cca3)
                            console.log(countryName.name.common)
                            return(
                            <li key={eachBorder}>
                                <Link to={`/country/${eachBorder}`}>{countryName.name.common} </Link>
                            </li>
                            )
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            
          
        )
    }
}



export default CountrieDetails;