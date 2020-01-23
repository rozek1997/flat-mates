import React from "react";
import {Icon, Item} from "semantic-ui-react";

class PaymentItem extends React.Component {


    render() {

        const {sum, partialSum, description} = this.props.data;

        return (
            <Item>
                <Item.Content>
                    <Item.Header content={description.toUpperCase()}/>
                </Item.Content>
                <Item.Extra>
                    <Icon size="big" color="yellow" name="money"/>Sum: {sum} <br/>
                    <Icon size="big" color="yellow" name='money bill alternate'/>Partial sum: {partialSum}
                </Item.Extra>
            </Item>
        );
    }
}

export default PaymentItem;