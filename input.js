let isim = prompt('ismingizni kritin')

let harif = prompt('Bromta harif kritin')

if ( isim.toLocaleLowerCase().includes (harif)) {

    alert(`${isim} isimda ${harif} harifi  bor`)

}  else {
    alert(` ${isim} ismingiz ${harif} harif mavjud emas`)
}
