import { useState } from 'react';

import Button from './components/Button';
import FriendList from './components/FriendList';
import AddFriend from './components/forms/AddFriend';
import SplitTheBill from './components/forms/SplitTheBill';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleVisAddFriend = () => {
    setIsClicked(isClicked => !isClicked);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} />
        {isClicked && <AddFriend setFriends={setFriends} />}

        <Button onHandleClick={handleVisAddFriend}>
          {isClicked ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      <SplitTheBill />
    </div>
  );
};

export default App;
