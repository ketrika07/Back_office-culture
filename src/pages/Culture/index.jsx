    import React, { useState } from 'react';
    import '../styles.css';

    function NewPage() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nom: ${name}, Type: ${type}`);
    }

    return (
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={name}
                        placeholder='Nom..'
                        className='dashboard-content-input'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        value={type}
                        placeholder='Type..'
                        className='dashboard-content-input'
                        onChange={e => setType(e.target.value)}
                    />
                    <button type='submit' className='dashbord-header-btn'>Done</button>
                </form>
            </div>
        </div>
    )
    }

    export default NewPage;
