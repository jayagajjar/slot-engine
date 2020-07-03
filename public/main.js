const update = document.querySelector('#update-button')

console.log("update "+update);
update.addEventListener('click', _ => {
    console.log("dakkjs");
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })