Swal.fire({
    title: `<h4 style='color: #f40000'>Ingresa aquí</h4>`,
    showConfirmButton: false,
    html:
        'tu usuario y contraseña.<br><br>' +
        '<div class="container">' +
        '<div class="row w-75 mx-auto">' +
        '<label><b>Correo</b></label><input style="margin: 0.5rem 0" id="swal-input1" type="email" class="swal2-input">' +
        '<label><b>Contraseña</b></label><input style="margin: 0.5rem 0" id="swal-input2" type="password" class="swal2-input">' +
        '<a onclick="recuperar()" class="w-100 mb-3">Recuperar contraseña</a>' +
        '<button class="btn btn-danger w-100 mb-3">Ingresar</button>' +
        '<button class="btn btn-dark w-100">Ingresar FDV</button>' +
        '</div></div>',
})
function recuperar() {
    Swal.fire({
        title: `<h4 style='color: #f40000'>Recuperar contraseña</h4>`,
        showConfirmButton: false,
        html:
            'Para recuperar el acceso a tu cuenta ingresa los siguientes datos.<br><br>' +
            '<div class="container">' +
            '<div class="row w-75 mx-auto">' +
            '<label><b>Usuario</b></label><input style="margin: 0.5rem 0"  type="email" class="swal2-input">' +
            '<label><b>Correo electrónico</b></label><input style="margin: 0.5rem 0" type="email" class="swal2-input">' +
            '<label><b>Número telefónico o de contacto</b></label><input style="margin: 0.5rem 0"  type="tel" class="swal2-input">' +
            '<button class="btn btn-danger w-100 my-3">Enviar vía correo</button>' +
            '<button class="btn btn-dark w-100">Enviar vía SMS</button>' +
            '</div></div>',
    })
}


