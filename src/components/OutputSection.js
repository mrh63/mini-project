import React from 'react';
import { connect } from 'react-redux';
import Slot from './Slot';

class OutputSection extends React.Component {

    render() {
        let count = -1;
        return (
            <section>
                <h3>Output: </h3>
                <div className="slots">
                    {
                        this.props.slots.map((slot) => {
                            count = count + 1;
                            return isNaN(slot[0]) ? <Slot key={slot} num="0" text={slot} count={count}/> :
                                <Slot key={slot} num={slot[0]} text={slot.substring(1)} count={count} />;
                        })
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    slots: state.option.text
});

export default connect(mapStateToProps)(OutputSection);