import React from 'react';
import { Col } from 'react-materialize';

const HomeworkHeader = ({props}) => {

    return (
        <div className="card-content valign-wrapper purple purple-text text-lighten-5">
            <Col s={3}>Subject</Col>
            <Col s={3}>Date Set</Col>
            <Col s={3}>Date Due</Col>
            <Col s={3}>Status</Col>
        </div>
    );
}

export default HomeworkHeader;