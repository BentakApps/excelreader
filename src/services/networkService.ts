import axios from "axios";
//import StationData from "src/models/StationData";

class NetworkService {
  private static readonly db = axios.create({
    baseURL: 'http://db/',
  });
  public static readonly getStations = async (route:string,number:string,city:string,state:string,postal_code:string) => {
    return await this.db.get('/stations', {
      params:{
        route:route,
        number:number,
        city:city,
        state:state,
        postal_code:postal_code
      }
    });
  }
  // public static readonly postStations = async (stations:StationData[]) => {
  //   //console.log("network service posting stations");
  //   // let formData = new FormData();
  //   // formData.append('data', JSON.stringify(stations));
  //   return await this.db.post('/stations', stations);
  // }
  // public static readonly stationsExceptions = async (stations:StationData[]) => {
  //   return await this.db.post('/stations/exceptions', stations);
  //   //return await this.db.get('/stations/exceptions', {params:{stations:stations}});
  // }
}

export default NetworkService;