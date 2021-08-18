import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import AddressTable from '../../Shipping/modules/AddressTable';
import CustomButton from '../../../elements/CustomButton';
import LinkButton from '../../../elements/LinkButton';
const AddressTableContainer = (props) => {
    const classes = useStyles();
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addressType, setAddressType] = useState(null);
    const selectRow = (row) => {
        setSelectedAddress(row);
    }

    const setType = (type) => {
        setAddressType(type)
    }

    const close = () => {
        setAddressType(null);
        props.close();
    }

    const save = () => {
        console.log(selectedAddress)
        props.close();
    }

    return (
        <div>
            <div className={classes.row}>
                <LinkButton title={'Add Address'} onClick={props.addAddress} style={{marginRight: '20px'}}/>
                <LinkButton title={'Set Shipping Address'} style={{marginRight: '20px'}} onClick={() => setType('SHIPPING')} />
                <LinkButton title={'Set Billing Address'} style={{marginRight: '20px'}} onClick={() => setType('BILLING')} />
            </div>
            <AddressTable type={addressType} selectRow={selectRow} editAddress={props.editAddress} />
            {addressType === null ? null : <div className={classes.buttonContainer}>
                <CustomButton style={{ marginRight: '20px', width: '180px' }} title={'Cancel'} primary={true} onClick={close} />
                <CustomButton style={{ width: '180px' }} title={'Save'} primary={true} onClick={save} />
            </div>}
        </div>
    )
};

const useStyles = makeStyles({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});

export default AddressTableContainer;