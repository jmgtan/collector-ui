import React, {useState} from 'react';
import Report1Component from './Report1Component';
import Report2Component from './Report2Component';
import Report3Component from './Report3Component';

function ReportsComponent() {
    const [subnavItem, setSubnavItem] = useState("Report2");

    function subnavClickHandler(item) {
        setSubnavItem(item);
    }

    let component = null;

    switch (subnavItem) {
        case "Report1":
            component = <Report1Component />
            break;
        case "Report2":
            component = <Report2Component />;
            break;
        case 'Report3':
            component = <Report3Component />;
            break;
    }

    return (
        <div class="row mt-5">
        <div class="col-12">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class={`nav-link ${subnavItem == "Report1" ? "active" : null}`} aria-current="page" href="#" onClick={() => {subnavClickHandler('Report1')}}>Roots of Health Report</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${subnavItem == "Report2" ? "active" : null}`} aria-current="page" href="#" onClick={() => {subnavClickHandler('Report2')}}>Report 2 - Family Profile 2020</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${subnavItem == "Report3" ? "active" : null}`} aria-current="page" href="#" onClick={() => {subnavClickHandler('Report3')}}>Report 3 - Family Profile 2020</a>
                </li>   
            </ul>
            <div class="mt-3">
                {component}
            </div>
        </div>
    </div>
    );
}

export default ReportsComponent;