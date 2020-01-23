import React from "react";
import {Icon, Item} from "semantic-ui-react";



class DutyItem extends React.Component{


    render() {

        const {description, renewalTime} = this.props.data;
        return (
            <div>
                <Item>
                    <Item.Content>
                        <Item.Header content={description.toUpperCase()}/>
                    </Item.Content>
                    <Item.Extra>
                        <Icon size="big" color="yellow" name="clock"/> {renewalTime}
                    </Item.Extra>
                </Item>
            </div>
        );
    }
}

export default DutyItem;