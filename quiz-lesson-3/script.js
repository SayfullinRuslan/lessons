let date_obj = new Date('09/02/1958')
//дни недели считаются с вск с нуля, значит вт - 2
if (date_obj.getDay() === 2) {
    alert('Да, ' + date_obj.toLocaleDateString('ru') + ' - это вторник');
}