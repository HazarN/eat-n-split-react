import { useState } from 'react';

import Button from './components/Button';
import FriendList from './components/FriendList';
import AddFriend from './components/forms/AddFriend';
import SplitTheBill from './components/forms/SplitTheBill';

const App = () => {
  const [friends, setFriends] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelection = friend => {
    setSelectedFriend(f => (f?.id === friend.id ? null : friend));
    setIsClicked(false);
  };
  const handleVisAddFriend = () => setIsClicked(isClicked => !isClicked);

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          friends={friends}
        />
        {isClicked && <AddFriend setFriends={setFriends} />}

        <Button onClick={handleVisAddFriend}>
          {isClicked ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      {selectedFriend && (
        <SplitTheBill
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setFriends={setFriends}
        />
      )}
    </div>
  );
};

export default App;
