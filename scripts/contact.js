

let selectedOptions = [];

$(document).ready(() => {

    $("#generos_musicales").on("change", () => { 
        const condition = selectedOptions.includes($("#generos_musicales").val());
        if (!condition) {
            selectedOptions = [...selectedOptions, $("#generos_musicales").val()];
            $("#generos_list").html(selectedOptions.map((option) => {
                return `<li class="remove-option" data-value="${option}">${option}</li>`;               
        }));
        }
    })



    //******* Contact Form *******//
    $('.contact_form').on('submit', (event) => {
        event.preventDefault();

        const name = $('#contact_name').val();
        const email = $('#contact_email').val();
        const generos = selectedOptions;
        const data = { name, email, generos };
        
        window.location.href = 'gracias.html?' + $.param(data);
      });
});

$(document).on('click', '.remove-option', function() {
        const value = $(this).data('value');
        selectedOptions = selectedOptions.filter(option => option !== value);
        $("#generos_musicales option[value='" + value + "']").prop('selected', false);
        $("#generos_list").html(selectedOptions.map((option) => {
            return `<li class="remove-option" data-value="${option}">${option}</li>`;
        }))
});
