import React from "react";
import {Grid} from "semantic-ui-react";
import "./ListItem.css"


class ListItem extends React.Component {

    addPropsToChildren() {
        return React.Children.map(this.props.children, child => React.cloneElement(child, {data: this.props.data}))
    }

    addDimensionToImage(child){
        return React.cloneElement(child, {className: "image-size"})
    }

    render() {

        const childrenWithProps = this.addPropsToChildren();
        return (

                <Grid.Row divided>
                    <Grid.Column className="image-column" width={2}>
                        {this.addDimensionToImage(childrenWithProps[0])}
                    </Grid.Column>
                    <Grid.Column className="content-column" width={4}>
                        {childrenWithProps[1]}
                    </Grid.Column>
                    <Grid.Column className="content-column" floated="right" width={6}>
                        {childrenWithProps.map((child, currentIndex) => {
                            if (currentIndex <= 1) return null;
                            return (
                                <Grid.Row color="red">
                                    {child}
                                </Grid.Row>
                            );
                        })}
                    </Grid.Column>
                </Grid.Row>

        );
    }

}

export default ListItem;