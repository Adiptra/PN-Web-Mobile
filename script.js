var menuToggle = document.querySelector('.menu-toggle input')
var nav = document.querySelector('nav ul')
var b = document.querySelector('body')

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
    b.classList.toggle('slide')
})

function submit() {
    alert("Maaf Masih Dalam Tahap Pengembangan:D")
}

function submitForm(){
    let nama = document.getElementById('name').value
    let email = document.getElementById('email').value
    let PN = document.getElementById('p-Number').value
    let Subject = document.getElementById('subject').value
    let Massage = document.getElementById('massage').value

    if (nama == '') {
        alert("Nama Harus diisi ya Kawan:D")
    } else if (PN == '') {
        alert("No. Handphone Harus diisi ya Kawan:D")
    } else if (email == '') {
        alert("Email Harus diisi ya kawan")
    } else if (Subject == '') {
        alert("Subject Harus diisi ya kawan")
    } else if (Massage == '') {
        alert("Massage harus diisi ya kawan")
    }
    
    console.log(nama)
    console.log(email)
    console.log(PN)
    console.log(Subject)
    console.log(Massage)

    let penerima = 'adiirawan2705@gmail.com'
    let a = document.createElement('a')

    a.href = 'mailto: ' + penerima + '?Subject=' + '&body=Halo Nama Saya ' + nama + ', ' + Massage
    
    a.click()
}