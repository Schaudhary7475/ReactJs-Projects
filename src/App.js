import Header from './components/Header';
import TextContainer from './components/TextContainer';
import React, { useState } from 'react'

function App() {
    const [mode, setMode] = useState('light')

    const switchMode = () =>{
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#0d0d25';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = '#ffffff';
        }

    }
    
    return (
        <>
            <Header mode={mode} switchMode={switchMode} />
            <TextContainer mode={mode} />
        </>
    );
}
export default App;
