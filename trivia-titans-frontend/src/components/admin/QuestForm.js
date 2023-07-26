import { useState } from 'react';
import { Button } from '@mui/material'
import SubmitForm from './SubmitForm';

const QuestForm = () => {
    const [showForm, setShowForm] = useState(false);

    const onHandleClick = () => {
        setShowForm(true);
    }

    return (
        <div style={{ display: 'block', textAlign: 'center', padding: '20px' }}>
            <div>
                {
                    showForm?
                    (
                        <SubmitForm></SubmitForm>
                    ):null
                }
            </div>
            <br></br>
            <div>
                <Button onClick={onHandleClick}>
                    Create Question
                </Button>
            </div>
        </div>
    );

}

export default QuestForm;