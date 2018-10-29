import React from 'react';
import {Row, Input} from 'react-materialize';

function DropDown ({dropDownID, list, dropDownLabel, valueChanged})
{
        return (
            <Row>
                <Input id={dropDownID} s={4} type='select' label='Homework Status' defaultValue='0' onChange={valueChanged}>
                {list.map((item, index) => {
                    return <option key={item.id} value={index}>{item.status}</option>;
                })}                
                </Input>
            </Row>
        );
}

export default DropDown;