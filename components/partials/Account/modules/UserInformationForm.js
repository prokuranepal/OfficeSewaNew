import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../../../elements/CustomButton';
const UserInformationForm = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ display: 'flex', direction: 'column', justifyContent: 'flex-end' }}>
                <CustomButton style={{ marginRight: '20px', width: '180px' }} title={'Cancel'} onClick={props.close} primary={false} />
                <CustomButton style={{ width: '180px' }} title={'Save'} primary={true} onClick={() => {}}/>

            </div>
        </div>
    )
};

const useStyles = makeStyles({

});

export default UserInformationForm;