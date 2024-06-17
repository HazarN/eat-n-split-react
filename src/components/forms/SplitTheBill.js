import Button from '../Button';

const SplitTheBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with FRIEND_NAME_HERE</h2>

      <label>💵 Bill value </label>
      <input type='text' />

      <label>🧑 Your expense </label>
      <input type='text' />

      <label>👯‍♀️ FRIEND_NAME's expense </label>
      <input type='text' disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value='you'>You</option>
        <option value='friend'>FRIEND_NAME</option>
      </select>

      <Button>Split the bill</Button>
    </form>
  );
};

export default SplitTheBill;
