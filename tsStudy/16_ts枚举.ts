export{}

enum Status{
  success=200,
  error=500
}
let code:string|number = 200
if(code===Status.success){
    console.log('ok');
    
}else if(code===Status.error){
    console.log('fail');
    
}