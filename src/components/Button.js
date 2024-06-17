const Button = ({ onHandleClick: handleVisAddFriend, children }) => {
  return (
    <button className='button' onClick={handleVisAddFriend}>
      {children}
    </button>
  );
};

export default Button;
