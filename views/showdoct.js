async function info()
{
    console.log("Inside appoint")

    await axios.get("http://localhost:8000/user/docinfo")

    .then(res=>{
        console.log(res)
        
        let info = res.data
        showdoctoronscreen(info)
                })

    .catch(err=>{
        console.log(err)
                })
}


function showdoctoronscreen(info)
{
    // console.log(info[0]._id,info[0].name,info[0].speciality,info[0].timeslot)

    console.log("Happening")

    let lis = document.getElementById("docinfo")
    if(lis.innerHTML!=null){
        lis.innerHTML = null
    }
    let createone = document.createElement("h3")
    createone.style ="color:green"
    createone.innerHTML =`Cick on time slot for booking -  `
    lis.appendChild(createone)

    for(let i =0;i<info.length;i++)

    {
        

        let gotid = info[i]?._id
        console.log(gotid)
        let name =info[i]?.name
        let speciality = info[i]?.speciality
        let timeslot = info[i]?.timeslot

        let create = document.createElement("li")
        create.style = "padding:5mm;list-style-type:none;margin:2mm;width:50%;background:#ffffffba;border-radius:2px;border:none"
       
        let newele = document.createElement('li')
        newele.style ="list-style-type:none;"
        
        // newele.style ="border:1px solid black"

       
        
        for(let j=0;j<timeslot?.length;j++)

        {  

            let timing 

            let newbutton = document.createElement('button')
            newbutton.setAttribute("onclick",`sendinfo("${timeslot[j]}","${gotid}")`)
            newbutton.style = "color:orange;margin:0.5mm;border:none"
            
            // newbutton?.onclick(sendinfo(timeslot[j], gotid))
        
        newbutton.innerHTML= `${timeslot[j]}`

        newele.appendChild(newbutton)
            
            
            
        }
         console.log(newele)
       

        
        
        create.innerHTML = `<b style="color:indigo;">Name -</b> ${name} <br>  <b style="color:indigo;">Specialisation -</b> ${speciality} <b style="color:indigo;"><br>Times available -</b>` 
        create.appendChild(newele)


        lis.appendChild(create)
     



    }



}


async function sendinfo(time,docid)
{

    console.log(time,docid)

    let obj = {
        time:time,
        docid:docid
    }

    axios.post("http://localhost:8000/user/time",obj)

    .then(res=>{
        console.log(res)
        if(res.data.response==false){
            alert("Slot Not avialable ")
        }
        else{
            alert("Slot Booked")
        }
    })
    .catch(err=>{
        console.log(err)
    })

}