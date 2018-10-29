import React from 'react';
import {Row, Input} from 'react-materialize';


function DatePicker ({dateID, dateChanged, dateLabel, dateWidth})
{
        return (
            <Row>
                <Input s={dateWidth} id={dateID} label={dateLabel} type='date' name='on' onChange={dateChanged} />
            </Row>
        );
}

export default DatePicker;