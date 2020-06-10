import React, { PureComponent } from "react";
import { NoDataContainer } from "../styled/NoDataContainer";

interface NoDataProps {

}

export class NoData extends PureComponent<NoDataProps> {
    render() {
        return (
            <NoDataContainer>
                No Data
            </NoDataContainer>
        )
    }
}