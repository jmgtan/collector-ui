import React,{useState, useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import Config from '../Config';
import PaginationComponent from './PaginationComponent';
const axios = require('axios');

function Report1Component() {


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
                        <th colspan="6">Type of toilet</th>
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
                        <th colspan="6">Water Source</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pipe</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Well</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Deep Well</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>Spring</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">Dwelling</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barong barong makeshift</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Nipa Bamboo House</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Wooden house</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>Semi Concrete</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">House Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 storey</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>2 storeys</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>3 storeys</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>3 storeys</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                     <tr>
                        <td>3+ storeys</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">Tenure</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Own or ownerlike posession</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Rent house/room incl lot</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Own house/rent lot</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>Own house rent free lot with consent of owner</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                     <tr>
                        <td>Own house, rent free lot without consent of owner</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                     <tr>
                        <td>Rent free house and lot with consent of owner</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                     <tr>
                        <td>Rent free house and lot without consent of owner</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                </tbody>
                <thead>
                    <tr>
                        <th colspan="6">Garbage Disposal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dumping Tambak</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Open pit</td>
                        <td>4</td>
                        <td>22</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                     </tr>
                     <tr>
                        <td>Composting</td>
                        <td>34</td>
                        <td>53</td>
                        <td>44</td>
                        <td>10</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>Burning</td>
                        <td>23</td>
                        <td>54</td>
                        <td>32</td>
                        <td>44</td>
                        <td>23</td>
                     </tr>
                     <tr>
                        <td>Collected</td>
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

export default Report1Component;