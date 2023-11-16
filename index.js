const form = document.querySelector('.needs-validation');
var rm=document.getElementById('removediv');
var dv1=document.getElementById('knw');

var dv2=document.getElementById('dn');
var dnone=document.getElementById('dblck');



        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (form.checkValidity()) {
                form.style.display="none";
                dv1.style.display="none";
                dv2.style.display="none";
                dnone.style.display="block";

            }

            form.classList.add('was-validated');
        });