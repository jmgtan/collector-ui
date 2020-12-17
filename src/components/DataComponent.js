import React, {useState} from 'react';
import PeopleDataComponent from './PeopleDataComponent';
import DemographicsDataComponent from './DemographicsDataComponent';
import BarangayDataComponent from './BarangayDataComponent';
import UploadBatchDataFileComponent from './UploadBatchDataFileComponent';

function DataComponent() {
    const [subnavItem, setSubnavItem] = useState("people");

    function subnavClickHandler(item) {
        setSubnavItem(item);
    }

    let component = null;

    switch (subnavItem) {
        case "people":
            component = <PeopleDataComponent />
            break;
        case "demographics":
            component = <DemographicsDataComponent />;
            break;
        case "barangay":
            component = <BarangayDataComponent />;
            break;
        case 'uploadBatch':
            component = <UploadBatchDataFileComponent />;
            break;
    }

    return(
        <div class="row mt-5">
            <div class="col-12">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class={`nav-link ${subnavItem == "people" ? "active" : null}`} aria-current="page" href="#" onClick={() => {subnavClickHandler('people')}}><i class="fas fa-users"></i> People</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class={`nav-link ${subnavItem == "demographics" ? "active" : null}`} href="#" onClick={() => {subnavClickHandler('demographics')}}>Demographics</a>
                    </li> */}
                    <li class="nav-item">
                        <a class={`nav-link ${subnavItem == "barangay" ? "active" : null}`} href="#" onClick={() => {subnavClickHandler('barangay')}}><i class="fas fa-table"></i> Barangay</a>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link ${subnavItem == "uploadBatch" ? "active" : null}`} href="#" onClick={() => {subnavClickHandler('uploadBatch')}}><i class="fas fa-file-upload"></i> Upload Batch Data File</a>
                    </li>
                </ul>
                <div class="mt-3">
                    {component}
                </div>
            </div>
        </div>
    );
}

export default DataComponent;