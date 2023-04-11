
const func = j => {                                            
    console.log("Helloword " +j);
}

for(let i=1;i<5;i++)
{
  setTimeout(func,i*1000, i);    
}
