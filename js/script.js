document.addEventListener("DOMContentLoaded", () => {
    const reservaForm = document.getElementById("reservaForm");
    const listaReservas = document.getElementById("listaReservas");

    // Cargar reservas desde localStorage al cargar la página
    cargarReservas();

    // Manejar el evento de enviar el formulario
    reservaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los datos del formulario
        const recital = document.getElementById("recital").value;
        const pasajeros = document.getElementById("pasajeros").value;

        // Validar que ambos campos estén llenos
        if (recital && pasajeros) {
            // Crear un objeto de reserva
            const reserva = {
                recital,
                pasajeros
            };

            // Guardar la reserva en localStorage
            guardarReserva(reserva);

            // Mostrar la reserva en la lista
            agregarReservaALista(reserva);

            
            reservaForm.reset();
        } else {
            alert("Reserva confirmada.");
        }
    });

    // Función para guardar la reserva en localStorage
    function guardarReserva(reserva) {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }

    // Función para cargar reservas desde localStorage
    function cargarReservas() {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.forEach(reserva => agregarReservaALista(reserva));
    }

    // Función para agregar una reserva a la lista en el DOM
    function agregarReservaALista(reserva) {
        const li = document.createElement("li");
        li.textContent = `Recital: ${reserva.recital}, Pasajeros: ${reserva.pasajeros}`;
        listaReservas.appendChild(li);
    }
});