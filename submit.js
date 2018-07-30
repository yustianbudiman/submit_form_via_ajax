//link referensi tarif RS http://www.biaya.net/2015/12/tarif-layanan-rsud-dki-jakarta.html
$(document).on('submit', 'form.AjaxForm', function() {            
        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            dataType: 'json',
            data    : $(this).serialize(),
            success : function( data ) {
                         alert('Submitted');
            },
            error   : function( xhr, err ) {
                         alert('Error');     
            }
        });    
        return false;
    });
