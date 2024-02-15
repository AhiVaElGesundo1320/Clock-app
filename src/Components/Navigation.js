import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Main } from './Main'
import { Crono } from './Crono'
import { Clock } from './Clock'


export const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index path='main' element={<Main />}/>
                    <Route path='clock' element={<Clock />}/>
                    <Route path='crono' element={<Crono />}/>
                   
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
