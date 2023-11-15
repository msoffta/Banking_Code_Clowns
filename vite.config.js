// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wallets: resolve(__dirname, 'pages/wallets/index.html'),
        transactions: resolve(__dirname, 'pages/transactions/index.html'),
        signup: resolve(__dirname, 'pages/signup/index.html'),
        signin: resolve(__dirname, 'pages/signin/index.html'),
        card_page: resolve(__dirname, 'pages/card_page/index.html'),
        addtransaction: resolve(__dirname, 'pages/addtransaction/index.html'),
        addwallet: resolve(__dirname, 'pages/addwallet/index.html'),
      },
    },
  },
})