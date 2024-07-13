import React from 'react'
import { useContext } from 'react'
import AlertContext from '../context/AlertContext'

export default function Alert() {
    const {alert} = useContext(AlertContext)

  return alert !== null && (
        <p className="flex items-start">
            {alert.type === 'error'&& (
                'ALERT'
            ) }
        </p>
    )
 
}
