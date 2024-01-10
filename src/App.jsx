
import './App.css'
import { Profile } from "../src/components/Profile/Profile";
import userData from './data/userData.json'
import { FriendList } from './components/FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistoryBody } from './components/TransactionHistory/TransactionHistoryBody';
import transaction from './data/transactions.json'

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
