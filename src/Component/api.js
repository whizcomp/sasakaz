import axios from "axios";
const endpoint = `https://sasakazi.kipkoechdev.com`
const createUser = (data) => {
    const {
        firstName,
        lastName,
        idNumber
    } = data
    return axios.post(`${endpoint}/api/bank/create_acc`, {
        first_name: firstName,
        last_name: lastName,
        id_no: idNumber
    });
}

const createAccount = (userId) => {
    return axios.post(`${endpoint}/api/bank/new_acc`, {
        customer_id: userId
    })
}
// /api/bank/new_card

const createCreditCard = (accountNo, idNumber) => {

    return axios.post(`${endpoint}/api/bank/new_card`, {
        customer_id: idNumber,
        account_no: accountNo
    })
}
const getAccountDetails = (id) => {
    return axios.get(`${endpoint}/api/bank/account/${id}`)
}
const cardDetails = (acc_no) => {
    return axios.get(`${endpoint}/api/bank/card/${acc_no} `)
}
const getBalance = (acc_no) => {
    return axios.get(`${endpoint}/api/trans/balance/${acc_no}`)
}
const getAccounts = (user_id) => {
    return axios.get(`${endpoint}/api/bank/account/${user_id}`)
}
const withdrawal = (account_no, amount) => {
    return axios.put(`${endpoint}/api/trans/withdraw`, {
        account_no,
        amount
    })
}
const depositing = (account_no, amount) => {
    return axios.put(`${endpoint}/api/trans/deposit`, {
        account_no,
        amount
    })
}
export {
    createUser,
    createAccount,
    getAccountDetails,
    createCreditCard,
    cardDetails,
    getBalance,
    getAccounts,
    withdrawal,
    depositing
}