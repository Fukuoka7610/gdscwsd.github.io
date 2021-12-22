/*
react-router-dom v6 から、講義中のバージョンとは以下の箇所が異なる
1. "Router"→"BrowserRouter"
2. "Switch"→"Routes"
3. "exact path"→"path"
4. "component={ コンポーネント名 }"→"element={ < コンポーネント名 /> }"
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { MembersPage } from './frontend-page/MembersPage'
import React from 'react'
import { TeamPage } from './frontend-page/TeamPage'
import { BackendPage, FinancePage, MarketingPage, OutreachPage, ProjectPage } from './frontend-page/team-page/index'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/project" element={<ProjectPage />} />
        <Route path="/team/frontend" element={<TeamPage />} />
        <Route path="/team/backend" element={<BackendPage />} />
        <Route path="/team/education" element={<TeamPage />} />
        <Route path="/team/finance" element={<FinancePage />} />
        <Route path="/team/marketing" element={<MarketingPage />} />
        <Route path="/team/outreach" element={<OutreachPage />} />
        <Route path="/team/event" element={<TeamPage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
