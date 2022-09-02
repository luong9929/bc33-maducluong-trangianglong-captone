let postUser= (e) =>{
    e.preventDefault();
    let user = new infoUser() ;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#pass').value;
    user.name = document.querySelector('#name').value;
    user.gender = document.querySelectorAll('.checkGender').value
    user.phone = document.querySelector('#phone').value;
    let confirmpassword = document.querySelector('#pass-2').value
    let valid = true ;
    valid &=   kiemtrarong( user.password,'#tbPassword' , 'password')&kiemtrarong(user.name,'.tbName' , 'Name');
    valid &= kiemtraemail(user.email,'#tbEmail' , 'Email')&kiemtrarong( confirmpassword,'.tbpasswordConfirm' , 'Password Confirm');
    if(kiemtrarong(user.name,'.tbName' , 'Name ')){
        valid &= kiemtrakytu(user.name,'.tbName' , 'Name')
    };
    if(kiemtrarong( user.password,'#tbPassword' , 'password')){
        valid &= kiemtramatkhau(user.password,'#tbPassword' , 'password')
    };
    if(kiemtrarong( user.phone,'.tbPhone' , ' Phone')){
        valid &= kiemtraso(user.phone,'.tbPhone' , 'Phone')
    };
    valid &= nhaplaimatkhau ('#pass','#pass-2','.tbpasswordConfirm')
      
        
    
    if (!valid) {
        return;
      }
    var promise = axios({
        url: " https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user, 
      });
      promise.then(function (result) {
        console.log(result);
        
      });
      promise.catch(function (error) {
        console.log(error);
      });
};
