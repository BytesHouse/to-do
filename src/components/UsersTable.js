import styles from '../styles/usersTable.module.css'
export const UsersTable = ({users}) => {
    console.log(users)
    return <main>
        <div>
            <h1>Users</h1>
            <ul className={styles.userList}>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    </main>
}