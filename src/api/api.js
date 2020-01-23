import axios from "./axiosConfig";


export default {
    login: (email, password) => axios.post("/signin", {
        email: email,
        pass: password
    }),
    signup: (name, surname, email, password, accountNumber) => axios.post("/signup", {
        name: name,
        surname: surname,
        email: email,
        password: password,
        accountNumber: accountNumber
    }),
    getCurrentFlatmate: () => axios.get("/flatmate"),
    createFlat: (name, password, address) => axios.post("/flats", {
        name: name,
        address: address,
        password: password
    }),
    joinFlat: (name, password) => axios.put("/flats", {
        name: name,
        password: password
    }),
    getFlatInfo: () => axios.get("/flats", {validateStatus: (status) => status === 200}),

    getDuties: () => axios.get("/duties"),
    addDuty: (description, renewalTime) => axios.post("/duties", {
        description: description,
        renewalTime: renewalTime
    }),
    updateDuty: (dutyid, newRenewalTime) => axios.put(`/duties/${dutyid}`, {
        newRenewalTime: newRenewalTime
    }),

    deleteDuty: (id) => axios.delete(`/duties/${id}`),
    getMyDuties: () => axios.get("/myduties"),
    finishMyDuty: (dutyID) => axios.patch(`/duties/${dutyID}`),
    getPayments: () => axios.get("/payments"),
    addPayment: (sum, description) => axios.post("/payments", {
        sum: sum,
        description: description
    }),
    modifyPayment: (id, sum, description) => axios.patch(`/payments/${id}`, {
        sum: sum,
        description: description
    }),
    deletePayment: (id) => axios.delete(`/payments/${id}`)
}