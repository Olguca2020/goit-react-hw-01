
import './App.css'
import { Profile } from "../src/components/Profile/Profile";
import userData from '../src/components/userData.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from '../src/components/friends.json';
import { TransactionHistoryBody } from './components/TransactionHistory/TransactionHistoryBody';
import transaction from '../src/components/transactions.json'

function App() {
  

  return (
    <>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistoryBody items={transaction}/>
    </>
  )
}

export default App
