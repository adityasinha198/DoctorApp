const mongoose = require('mongoose')
const usermod = require('../models/usermodels')
const usermodel = mongoose.model('User')
const time = require('../models/timemodel')
const timemodel = mongoose.model("Time")

class usercontroller {

    async doctorinfo(req){

        console.log("Inside info")
        try{

            let value = await usermodel.find()
            // console.log(value)

            return value

            }

        catch(err){
            console.log(err)
        }

    }

    
    
    async timing(req){
        console.log("Lets do")
        console.log(req.body)
       
        try{
            const docid = req.body.docid
            const time = req.body.time

            let time1 = "1:00pm - 2:00pm"
            let time2 = "2:00pm - 3:00pm"
            let time3 = "3:00pm - 4:00pm"

            console.log(docid,time)
          
            // console.log(value)

            if(time==time1){

                const info = await timemodel.findOne({docid:docid})
                if(info.time1==true){

                    return {
                        response:false
                    }
                }
                else{

                const value = await timemodel.updateOne({docid:docid},{time1:true})
                console.log(value)
               
                console.log("time1")
                return {response:true}
                }
            }
            else if(time==time2){

                const info = await timemodel.findOne({docid:docid})

                if(info.time2==true){

                    return {response:false}
                }
                else{

                const value = await timemodel.updateOne({docid:docid},{time2:true})
                console.log(value)
               
                console.log("time2")
                return {response:true}
                }
               
            }
            else if(time==time3){


                const info = await timemodel.findOne({docid:docid})

                if(info.time3==true){

                    return {response:false}
                }
                else{

                const value = await timemodel.updateOne({docid:docid},{time3:true})
                console.log(value)
               
                console.log("time3")
                return {response:true}
                }
               


                
                
            }
            else{
                console.log("Not found")
            }


            
    
            }

        catch(err){
            console.log(err)
        }

    }

}

module.exports = new usercontroller()