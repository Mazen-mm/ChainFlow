

import UsersTable from '../components/organisms/UsersTable';
import useUsers from '../hooks/useUsers';
import UsersToolbar from '../components/organisms/UsersToolbar';
import AddUserModal from './../components/organisms/AddUserModal';

export default function UserManagementPage() {

  const usersState = useUsers();

  return <>
    {usersState.showCreateModal && (
      <AddUserModal {...usersState} />
    )}
    <UsersToolbar {...usersState} />
    <UsersTable {...usersState} />
  </>
}
