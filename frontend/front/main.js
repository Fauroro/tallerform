const form = document.querySelector("#formulario")
const retorno = document.querySelector("#resultado")

form.addEventListener("submit", obtenerFormulario)

async function obtenerFormulario(e) {
    e.preventDefault();

    const inputForm = new FormData(form) /*obtiene input en forma clave valor
    la clave es el name y el valor es el value ingresado*/
    const objForm = Object.fromEntries(inputForm) //convertir las claves y valores en un objeto literal
    const respuesta = await post(objForm)
    console.log(respuesta);
    retorno.innerHTML =  /*html*/`
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nombre:</span>
                    <input class="form-control" type="text" placeholder="${respuesta.name}" aria-label="default input example" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Apellido:</span>
                    <input class="form-control" type="text" placeholder="${respuesta.lastname}" aria-label="default input example" disabled>

                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Profesion:</span>
                    <input class="form-control" type="text" placeholder="${respuesta.profession}" aria-label="default input example" disabled>

                </div>
            </div>
            <div class="col"></div>
        </div>
    `
}

const header = new Headers({
    "Content-Type": "application/json"
})

const post = async (datos) => {
    const resultado = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: header,
        body: JSON.stringify(datos)
    })

    const objJs = await resultado.json();
    // console.log(objJs);
    return objJs

}