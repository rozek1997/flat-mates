import React from "react";
import {Grid} from "semantic-ui-react";


const DetailList = (props) => {

    const list = props.data.map(item => {
        return React.cloneElement(props.children, {key: item.objectId, data: item})
    });

    return (
        <Grid stackable divided> {list}</Grid>
    );
};


export default DetailList;