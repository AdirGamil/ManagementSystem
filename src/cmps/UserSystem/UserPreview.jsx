export function UserPreview({ username, role }) {
  return (
    <div className="user-preview">
      <div className="user-info">
        <p>Username: {username}</p>
        <p>Role: {role}</p>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  )
}
