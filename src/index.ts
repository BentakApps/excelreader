import * as XLSX from "xlsx";
import * as fs from "fs";
import NetworkService from "./services/networkService";

XLSX.set_fs(fs);
const fileName = fs.readdirSync('.').filter(fn => fn.endsWith('.xlsx'));
console.log(fileName);
const workbook = XLSX.readFile(fileName[0]);
//console.log(workbook);
const worksheet:XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet,{range:9});
for(let i=0;i<50;i++){
  const price:any = data[i];
  const station = await NetworkService.getStations(
    price['ENDEREÇO'],
    price['NÚMERO'],
    price['MUNICÍPIO'],
    price['ESTADO'],
    price['CEP']
  );
  console.log(price['ENDEREÇO'] + ", " +
    price['NÚMERO'] + " - " +
    price['MUNICÍPIO'] + "-" +
    price['ESTADO'] + " - " +
    price['CEP'] + " => " +
    station.data
  );
}

// [
//   {
//     CNPJ: 529581000153,
//     'RAZÃO': 'AUTO POSTO AMAPA - EIRELI',
//     FANTASIA: 'POSTO AMAPÁ',
//     'ENDEREÇO': 'VIA CHICO MENDES',
//     'NÚMERO': 3570,
//     BAIRRO: 'AREAL',
//     CEP: 69906119,
//     'MUNICÍPIO': 'RIO BRANCO',
//     ESTADO: 'ACRE',
//     BANDEIRA: 'VIBRA ENERGIA',
//     PRODUTO: 'GASOLINA ADITIVADA',
//     'UNIDADE DE MEDIDA': 'R$ / litro',
//     'PREÇO DE REVENDA': 5.45,
//     'DATA DA COLETA': 44899.99967592592
//   },
//   {
//     CNPJ: 529581000153,
//     'RAZÃO': 'AUTO POSTO AMAPA - EIRELI',
//     FANTASIA: 'POSTO AMAPÁ',
//     'ENDEREÇO': 'VIA CHICO MENDES',
//     'NÚMERO': 3570,
//     BAIRRO: 'AREAL',
//     CEP: 69906119,
//     'MUNICÍPIO': 'RIO BRANCO',
//     ESTADO: 'ACRE',
//     BANDEIRA: 'VIBRA ENERGIA',
//     PRODUTO: 'GASOLINA COMUM',
//     'UNIDADE DE MEDIDA': 'R$ / litro',
//     'PREÇO DE REVENDA': 5.39,
//     'DATA DA COLETA': 44899.99967592592
//   },
// ]

