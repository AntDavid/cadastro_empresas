document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const isValid = validateForm();

        if (isValid) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Cadastro realizado com sucesso!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {           
                form.reset();
            });
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Por favor, preencha todos os campos corretamente.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input, textarea');
        for (const input of inputs) {
            if (input.value.trim() === '') {
                return false;
            }
        }
        return true;
    }
});

