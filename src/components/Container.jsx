import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import './Container.css'

const Container = () => {
    const data = useSelector((state) => state.data.currentData)

    return (
        <div className='Container'>
            {data && data?.map(item => (
                <Card card={item} />
            ))}
        </div>
    )
}

export default Container