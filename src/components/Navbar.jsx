import React, { useEffect, useState } from 'react'
import './Navbar.css'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useDispatch } from 'react-redux';
import  { fetchingSuccess } from '../redux/dataRedux'

const Navbar = () => {

  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const [fullData, setFullData] = useState()

  const getData = () => {
    fetch(`/youtube/v3/search?part=snippet&q=${searchValue}&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM`, { method: 'GET' })
      .then(response => {
        return response.json()
      }).then(data => {
        setFullData(data.items)
      }).catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    console.log('entered');
    if (searchValue.length > 1) {
      getData()
    } else {
      setFullData()
    }
  }, [searchValue])
  useEffect(() => {
    dispatch(fetchingSuccess(fullData))
  }, [fullData])

  return (
    <div className='Main'>
      <button className='Logo'><AllInclusiveIcon /></button>
      <div className='Search'>
        <input
          className='InputValue'
          type='text'
          placeholder='  Search..'
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
    </div>
  )
}

export default Navbar