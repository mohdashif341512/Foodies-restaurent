

function display(act)
{
    let insert = document.getElementById('insert')
    let login = document.getElementById('login')
    let restro = document.getElementById('restro')
    let voucher = document.getElementById('voucher')
    let Feedback = document.getElementById('Feedback')
    let subButton = document.getElementsByClassName('btn')
    
    let subButton1 = document.getElementById('btn1')
    let subButton2 = document.getElementById('btn2')
    

    if(act == 'insert')
    {
        insert.style.display = 'contents'
        login.style.display = 'none'
        restro.style.display = 'none'
        voucher.style.display = 'none'
        Feedback.style.display = 'none'
        subButton[0].classList.add("submit-button")
        subButton[0].classList.remove("visible")
        subButton[1].classList.add("visible")
        
        subButton[1].classList.remove("submit")
         
        
    }
    else if( act == 'login')
    {
        insert.style.display = 'none'
        login.style.display = 'contents'
        restro.style.display = 'none'
        voucher.style.display = 'none'
        Feedback.style.display = 'none'

        subButton[1].classList.add("submit-button")
        subButton[1].classList.remove("visible")
        subButton[0].classList.add("visible")
        subButton[0].classList.remove("submit")
    }
    else if( act == 'restro')
    {
        insert.style.display = 'none'
        login.style.display = 'none'
        restro.style.display = 'contents'
        voucher.style.display = 'none'
        Feedback.style.display = 'none'

        subButton[1].classList.add("submit-button")
        subButton[1].classList.remove("visible")
        subButton[0].classList.add("visible")
        subButton[0].classList.remove("submit")
    }
    else if( act == 'voucher')
    {
        insert.style.display = 'none'
        login.style.display = 'none'
        restro.style.display = 'none'
        voucher.style.display = 'contents'
        Feedback.style.display = 'none'

        subButton[1].classList.add("submit-button")
        subButton[1].classList.remove("visible")
        subButton[0].classList.add("visible")
        subButton[0].classList.remove("submit")
    }

    else if( act == 'Feedback')
    {
        insert.style.display = 'none'
        login.style.display = 'none'
        restro.style.display = 'none'
        voucher.style.display = 'none'
        Feedback.style.display = 'contents'

        subButton[1].classList.add("submit-button")
        subButton[1].classList.remove("visible")
        subButton[0].classList.add("visible")
        subButton[0].classList.remove("submit")
    }
  
}
//I'm asif//

