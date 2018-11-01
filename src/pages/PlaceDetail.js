import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

class PlaceDetail extends Component {

state = {
  clicked: true
}

handleClickAdd = () => {
  this.props.selectedpois(this.props.place)
  this.setState({clicked: !this.state.clicked})
}

handleClickRemove = () => {
  this.props.removepois(this.props.place)
  this.setState({clicked: !this.state.clicked})
}

  render() {
    return (
      <Card>
        <Image src={this.props.place.thumbnail_url} />
        <Card.Content>
          <Card.Header>{this.props.place.name}</Card.Header>
            <Card.Description>{this.props.place.perex}</Card.Description>
            {this.state.clicked ?
              <Button.Group className="btn" basic color='blue' vertical labeled icon size="mini">
                <Button className="btn" onClick={this.handleClickAdd} labelPosition='left' icon='paper plane outline' content='Add' />
                <Button labelPosition='left' icon='book' content='Detail' />
              </Button.Group>
                :
              <Button.Group className="btn" basic color='blue' vertical labeled icon size="mini">
                <Button className="btn" onClick={this.handleClickRemove} labelPosition='left' icon='paper plane outline' content='Remove' />
                <Button labelPosition='left' icon='book' content='Detail' />
              </Button.Group>
            }


        </Card.Content>
      </Card>
    );
  }

}

export default PlaceDetail;
