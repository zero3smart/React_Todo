import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

class EditLayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                layerName: this.props.layerName,
                ft: this.props.ft
            }
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onAddItem() {
        if (this.props.method === "add") {
            this.props.addItem(this.state.fields);
        } else {
            this.props.editItem(this.props.index, this.state.fields);
            this.props.update();
        }

        this.props.toggle();
    }

    onChange(e) {
        let fields = {...this.state.fields};
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>
                        {this.props.method === "add" ? 'New Item' : 'Update'}
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            type="text"
                            name="layerName"
                            id="layerName"
                            value={this.state.fields.layerName}
                            onChange={this.onChange}
                            placeholder="" />
                        <Input
                            type="text"
                            name="ft"
                            id="ft"
                            onChange={this.onChange}
                            value={this.state.fields.ft}
                            placeholder="" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onAddItem}>
                            {this.props.method === "add" ? 'Add Item' : 'Update'}
                        </Button>
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

EditLayer.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    addItem: PropTypes.func,
    editItem: PropTypes.func,
    layerName: PropTypes.string.isRequired,
    ft: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    index: PropTypes.number,
    update: PropTypes.func
}

EditLayer.defaultProps = {
    layerName: '01 Layer',
    ft: '112, 0ft.'
}

export default EditLayer;