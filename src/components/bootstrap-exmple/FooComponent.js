import React from 'react';
import { Button, DropdownButton, Dropdown} from 'react-bootstrap';

const FooComponent = () => {
    return (
        <div>
            <Button variant='primary'>primary</Button>
            <Button variant='success'>success</Button>
            <Button variant='info'>info</Button>
            <DropdownButton title='DropdownSample'>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default FooComponent;