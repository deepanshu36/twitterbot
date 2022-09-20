const rwClient=require('./twitter')

const tweet=async()=>{

    try 
    {
        for(let a=0;a<1000;a++)
        {
        const rand = Math.random().toString().substr(2, 8);
      await rwClient.v2.tweet(rand)
        console.log('tweted')
        }
        } 
    catch (error)
    {
        console.log(error)
    }
}

tweet()
