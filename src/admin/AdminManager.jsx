import React from 'react';
import UserInfo from './UserInfo';

const AdminManager = ({ users, setUsers }) => {
  const deleteUserAction = (userId, itemName) => {
    //edit and set users list
    setUsers((previousUsers) => {
      const newUsersList = previousUsers.map((previousUser) => {
        if (previousUser.id === userId) {
          //we are at selected user
          //create new actions array for the user , without deleted action
          const { actions } = previousUser;
          const newActions = actions.filter(
            (action) => action.name !== itemName
          );
          return {
            ...previousUser,
            actions: newActions,
          };
        } else {
          //its not the wanted user to be edited, so return the user without doing anything
          return previousUser;
        }
      });
      return newUsersList;
    });
  };
  return (
    <div>
      {users &&
        users.map((user, i) => {
          return (
            <UserInfo user={user} key={i} deleteUserAction={deleteUserAction} />
          );
        })}
    </div>
  );
};

export default AdminManager;
