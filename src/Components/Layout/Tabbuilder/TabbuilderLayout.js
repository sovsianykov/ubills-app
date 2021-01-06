import React from 'react';
import Aoux from '../../../Hoc/Aoux';

const Tabblebuilderlayout = (props) =>(
    <Aoux>
        <main className = 'Xmlbuilder '>
            {props.children}

        </main>
    </Aoux>
)

export default Tabblebuilderlayout;
