import {React, useState, useContext} from 'react'
import {UserAuthContext} from '../contexts/user.auth.context'
import { Slider } from '@mantine/core';

function LogEmotionsModal(props) {
    const [sadness, setSadness] = useState('')
    const [anxiety, setAnxiety] = useState('')
    const [anger, setAnger] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { user } = useContext(UserAuthContext)

    if (!props.showModal) {
        return null
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            const response = await fetch('http://localhost:5005/emotions', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({sadness, anxiety, anger, user})
              })

            const parsed = await response.json();
            if (response.status === 201) {
                props.setShowModal(false)
            } else {
              setErrorMessage(parsed.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
        
    }
  return (
    <div>
        <h2>Log your emotions</h2>
        <div className='log-emotions-body'>
            <form onSubmit={handleSubmit}>
{/*             <Slider 
                value={sadness}
                min={0}
                max={10}
                default={5}
                step={1}
                onChangeEnd={setSadness}
                marks={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' },
                    { value: 4, label: '4' },
                    { value: 5, label: '5' },
                    { value: 6, label: '6' },
                    { value: 7, label: '7' },
                    { value: 8, label: '8' },
                    { value: 9, label: '9' },
                    { value: 10, label: '10' },
                ]}
            /> */}
            {/* <Slider 
                value={anxiety}
                min={0}
                max={10}
                default={5}
                step={1}
                onChangeEnd={setAnxiety}
                marks={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' },
                    { value: 4, label: '4' },
                    { value: 5, label: '5' },
                    { value: 6, label: '6' },
                    { value: 7, label: '7' },
                    { value: 8, label: '8' },
                    { value: 9, label: '9' },
                    { value: 10, label: '10' },
                ]}
            /> */}
            {/* <Slider 
                value={anger}
                min={0}
                max={10}
                default={5}
                step={1}
                onChangeEnd={setAnger}
                marks={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 3, label: '3' },
                    { value: 4, label: '4' },
                    { value: 5, label: '5' },
                    { value: 6, label: '6' },
                    { value: 7, label: '7' },
                    { value: 8, label: '8' },
                    { value: 9, label: '9' },
                    { value: 10, label: '10' },
                ]}
            /> */}
            <label  className="block mb-2 text-sm font-medium text-gray-900">Sadness</label>
            <input 
                id="minmax-range" 
                type="range" 
                min="0" 
                max="10" 
                value={sadness} 
                onChange={event => setSadness(event.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <label className="block mb-2 text-sm font-medium text-gray-900">Anxiety</label>
            <input 
                id="minmax-range" 
                type="range" 
                min="0" 
                max="10" 
                value={anxiety} 
                onChange={event => setAnxiety(event.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <label className="block mb-2 text-sm font-medium text-gray-900">Anger</label>
            <input 
                id="minmax-range" 
                type="range" 
                min="0" 
                max="10" 
                value={anger}
                onChange={event => setAnger(event.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <button type='submit'>Submit</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    </div>
  )
}

export default LogEmotionsModal