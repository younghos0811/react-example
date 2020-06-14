import React, {Component} from 'react';
import MainTitle from './MainTitle';
import ItemList from './ItemList';

class ItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: ['Item 1','Item 2','Item 3','Item 4',],
        }
        this.handleUpdateFlag.bind(this);
    }

    handleUpdateFlag(){
        this.state.items.push('AAA');
        this.setState({
            items: this.state.items,
        })
    }

    render() {
        console.log(this.state.items);
        return(
            <div>
                <MainTitle text="younghos Title" url="https://www.naver.com/" />
                <ItemList items={this.state.items}/>
            </div>
        )
    }
}

export default ItemContainer;