import { PopupButton  } from '@typeform/embed-react'
import React from 'react'

function Typeform({id = 'moe6aa'}) {

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: 10,
        border: 'none',
        background: 'navy',
        color: 'white',
        fontSize: 16,
        cursor: 'pointer',
      }
    return (
        <div>
            {/* <div data-tf-live="01HM9QWFQQBY51BQV305A5Q29T"></div>
        <script src="//embed.typeform.com/next/embed.js"></script> */}
            {/* <Widget id='M2jMt3Dy' style={{ width: "100%" }} className='my-form h-lvh' /> */}
            <PopupButton id={id} style={buttonStyle} size={66} medium="demo-test" hidden={{foo: 'foo value', bar: 'bar value'}} />
        </div>
    )
}

export default Typeform