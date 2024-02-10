import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../Layout'
import { Clock } from '../Clock'
import { Crono } from '../Crono'
export const Nav = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='clock' element={<Clock />}/>
                <Route path='crono' element={<Crono />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
