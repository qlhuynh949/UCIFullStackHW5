
const renderCurrent = () => {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
  let currentHour = new moment().format("HH");
  changeHour(currentHour)
  if (previousHour !== currentHour) {
    loadTextArea()
    previousHour = currentHour

  }

  let t = setTimeout(renderCurrent, 1000)
}

const loadTextArea = () => {
  $('#textarea9').val(task9)
  $('#textarea10').val(task10)
  $('#textarea11').val(task11)
  $('#textarea12').val(task12)
  $('#textarea13').val(task13)
  $('#textarea14').val(task14)
  $('#textarea15').val(task15)
  $('#textarea16').val(task16)
  $('#textarea17').val(task17)

}

const changeHour = (x) => {
  let hour = parseInt(x)
  switch (hour) {
    case 9:
      $('#task9').addClass('present').removeClass('past').removeClass('future')
      $('#task10').addClass('future').removeClass('present').removeClass('past')
      $('#task11').addClass('future').removeClass('present').removeClass('past')
      $('#task12').addClass('future').removeClass('present').removeClass('past')
      $('#task13').addClass('future').removeClass('present').removeClass('past')
      $('#task14').addClass('future').removeClass('present').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 10:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('present').removeClass('future').removeClass('past')
      $('#task11').addClass('future').removeClass('present').removeClass('past')
      $('#task12').addClass('future').removeClass('present').removeClass('past')
      $('#task13').addClass('future').removeClass('present').removeClass('past')
      $('#task14').addClass('future').removeClass('present').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 11:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('present').removeClass('future').removeClass('past')
      $('#task12').addClass('future').removeClass('present').removeClass('past')
      $('#task13').addClass('future').removeClass('present').removeClass('past')
      $('#task14').addClass('future').removeClass('present').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 12:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('present').removeClass('future').removeClass('past')
      $('#task13').addClass('future').removeClass('present').removeClass('past')
      $('#task14').addClass('future').removeClass('present').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 13:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('present').removeClass('present').removeClass('past')
      $('#task14').addClass('future').removeClass('present').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 14:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('past').removeClass('present').removeClass('future')
      $('#task14').addClass('present').removeClass('future').removeClass('past')
      $('#task15').addClass('future').removeClass('present').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 15:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('past').removeClass('present').removeClass('future')
      $('#task14').addClass('past').removeClass('present').removeClass('future')
      $('#task15').addClass('present').removeClass('future').removeClass('past')
      $('#task16').addClass('future').removeClass('present').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 16:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('past').removeClass('present').removeClass('future')
      $('#task14').addClass('past').removeClass('present').removeClass('future')
      $('#task15').addClass('past').removeClass('present').removeClass('future')
      $('#task16').addClass('present').removeClass('future').removeClass('past')
      $('#task17').addClass('future').removeClass('present').removeClass('past')
      break;
    case 17:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('past').removeClass('present').removeClass('future')
      $('#task14').addClass('past').removeClass('present').removeClass('future')
      $('#task15').addClass('past').removeClass('present').removeClass('future')
      $('#task16').addClass('past').removeClass('present').removeClass('future')
      $('#task17').addClass('present').removeClass('future').removeClass('past')
      break;
    default:
      $('#task9').addClass('past').removeClass('present').removeClass('future')
      $('#task10').addClass('past').removeClass('present').removeClass('future')
      $('#task11').addClass('past').removeClass('present').removeClass('future')
      $('#task12').addClass('past').removeClass('present').removeClass('future')
      $('#task13').addClass('past').removeClass('present').removeClass('future')
      $('#task14').addClass('past').removeClass('present').removeClass('future')
      $('#task15').addClass('past').removeClass('present').removeClass('future')
      $('#task16').addClass('past').removeClass('present').removeClass('future')
      $('#task17').addClass('past').removeClass('present').removeClass('future')
      break;
  }
}

let task9 = localStorage.getItem('task9') || ''
let task10 = localStorage.getItem('task10') || ''
let task11 = localStorage.getItem('task11') || ''
let task12 = localStorage.getItem('task12') || ''
let task13 = localStorage.getItem('task13') || ''
let task14 = localStorage.getItem('task14') || ''
let task15 = localStorage.getItem('task15') || ''
let task16 = localStorage.getItem('task16') || ''
let task17 = localStorage.getItem('task17') || ''

$('#save9').on('click', () => {
  task9 = $('#textarea9').val()
  localStorage.setItem('task9', task9)
})
$('#save10').on('click', () => {
  task10 = $('#textarea10').val()
  localStorage.setItem('task10', task10)
})
$('#save11').on('click', () => {
  task11 = $('#textarea11').val()
  localStorage.setItem('task11', task11)
})
$('#save12').on('click', () => {
  task12 = $('#textarea12').val()
  localStorage.setItem('task12', task12)
})
$('#save13').on('click', () => {
  task13 = $('#textarea13').val()
  localStorage.setItem('task13', task13)
})
$('#save14').on('click', () => {
  task14 = $('#textarea14').val()
  localStorage.setItem('task14', task14)
})
$('#save15').on('click', () => {
  task15 = $('#textarea15').val()
  localStorage.setItem('task15', task15)
})
$('#save16').on('click', () => {
  task16 = $('#textarea16').val()
  localStorage.setItem('task9', task16)
})
$('#save17').on('click', () => {
  task17 = $('#textarea17').val()
  localStorage.setItem('task17', task17)
})

let previousHour = new moment().format("HH");
loadTextArea()
renderCurrent()
