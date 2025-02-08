const btn = document.querySelector('button')
const input = document.querySelector('input')
const hasil = document.querySelector('p')

btn.addEventListener('click', function(){
    if(input.value === 'danishCTF{k0cak_b43enairoi}'){
        hasil.textContent = 'wowowo benar, scan ini dek'
        document.querySelector('img').src ='Sopipey_qrcode.png'

    }else{
        hasil.textContent = "Salah Flagnya"
    }
})