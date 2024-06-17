import Friend from './Friend';

const FriendList = ({ onSelection, friends, selectedFriend }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
