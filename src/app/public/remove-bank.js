let BankDao = document.querySelector('#bank');
BankDao.addEventListener('click', (event) => {
    let clickElement = event.target;

    if (clickElement.dataset.type == 'remove') {
        let id = clickElement.dataset.ref;
        fetch(`http://localhost:5000/bank/${id}`, { method: 'DELETE' })
            .then(response => {

                let tr = clickElement.closest(`#bank_${id}`);
                tr.remove();

            })
            .catch(error => console.log(error));

    }

});