export function UserPreview({
  id,
  username,
  role,
  password,
  registrationDate,
  lastLoginDate,
}) {
  return (
    <div className="user-preview">
      <div className="user-info">
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>Registration Date: {registrationDate}</p>
        <p>Last Login Date: {lastLoginDate}</p>
        <p>Role: {role}</p>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  )
}
