import React from 'react';
import Aoux from '../../../Hoc/Aoux';

const Tabblebuilderlayout = (props) =>(
    <Aoux>
        <main className = 'Tabblebuilder '>
            {props.children}

        </main>
    </Aoux>
)

export default Tabblebuilderlayout;
