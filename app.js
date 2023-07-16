// task 1
const fs = require('fs');

// 1) Create object 
const person = {
    fname: 'ahmed',
    lname: 'hossam',
    age: '20',
    city: 'alex'
};

// 2)  
const personJson = JSON.stringify(person);

// 3)  
fs.writeFileSync('data1.json', personJson);

// 4)  
const readData = fs.readFileSync('data1.json' );

// 5)  
const parsedData = JSON.parse(readData);


console.log(parsedData);

// 6) 
parsedData.fname = 'adel';
parsedData.lname = 'ahmed';
parsedData.age = '40';
parsedData.city = 'cairo';

// 7)  
const updatedPersonJson = JSON.stringify(parsedData);

// 8)  
fs.writeFileSync('data1.json', updatedPersonJson);

//task2
const yargs =require('yargs')
const data10 =require('./data10');

yargs.command(
    {
        command:'add',
        describe:'to add element',
        builder: {
            fname:{
                describe:'fname',
                demandOption:true,
                type:'string',
            },
            lname:{
                describe:'lname',
                demandOption:true,
                type:'string',
            },
            age:{
                describe:'age',
                demandOption:true,
                type:'string',
            },            
            id:{
                describe:'id',
                demandOption:true,
                type:'string',
            },
            city:{
                describe:'city',
                demandOption:true,
                type:'string',
            }
        },
        handler :(x)=>{
            data10.addPerson(x.id , x.fname ,x.lname , x.age , x.city);

        }

    },



)
yargs.command(    
    {
    command:'delete',
    describe:"delete items",
    handler :  (x)=>{
        data10.deleteData(x.id)

    }

})


yargs.command(    
    {
    command:'read',
    describe:"read items",
    builder : {
        id :{
            describe:"id describtion ",
            demandOption:true,
            type:'string'

        }
    },
    handler :  (x)=>{
        data10.readData(x.id)

    }

})

yargs.command(
    {
        command:"list",
        describe:'list',
        handler :()=>{
            data10.listData()

        }
    }
)

yargs.command(
    {
        command:"readAll",
        describe:'readAll',
        handler :()=>{
            data10.readAllData()

        }
    }
)
yargs.parse()
