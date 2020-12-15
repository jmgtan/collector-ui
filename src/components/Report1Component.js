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
                        <th>#</th>
                        <th>test Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Birth Certificate Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                     </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Report1Component;