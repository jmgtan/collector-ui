import React,{useState, useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import Config from '../Config';
const lo = require('lodash');
const axios = require('axios');

function RootsOfHealthReportComponent() {
   const {principal} = useAuthContext();
   const [reportData, setReportData] = useState({
      generalDemographicData: [],
      reproductiveHealthData: [],
      sanitationData: []
   });
   const [barangays, setBarangays] = useState([]);
   // const [downloadFlag, setDownloadFlag] = useState(false);

   useEffect(async() => {
      const response = await axios.get(Config.backend+"/data/reports/roots-of-health", principal.getRequestAuthHeader());
      setReportData(response.data.entity);
      setBarangays(response.data.entity.generalDemographicData.map((e) => {
         let name = e.residenceAddress;

         if (name == "") {
            name = "n/a";
         } else {
            name = lo.startCase(name)
         }

         return name;
      }));
   }, []);

   async function onDownload() {
      const response = await axios.get(Config.backend+"/data/reports/download", principal.getRequestAuthHeader());
      window.location = response.data.entity.filename;
   }

   return (
      <div class="table-responsive">
         <div class="mt-2 mb-2 d-flex justify-content-end">
            <i class="fas fa-file-download"></i>&nbsp;<a href="#" onClick={onDownload}>Download Report</a>
         </div>
         <table class="table table-hover">
               <thead>
                  <tr>
                     <th>Data Points</th>
                     {barangays.map((e) => {
                        return (
                           <th>{e}</th>
                        );
                     })}
                  </tr>
               </thead>
               <thead>
                  <tr>
                     <th colspan="6">General Demographics</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total Households</td>
                     {reportData.generalDemographicData.map((e) => {
                        return (
                           <td>{e.totalHouseholds}</td>
                        );
                     })}

                  </tr>
                  <tr>
                     <td>Total Population</td>
                     {reportData.generalDemographicData.map((e) => {
                        return (
                           <td>{e.totalPopulation}</td>
                        );
                     })}
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th colspan="6">Reproductive Health Data</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Pregnant women</td>
                     {reportData.reproductiveHealthData.map((e) => {
                        return (
                           <td>{e.pregnantWomen}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>Mother Exclusively BF</td>
                     {reportData.reproductiveHealthData.map((e) => {
                        return (
                           <td>{e.motherExclusivelyBF}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>Mother Mixed BF</td>
                     {reportData.reproductiveHealthData.map((e) => {
                        return (
                           <td>{e.motherMixedBF}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>Couples practicing family planning</td>
                     {reportData.reproductiveHealthData.map((e) => {
                        return (
                           <td>{e.practicingFamilyPlanning}</td>
                        );
                     })}
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th colspan="6">Type of toilet</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Water Sealed</td>
                     {reportData.sanitationData.map((e) => {
                        return (
                           <td>{e.waterSealed}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>Open Pit</td>
                     {reportData.sanitationData.map((e) => {
                        return (
                           <td>{e.openPit}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>Communal</td>
                     {reportData.sanitationData.map((e) => {
                        return (
                           <td>{e.communal}</td>
                        );
                     })}
                  </tr>
                  <tr>
                     <td>No Toilet</td>
                     {reportData.sanitationData.map((e) => {
                        return (
                           <td>{e.noToilet}</td>
                        );
                     })}
                  </tr>
               </tbody>
         </table>
      </div>
   );
}

export default RootsOfHealthReportComponent;