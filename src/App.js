
import React, { useState, useEffect } from 'react'
import service from './services/services'
import './index.css'
// Component to notify users about their progress
const Notification = ({ message }) => {
    if (message === null)
        return null
    else
    {
        return (
            <div>
                {message}
            </div>
        )
    }
}
// Form componenet for phone number and access code input
const Form = (props) => {
    // ...
    return(
        <form onSubmit ={!props.isDisabled ? props.createCode : props.verify}>
            <div>
                Phone Number: <input value={props.phoneNum} onChange={props.handlePhoneChange} disabled={props.isDisabled}/>
            </div>
            <div>
                Access Code: <input value={props.accessCode} onChange={props.handleCodeChange} disabled={!props.isDisabled} />
            </div>
            <div>
                <button type="submit"> Submit </button>
            </div>
        </form>
    )
}
const App = () => {
    const [message, setMessage ] = useState(null)
    const [phoneNum, setPhoneNum ] = useState('')
    const [accessCode, setCode ] = useState('')
    const [isDisabled, setDisabled] = useState(false)
    const [isVerified, setVerified] = useState(false)
    const state = {
        regexp : /^[0-9\b]+$/
    }
    // Create access code function
    const createCode = (event) => {
        event.preventDefault()
        // Validate phone number input
        if (!phoneNum || (phoneNum && phoneNum.length != 10))
        {
            setMessage('Your phone number needs to be 10-digit. Please try again')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
            return
        }
        setDisabled(true) // Enable the access code input field and disable the phone number input field
        const user = {
            phoneNumber: phoneNum
        }
        service.createCode(user).then(response => {
            console.log(response) 
            setMessage(response)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
            setCode('')
        }
        ).catch(error => {
            console.log('error')
            console.log(error.response.data)
            setMessage(error.response.data)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        })
    }
    // Validate Access Code function
    const verify = (event) => {
        event.preventDefault()
        const user = {
            Phone: phoneNum,
            Code: accessCode
        }
        // Validate access code input
        if (!accessCode || (accessCode && accessCode.length != 6))
        {
            setMessage('Your access code needs to be 6-digit. Please try again.')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
            return
        }
        service.validateCode(user).then(response => 
        {
            console.log(response)
            // access code is not correct
            if (response.includes('not correct'))
            {
                setMessage(response)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            }
            // access code is correct
            else
            {
                setPhoneNum('')
                setCode('')
                setDisabled(false)
                setVerified(true)
            }
        }).catch(error => {
            console.log('error')
            console.log(error.response.data)
            setMessage(error.response.data)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        })
    }
    // form input handling functions
    const handlePhoneChange = (event) => {
        let phone = event.target.value
        if (phone === '' || state.regexp.test(phone)) {
            setPhoneNum(event.target.value)
        }
    }
    const handleCodeChange = (event) => {
        let code = event.target.value
        if (code === '' || state.regexp.test(code)) {
            setCode(event.target.value)
        }
    }
    if (!isVerified)
        return (
            <div>
                <h2>Please enter your 10-digit phone number and submit</h2>
                <Notification message={message} />
                <Form createCode = {createCode} verify = {verify} phoneNum = {phoneNum} handlePhoneChange={handlePhoneChange} accessCode= {accessCode} handleCodeChange = {handleCodeChange} isDisabled = {isDisabled}/>
            </div>
        )
    else
        return (
            <div>
                <h2> Your Phone Number is Verified </h2>
                <button onClick={() => setVerified(false)}> Back </button>
            </div>
        )
}

export default App