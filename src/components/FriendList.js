import Friend from './Friend';

import data from '../friends.json';

const FriendList = () => {
  const friends = data.initialFriends;

  return (
    <ul>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
