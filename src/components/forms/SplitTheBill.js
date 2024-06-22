import { useState } from 'react';

import Button from '../Button';

const SplitTheBill = ({ selectedFriend, setSelectedFriend, setFriends }) => {
  const [bill, setBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState('you');

  const friendExpense = bill - userExpense;

  const handleSubmit = e => {
    e.preventDefault();

    if (!bill || !userExpense) return;

    const value = whoIsPaying === 'you' ? friendExpense : -userExpense;

    setFriends(friends =>
      friends.map(f =>
        f.id === selectedFriend?.id ? { ...f, balance: f.balance + value } : f
      )
    );
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value </label>
      <input
        type='text'
        value={bill}
        onChange={e => Number(setBill(e.target.value))}
      />

      <label>🧑 Your expense </label>
      <input
        type='text'
        value={userExpense}
        onChange={e =>
          Number(e.target.value) > bill
            ? userExpense
            : setUserExpense(Number(e.target.value))
        }
      />

      <label>👯‍♀️ {selectedFriend.name}'s expense </label>
      <input type='text' disabled value={userExpense && friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.currentTarget.value)}
      >
        <option value='you'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split the bill</Button>
    </form>
  );
};

export default SplitTheBill;
