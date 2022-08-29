function kiemtrarong (value,selectorError,name){
    // var valid = true

    if(value === ''){
        document.querySelector(selectorError).innerHTML = name + 'không được bỏ trống'
        return false
    }
        document.querySelector(selectorError).innerHTML = ''
    return true
    
};

function kiemtraso(value,selectorError,name){
    var regex = /^[0-9]+$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'tất cả phải là số'
    return false
}
function kiemtrakytu(value,selectorError,name){
    var regex = /^[a-z A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'tất cả phải là ký tự'
    return false
}
function kiemtraemail(value,selectorError,name){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'phải đúng định dạng ! VD : abc@domain.com '
    return false
}
function kiemtramatkhau (value,selectorError,name){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + ' từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt),không để trống'
    return false
}

function passwordConfirm (value1,value2,selectorError){
    console.log(value2 === value1);
    let regex = value2
    if(value1===value2){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = 'mật khẩu nhập lại phải  khớp với mật khẩu ban đầu'
    return false
}