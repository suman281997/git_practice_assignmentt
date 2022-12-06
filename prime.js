function checkPrime(num){
    for(let i=2;i<=num;i++)
   {
    	if(num%i==0)
	{
  	 count++;
    	}
    }
	if(count==2)
	{
	  return true;
	} 
	else
	{return false;
	}   
}
	
    let a=checkprime(13);
	console.log(a);
