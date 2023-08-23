import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value]);
    var myStyle = {};
    myStyle = {
        width: '30%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '1px solid #555',
        outline: 'none',
    }
    var myInput = {};
    myInput = {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        justifyContent:'center',
    }
    var myButton = {};
    myButton = {
        backgroundColor: '#04AA6D',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft:'10px',
        float:'initial',
}
return (
    <div style={myInput}>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter Room ID' style={myStyle}
        />
        <button onClick={handleJoinRoom} style={myButton}>Join</button>
    </div>
);
}
export default HomePage;