import React, {useState, useEffect} from 'react';

function DataTableComponent(props) {
    const PARAM_PAGE = "page";
    const PARAM_SORT_COLUMN = "sortColumn";
    const PARAM_SORT_DIRECTION = "sortDirection";
    const SORT_DIR_ASC = "ASC";
    const SORT_DIR_DESC = "DESC";

    const onChangeHandler = props.onChange;
    const dataTableHeaders = props.headers;
    const data = props.data;
    const [sortColumn, setSortColumn] = useState(props.sortColumn);
    const [sortDirection, setSortDirection] = useState(props.sortDirection);

    let columnIcon = (sortDirection == SORT_DIR_ASC) ? <i class="fas fa-angle-up text-primary"></i> : <i class="fas fa-angle-down text-primary"></i>;

    let headers = dataTableHeaders.map((e) => {
        return (
            <th>
                <a href="#" class="link-dark" onClick={() => {onSortTrigger(e.column)}}>{e.display}</a> {sortColumn == e.column ? columnIcon : null}
            </th>
        );
    });

    function onSortTrigger(reqSortColumn) {
        let reqSortDirection = SORT_DIR_ASC;
        
        if (sortColumn == reqSortColumn && sortDirection == SORT_DIR_ASC) {
            reqSortDirection = SORT_DIR_DESC;
        }

        setSortColumn(reqSortColumn);
        setSortDirection(reqSortDirection);

        if (onChangeHandler) {
            onChangeHandler(reqSortColumn, reqSortDirection);
        }
    }

    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => {
                    return (
                        <tr>
                            {row.map((e) => {
                                return (
                                    <td>{e}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DataTableComponent;