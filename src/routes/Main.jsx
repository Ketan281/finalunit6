import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import  Home  from '../components/Home'
import { MystoryBooks } from '../components/MystoryBooks'
import { MystryDetail } from '../components/MystryDetail'
import  HistoryBooks  from '../components/HistoryBooks'
import { HistoryDetail } from '../components/HistoryDetail'
import { MythologyBooks } from '../components/MythologyBooks'
import { MythologyDetail } from '../components/MythologyDetail'
import { TechnologyBooks } from '../components/TechnologyBooks'
import { TechnologyDetail } from '../components/TechnologyDetail'


export const Main = () => {
  return (
    <div>
        <Navbar />
			<Routes>
				
                <Route path="/" element={<Home />}></Route>
                <Route path="/mysteryBooks" element={<MystoryBooks />}></Route>
                <Route path="/technologyBooks" element={<TechnologyBooks />}></Route>
                <Route path="/historyBoooks/:resId" element={<HistoryDetail/>}></Route>
				<Route path="/mystorybooks/:resId" element={<MystryDetail/>}></Route>
				<Route path="/technologybooks/:resId" element={<TechnologyDetail/>}></Route>
                <Route path="/mythologyBooks" element={<MythologyBooks />}></Route>
				<Route path="/historyBooks" element={<HistoryBooks />}></Route>
			    <Route path="/mythologybooks/:resId" element={<MythologyDetail/>}></Route>
			</Routes>
    </div>
  )
}