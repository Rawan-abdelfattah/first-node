const fs=require('fs');

const addPerson = (id , fname , lname , age , city)=>{
    const allData=loadData();
    const duplicatedData = allData.filter((obj)=>{
                return obj.id == id

       } )

       if(duplicatedData.length == 0){
        
    allData.push(

        {
            id  ,
            fname ,
            lname,
            age ,
            city
        }
    )
    saveAllData(allData);
       }else{
        console.log("DUPLICATED DATA !!");
       }


}
////////////////////////////////////////////////////////////////
const loadData = ()=>{


    try{    
        const dataJson =fs.readFileSync('data10.json').toString();
        return JSON.parse(dataJson);

    }catch{
        return []
    }
}
////////////////////////////////////////////////////////////////

const saveAllData =(allData)=>{
    let saveAllDataJson=JSON.stringify(allData);
    fs.writeFileSync('data10.json' , saveAllDataJson)

}
////////////////////////////////////////////////////////////////

const deleteData= (id)=>{
    const allData = loadData()

    const dataToKeep = allData.filter((obj)=>{
        return obj.id !=id
    })

    console.log(dataToKeep)
    saveAllData(dataToKeep)

}

////////////////////////////////////////////////////////////////

const readData = (id)=>{
    const allData=loadData()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id
    })
    console.log(itemNeeded);

}

const readAllData = ()=>{
    const allData=loadData()
    console.log(allData)

}

const listData =()=>{
    const allData=loadData()
    allData.forEach((obj)=>{
        console.log(`fname  ${obj.fname} lname ${obj.lname} city ${obj.city}`)
    })
}


module.exports={
    addPerson,
    deleteData,
    readData ,
    listData,
    readAllData
}