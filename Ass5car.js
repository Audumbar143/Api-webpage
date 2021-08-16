let form=document.querySelector('#Car');
let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/getcars.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ID = document.querySelector('#ID').value;
    let Name = document.querySelector('#Name').value;
    let Status= document.querySelector('#Status').value;
    let Type= document.querySelector('#Type').value;

    let data ={
        "ID":ID,
        "Name":Name,
        "Status":Status,
        "Type":Type,
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('Car created');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(params); 
});
