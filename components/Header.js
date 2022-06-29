import React from 'react'
import Link from 'next/link'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  versionsContainer: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  button: {
    marginLeft: 16,
    cursor: 'pointer',
  },
}

const Header = ({ email, signOut }) => (
  <div style={styles.container}>
    <div style={styles.versionsContainer}>
      <span>TODO APP</span>
    </div>
    {email ? (
      <>
        <p>ユーザー： {email}</p>
        <button
          type="button"
          onClick={() => {
            signOut()
          }}
          style={styles.button}
        >
          ログアウト
        </button>
      </>
    ) : (
      <>
        <Link href="/auth">
          <a>
            <button type="button" style={styles.button}>
              ログイン
            </button>
          </a>
        </Link>
      </>
    )}
  </div>
)

export default Header
