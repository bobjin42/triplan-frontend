import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Poi from './poi';
import { Droppable } from 'react-beautiful-dnd';
import { Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router'

  const Container = styled.div`
    margin: 8px;
    border: 4px solid lightgrey;
    border-radius: 1px;
    width: 350px;
    height: 700px;
  `;

  const Title = styled.h3`
    padding: 8px;
    color: red;
  `;

  const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color:${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
    flex-grow: 1;
    min-height: 100px;
  `;

  class Calender extends Component {

    goToTimePlan = () => {
      this.props.history.push('/timeplan')
    }

    render() {
      return (
        <Fragment>
          <Container>
            <Title>{this.props.calender.title}<Button onClick={this.goToTimePlan} basic floated='right'>Start Time Planer</Button></Title>
              <Droppable droppableId={this.props.calender.id}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                    {...provided.droppableProps}
                    >
                    {this.props.schedual.map((task, index) => <Poi key={task.id} task={task} index={index}/>)}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
          </Container>
        </Fragment>
      );
    }
  }

export default withRouter(Calender);
