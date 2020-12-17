import React,{useState, useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import Config from '../Config';
import PaginationComponent from './PaginationComponent';
const axios = require('axios');

function Report3Component() {


    return (
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Data Points</th>
                        <th>Baranggay 1</th>
                        <th>Baranggay 2</th>
                        <th>Baranggay 3</th>
                        <th>Baranggay 4</th>
                        <th>Baranggay 5</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th colspan="6">General Demographics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total households</td>
                        <td>62</td>
                        <td>94</td>
                        <td>50</td>
                        <td>113</td>
                        <td>76</td>
                     </tr>
                     <tr>
                        <td>Total Population</td>
                        <td>632</td>
                        <td>914</td>
                        <td>454</td>
                        <td>2113</td>
                        <td>886</td>
                     </tr>
                     <tr>
                        <td>Senior Citizen</td>
                        <td>2</td>
                        <td>14</td>
                        <td>44</td>
                        <td>13</td>
                        <td>55</td>
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
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Mother Exclusively BF</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Mother Mixed BF</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>Couples practicing family planning</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">Sanitation Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Water Sealed</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Open Pit</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Communal</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>No Toilet</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">Sanitation Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Water Sealed</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Open Pit</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Communal</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>No Toilet</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Report3Component;