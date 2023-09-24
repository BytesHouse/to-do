import styles from '../styles/usersTable.module.css'
export const UsersTable = ({users}) => {
    console.log(users)
    // age, avatar, name, phone
    return <main>
        <div className={styles.wrapper}>
            <h1>Users</h1>
            <ul className={styles.userList}>
                {users.map(({age, avatar, name, phone})=>{return <li>
                    <div className={styles.userItem}>
                        <img src={avatar}/>
                        <p>User Name: {name}</p>
                        <p>User Age: {age}</p>
                        <p>User Phone: {phone}</p>
                    </div>
                </li>})}
            </ul>
        </div>
    </main>
}