import Button from './components/Button';
import FriendList from './components/FriendList';
import AddFriend from './components/forms/AddFriend';
import SplitTheBill from './components/forms/SplitTheBill';

const App = () => {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        <AddFriend />
        <Button>Add friend</Button>
      </div>

      <SplitTheBill />
    </div>
  );
};

export default App;
