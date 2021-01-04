import React from 'react';
import Aoux from '../../Hoc/Aoux';

const Layout = (props) =>(
    <Aoux>
        <main className = 'Content '>
            {props.children}

        </main>
    </Aoux>
)

export default Layout;
