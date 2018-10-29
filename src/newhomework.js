import React from 'react';
import DatePicker from './datepicker';
import DropDown from './dropdown';
import { Row, Col, Button, Modal, CardPanel, Tabs, Tab, Container, Card } from 'react-materialize';

function NewHomework ({student, statusList, dateChanged})
{
    return (
        <Modal header='New Homework' bottomSheet trigger={<Button className='purple'>Add Homework</Button>}
            actions={<Button className='purple' waves='light' modal='close'>Add</Button>}>
            <DatePicker dateID={'dateSet'} dateChanged={dateChanged} dateLabel={'Date homework was set:'} dateWidth={4}/>
            <DatePicker dateID={'dateDue'} dateChanged={dateChanged} dateLabel={'Date homework is due:'} dateWidth={4}/>
            <DropDown dropDownID={'status'} list={statusList} dropDownLabel={'Homework Status'} valueChanged={dateChanged}/>      
        </Modal>
    );
}

export default NewHomework