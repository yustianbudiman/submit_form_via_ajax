//link referensi tarif RS http://www.biaya.net/2015/12/tarif-layanan-rsud-dki-jakarta.html
1.pasien ok
2.registrasi ok		
4.rawat jalan ok		===========> tidak ada kelas
3.rawat inap not ok		===========> ada kelas
5.IGD  ok				===========> tidak ada kelas
	-lab not ok 		===========> tidak ada kelas
	-radiologi not ok	===========> tidak ada kelas
	-farmasi not ok		===========> tidak ada kelas
6.billing not ok
7.untuk poin 3,4,dan 5 tindakan di bedakan walaupun nama tindakannya sama

rawat jalan:

	no_rawat_jalan
	no_medic
	no_rawat
	taggal_rawat
	keterangan
	status
	created_time
	created_by
	created_ip
	updated_time
	updated_by
	updated_ip
				tindakan :
					aff hecting

rawat inap:

	no_rawat_inap
	no_medic
	no_rawat
	tempat_tidur
	taggal_rawat
	keterangan
	status
	created_time
	created_by
	created_ip
	updated_time
	updated_by
	updated_ip
				tindakan :
					aff hecting
                                        
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