// {
//   "html_attributions" : [],
//   "result" : {
//      "address_components" : [
//         {
//            "long_name" : "935",
//            "short_name" : "935",
//            "types" : [ "street_number" ]
//         },
//         {
//            "long_name" : "Avenida Nossa Senhora de Fátima",
//            "short_name" : "Avenida N.S. de Fátima",
//            "types" : [ "route" ]
//         },
//         {
//            "long_name" : "Vila Israel",
//            "short_name" : "Vila Israel",
//            "types" : [ "sublocality_level_1", "sublocality", "political" ]
//         },
//         {
//            "long_name" : "Americana",
//            "short_name" : "Americana",
//            "types" : [ "administrative_area_level_2", "political" ]
//         },
//         {
//            "long_name" : "São Paulo",
//            "short_name" : "SP",
//            "types" : [ "administrative_area_level_1", "political" ]
//         },
//         {
//            "long_name" : "Brazil",
//            "short_name" : "BR",
//            "types" : [ "country", "political" ]
//         },
//         {
//            "long_name" : "13478-540",
//            "short_name" : "13478-540",
//            "types" : [ "postal_code" ]
//         }
//      ],
//      "adr_address" : "\u003cspan class=\"street-address\"\u003eAv. Nossa Sra. de Fátima, 935\u003c/span\u003e - \u003cspan class=\"extended-address\"\u003eVila Israel\u003c/span\u003e, \u003cspan class=\"locality\"\u003eAmericana\u003c/span\u003e - \u003cspan class=\"region\"\u003eSP\u003c/span\u003e, \u003cspan class=\"postal-code\"\u003e13478-540\u003c/span\u003e, \u003cspan class=\"country-name\"\u003eBrazil\u003c/span\u003e",
//      "business_status" : "OPERATIONAL",
//      "formatted_address" : "Av. Nossa Sra. de Fátima, 935 - Vila Israel, Americana - SP, 13478-540, Brazil",
//      "geometry" : {
//         "location" : {
//            "lat" : -22.738478,
//            "lng" : -47.31296690000001
//         },
//         "viewport" : {
//            "northeast" : {
//               "lat" : -22.7372098697085,
//               "lng" : -47.3116668197085
//            },
//            "southwest" : {
//               "lat" : -22.7399078302915,
//               "lng" : -47.3143647802915
//            }
//         }
//      },
//      "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png",
//      "icon_background_color" : "#909CE1",
//      "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/gas_pinlet",
//      "name" : "Posto Shell - Nossa Sra de Fátima",
//      "place_id" : "ChIJ16v-FyKayJQRtuWOHnhsZY8",
//      "plus_code" : {
//         "compound_code" : "7M6P+JR Vila Israel, Americana - SP, Brazil",
//         "global_code" : "589J7M6P+JR"
//      },
//      "rating" : 4.3,
//      "reference" : "ChIJ16v-FyKayJQRtuWOHnhsZY8",
//      "reviews" : [
//         {
//            "author_name" : "Comercial Maestro",
//            "author_url" : "https://www.google.com/maps/contrib/113698594030750773483/reviews",
//            "language" : "en",
//            "original_language" : "en",
//            "profile_photo_url" : "https://lh3.googleusercontent.com/a/AEdFTp47DKzjRnvc8Tz3yW0iKyofYIZ-X7ZHpSRxwkFE=s128-c0x00000000-cc-rp-mo-ba3",
//            "rating" : 5,
//            "relative_time_description" : "a year ago",
//            "text" : "Show",
//            "time" : 1617228558,
//            "translated" : false
//         },
//         {
//            "author_name" : "rosana rosanamaria.corretora@hotmail.com",
//            "author_url" : "https://www.google.com/maps/contrib/107470294022451063157/reviews",
//            "language" : "en-US",
//            "original_language" : "pt",
//            "profile_photo_url" : "https://lh3.googleusercontent.com/a-/AD5-WClRT-RNNLu76vtrwoh6LW-Fy7FfbwzDcS9q7wqsBw=s128-c0x00000000-cc-rp-mo-ba3",
//            "rating" : 5,
//            "relative_time_description" : "a month ago",
//            "text" : "Great service\nhelpful staff\nFair price\nI recommend",
//            "time" : 1666814785,
//            "translated" : true
//         },
//         {
//            "author_name" : "Jefferson Bandeira",
//            "author_url" : "https://www.google.com/maps/contrib/104354470166614546446/reviews",
//            "language" : "en-US",
//            "original_language" : "pt",
//            "profile_photo_url" : "https://lh3.googleusercontent.com/a-/AD5-WCnW2qRm2wRqwjhkkSLy4DZkdFsQY4oz4CGXntrdlA=s128-c0x00000000-cc-rp-mo",
//            "rating" : 4,
//            "relative_time_description" : "a year ago",
//            "text" : "Excellent place for shopping. Ambience and good service are part of this pleasant place. HAPPY BIRTHDAY !",
//            "time" : 1633453152,
//            "translated" : true
//         },
//         {
//            "author_name" : "Júlio Souza",
//            "author_url" : "https://www.google.com/maps/contrib/117896522788343479097/reviews",
//            "language" : "en-US",
//            "original_language" : "pt",
//            "profile_photo_url" : "https://lh3.googleusercontent.com/a-/AD5-WCkHdIIxkHfyOwRmfipm2jd5iRv0NM-GfqzGtvk5jW8=s128-c0x00000000-cc-rp-mo-ba5",
//            "rating" : 5,
//            "relative_time_description" : "4 years ago",
//            "text" : "Excellent!\nA fuel station, service station, fuel station or gas station (also known in Portugal as a gas pump or petrol station) is a facility that sells fuel and lubricants for motor vehicles. The most common types of fuel sold are gasoline or diesel (diesel).\n\nSome stations (including in Brazil) supply alternative fuels such as alcohol (ethanol fuel), butane (LPG), natural gas and biodiesel. Others offer hydrogen and kerosene.",
//            "time" : 1542238715,
//            "translated" : true
//         },
//         {
//            "author_name" : "Gabriella Santos",
//            "author_url" : "https://www.google.com/maps/contrib/112953455244518045006/reviews",
//            "language" : "en-US",
//            "original_language" : "pt",
//            "profile_photo_url" : "https://lh3.googleusercontent.com/a-/AD5-WCltADbackjfNsRMrl71ZKw_eNxqkr9bUynaiAjxVw=s128-c0x00000000-cc-rp-mo-ba4",
//            "rating" : 2,
//            "relative_time_description" : "2 years ago",
//            "text" : "Terrible service, we stood for about 10 minutes next to the pump and NO gas attendant came to help us and when he came to help the guy was super rude, I really like to fill up at the shell especially at the entrance of Americana, there the service is 10. I don't recommend this station of Our Lady of Fatima",
//            "time" : 1584307673,
//            "translated" : true
//         }
//      ],
//      "types" : [ "gas_station", "point_of_interest", "establishment" ],
//      "url" : "https://maps.google.com/?cid=10332784183236027830",
//      "user_ratings_total" : 94,
//      "utc_offset" : -180,
//      "vicinity" : "Avenida Nossa Senhora de Fátima, 935 - Vila Israel, Americana",
//      "wheelchair_accessible_entrance" : true
//   },
//   "status" : "OK"
// }