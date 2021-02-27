import React, { useState } from 'react';

const UserInfo = ({ user, i, deleteUserAction }) => {
  const { id, name, actions } = user;
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div key={i} style={{ border: '1px solid black', padding: '30px' }}>
      <span style={{ margin: '10px' }}>{id}</span>
      <span style={{ margin: '10px' }}>{name}</span>
      <button onClick={toggleShow}>{`Show ${isShow ? 'Less' : 'More'}`}</button>
      {isShow &&
        actions.map((item, i) => {
          const { name, value } = item;
          return (
            <ul style={{marginLeft:'30px'}}key={i}>
              <li>
                {`${name} ${value}$`}{' '}
                <button
                  onClick={() => {
                    deleteUserAction(id, name);
                  }}
                >
                  X
                </button>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default UserInfo;
