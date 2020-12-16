import React,{useState, useEffect} from 'react';
import {useAuthContext} from '../auth/AuthContext';
import Config from '../Config';
import PaginationComponent from './PaginationComponent';
import DataTableComponent from './DataTableComponent';
const axios = require('axios');

function DemographicsDataComponent() {
    const {principal} = useAuthContext();
    const [tableData, setTableData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageDetails, setPageDetails] = useState();
    const [sortColumn, setSortColumn] = useState("submissionTime");
    const [sortDirection, setSortDirection] = useState("DESC");

    const dtHeaders = [
        {"display": "#", "column": "id"},
        {"display": "Name", "column": "associatedPersons.lastName"},
        {"display": "Submission Time", "column": "submissionTime"},
        {"display": "Telephone", "column": "telephoneNumber"},
        {"display": "Address", "column": "address"}
    ];
    
    useEffect(async() => {
        try {
            const response = await axios.get(Config.backend+"/data/demographics/list?page="+page+"&sortColumn="+sortColumn+"&sortDirection="+sortDirection, principal.getRequestAuthHeader());
            setTableData(response.data.entities.map((e) => {
                return [
                    e.id,
                    e.associatedPersons[0].firstName + " " + e.associatedPersons[0].lastName,
                    e.submissionTime,
                    e.telephoneNumber,
                    e.address
                ]
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

export default DemographicsDataComponent;