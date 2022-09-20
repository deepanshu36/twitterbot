const {TwitterApi} = require("twitter-api-v2")

const client= new TwitterApi({
    appKey:"OCkEMbDw29wTbTmEdVeH4UHQA",
    appSecret:"scUnD9R4i2PJ30Z8E72EI50mF5GYu2pR4mHGwvkjXKaTB2PdVw",
    accessToken:"2460369098-QVb08nIcNljte3C0OVSYMsYtXV7UC2jcKK3AWWf",
    accessSecret:"Emnd1uWV6zY9LQBUv4gVuhsoRLi4H7Ldhp6Oap9opijqB"
})

// const user = await readOnlyClient.v2.userByUsername('deepanshu gupta');
const rwClient=client.readWrite
module.exports=rwClient

// await rwClient.v1.tweet("twitter autogenereated tweet ")



