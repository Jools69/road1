import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';

class DropDown extends Component
{
    constructor (props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        // e.target.value contains the selected element index - we need to convert this into the
        // associated value to return back to our parent.
        var index = e.target.value;
        console.log(e.target.value);
        console.log(this.props.list[index].status);
        var selectedValue = this.props.list[index].status;
        e.target.value = selectedValue;
        this.props.valueChanged(e);
    }

    render()
    {
        const {dropDownID, list, dropDownLabel, valueChanged} = this.props;

        return (
            <Row>
                <Input id={dropDownID} s={4} type='select' label={dropDownLabel} defaultValue='0' onChange={this.handleChange}>
                {list.map((item, index) => {
                    return <option key={item.id} value={index}>{item.status}</option>;
                })}                
                </Input>
            </Row>
        );
    }
}

export default DropDown;