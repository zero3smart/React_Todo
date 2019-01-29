import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import EditLayer from './EditLayer';
import { editItemAction, deleteItemAction } from '../../../actions';

class Layer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    toggle = () => {
        this.setState({ selected: !this.state.selected });
    }

    onEdit = () => {
        this.setState({ modal: !this.state.modal });
    }

    onDelete = () => {
        if (window.confirm('Do you really want to remove this item?')) {
            this.props.deleteItem(this.props.index);
            this.props.update();
        }
    }

    render() {
        return (
            <div className="layer-item">
                <div className="toggle-icon">
                    <FontAwesomeIcon className={`${this.state.selected ? 'fa-my-circle-selected' : 'fa-my-circle'}`} icon={faCircle} onClick={this.toggle} />
                </div>
                <div className="layer-text">
                    {this.props.layer.layer} <b>({this.props.layer.ft})</b>
                </div>
                <div className="button">
                    <FontAwesomeIcon className="fa-my-edit" icon={faPen} onClick={this.onEdit} />
                    <FontAwesomeIcon className="fa-my-delete" icon={faTrash} onClick={this.onDelete} />
                </div>
                {this.state.modal && <EditLayer
                                        modal={this.state.modal}
                                        layerName={this.props.layer.layer}
                                        ft={this.props.layer.ft}
                                        editItem={this.props.editItem}
                                        method="edit"
                                        index={this.props.index}
                                        update={this.props.update}
                                        toggle={this.onEdit} />}
            </div>
        );
    }
}

Layer.propTypes = {
    layer: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    update: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    editItem: (index, fields) => dispatch(editItemAction({ index, fields })),
    deleteItem: (index) => dispatch(deleteItemAction(index))
})

export default connect(null, mapDispatchToProps)(Layer);