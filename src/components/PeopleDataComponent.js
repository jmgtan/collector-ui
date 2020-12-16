import React,{useState, useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import Config from '../Config';
import PaginationComponent from './PaginationComponent';
import DataTableComponent from './DataTableComponent';
const axios = require('axios');

function PeopleDataComponent() {
    const {principal} = useAuthContext();
    const [tableData, setTableData] = useState([]);
    const [pageDetails, setPageDetails] = useState();
    const [page, setPage] = useState(1);
    const [sortColumn, setSortColumn] = useState("lastName");
    const [sortDirection, setSortDirection] = useState("ASC");

    const dtHeaders = [
        {"display": "#", "column": "id"},
        {"display": "First Name", "column": "firstName"},
        {"display": "Last Name", "column": "lastName"},
        {"display": "Date of Birth", "column": "dob"}
    ];

    useEffect(async() => {
        try {
            const response = await axios.get(Config.backend+"/data/persons/list?page="+page+"&sortColumn="+sortColumn+"&sortDirection="+sortDirection, principal.getRequestAuthHeader());
            setTableData(response.data.entities.map((r) => {
                return [
                    r.id,
                    r.firstName,
                    r.lastName,
                    r.dob
                ];
            }));
            setPageDetails(response.data.page_details);
        } catch (e) {
            window.location = "/";
        }
        
    }, [page, sortColumn, sortDirection]);

    function onPageChange(pageNumber) {
        setPage(pageNumber);
    }

    function onSortChange(sortColumn, sortDirection) {
        setSortColumn(sortColumn);
        setSortDirection(sortDirection);
    }

    return (
        <div class="table-responsive">
            <DataTableComponent headers={dtHeaders} onChange={onSortChange} sortColumn={sortColumn} sortDirection={sortDirection} data={tableData} />
            <PaginationComponent onClick={onPageChange} currentPage={page} pageDetails={pageDetails} />
        </div>
    );
}

export default PeopleDataComponent;