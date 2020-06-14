import React, { Component } from 'react';
 
class InformationArea extends Component {
    constructor(props) {
        super(props);
        this.handleOpenEverything = this.handleOpenEverything.bind(this);
        this.state = {
            flag: false,
        };
    }
    
    handleOpenEverything() {
        this.setState({
            ...this.state,
            flag: !this.state.flag,
        });
    }

    render() {
        return (
            <div>
                <p>전화번호: {this.props.tell}</p>
                <button onClick={this.handleOpenEverything}>더 자세한 정보보기 </button>
                <div style={{display:this.state.flag?'block':'none'}}>
                    {this.props.information}
                </div>
            </div>
        );
    }
}

export default InformationArea;