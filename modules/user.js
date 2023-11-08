let user = localStorage.getItem('user')

user = user ? JSON.parse(user) : null

export { user }

// let wallet = localStorage.getItem('wallet')

// wallet = wallet ? JSON.parse(wallet) : null

// export { wallet }