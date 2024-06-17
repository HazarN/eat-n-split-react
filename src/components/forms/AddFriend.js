import { useState } from 'react';
import Button from '../Button';

const AddFriend = ({ setFriends }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !image) return;

    // Capitalize the name
    const str = name.toLowerCase();
    const capName = str.charAt(0).toUpperCase() + str.slice(1);

    const id = crypto.randomUUID();
    const friend = {
      id: id,
      name: capName,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    setFriends(friends => [...friends, friend]);

    setName('');
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👯‍♀️ Name</label>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />

      <label>🖼️ Image URL</label>
      <input
        type='text'
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriend;
