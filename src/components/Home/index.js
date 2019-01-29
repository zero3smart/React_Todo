import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.scss";
import { connect } from 'react-redux';
import { getLayerAction, addItemAction } from '../../actions';
import Layer from './Layer';
import { Button } from 'reactstrap';
import EditLayer from "./Layer/EditLayer";

const LayerContainer = ({ layers, update }) => {
    return layers.map((layer, i) => (
        <Layer index={i} layer={layer} update={update} key={i} />
    ));
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.update = this.update.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        this.props.getLayer();
    }

    update() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="home-container">
                <div className="layer-list">
                    <LayerContainer
                        layers={this.props.layers}
                        update={this.update}
                        toggle={this.toggle} />
                    <Button color="primary" onClick={this.toggle}>Add Item</Button>
                    {this.state.modal && <EditLayer
                                            method="add"
                                            modal={this.state.modal}
                                            addItem={this.props.addItem}
                                            toggle={this.toggle} />}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    getLayer: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    layers: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    layers: state.layer.layers
});

const mapDispatchToProps = dispatch => ({
    getLayer: () => dispatch(getLayerAction()),
    addItem: (item) => dispatch(addItemAction(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);