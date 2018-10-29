import React from 'react';
import {Collapsible, CollapsibleItem, Col} from 'react-materialize';

const HomeworkDetails = ({props}) => {

    return (
        <Collapsible className="homework-list">
        {/*<div className="homework-list collection">*/}
        {
            props.homeworks.map(hwork => {
                console.log(hwork.dateDue);
                return hwork.student === props.student ? (
                <CollapsibleItem className="card-content light-green purple-text text-darken-4" key={hwork._id} 
                header={<div><Col s={3}>{hwork.subject}</Col>
                             <Col s={3}>{hwork.dateSet.split("T")[0]}</Col>
                             <Col s={3}>{hwork.dateDue.split("T")[0]}</Col>
                             <Col s={3} onClick={(e) => {e.preventDefault(); alert('Hi');}}>{hwork.status}</Col>
                        </div>}>
                    <h6 className="homework-list-h6">Details:</h6>
                    {hwork.details}
                </CollapsibleItem>
                ) : null
            })
        }
        </Collapsible>
    );
}

export default HomeworkDetails;