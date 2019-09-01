import React from 'react';
import { connect } from 'react-redux';
import { setOption } from '../actions/option';

class InputSection extends React.Component {

    state = { selected: undefined }
    handleOnChange = (e) => {
        const index = e.target.options.selectedIndex;
        const option = e.target.options[index].value;
        if (option) {
            const splitOption = option.split("/");
            localStorage.setItem('option', option);
            this.props.setOption(splitOption);
        }

    }

    componentDidMount() {
        if (!!localStorage.getItem('option')) {
            const splitOption = localStorage.getItem('option').split("/");
            this.props.setOption(splitOption);
            
        }
    }

    render() {
        return (
            <aside>
                <h3>Input: </h3>
                <select value={!!this.props.getOption? this.props.getOption.join('/') : undefined} className="select" onChange={this.handleOnChange}>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                    <option value="4L">4L</option>
                    <option value="XL/2L">XL/2L</option>
                    <option value="XL/L/2SM">XL/L/2SM</option>
                </select>
            </aside>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setOption: (option) => dispatch(setOption(option))
});

const mapStateToProps = (state) => ({
    getOption: state.option.text
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSection);