import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Nanang'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title='Selamat Datang'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Pergunakan uang anda dengan bijak'/>
        
        <TotalBalanceBox 
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={100000.23}/>
        </header>
      </div>
    </section>
  )
}

export default Home
