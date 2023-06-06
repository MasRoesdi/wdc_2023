const selectPaymentMethod = document.getElementById('select-payment-method').children
let idArr = [];
for (var i = 0; i < selectPaymentMethod.length; i++) {
    if (selectPaymentMethod[i].id != '') {
        idArr.push(selectPaymentMethod[i].id);
    }
}

function selectMethod(id, selectMethod){
    for (let index = 0; index < idArr.length; index++) {
        const theId = idArr[index];
        let element = document.getElementById(theId)
        if (id == theId) {
            element.classList.add('bg-[#4F94D74D]')
            element.classList.remove('bg-transparent')
            document.getElementById('displaySelectedMethod').innerHTML = `Virtual Account - ${selectMethod}` 
        }else{
            element.classList.add('bg-transparent')
            element.classList.remove('bg-[#4F94D74D]')
        }
        // if (id != theId) {
        //     element.classList.add('bg-transparent')
        // }else{
        //     element.classList.add('bg-[#4F94D74D]')
        // }

    }
}