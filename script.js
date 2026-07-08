// ==========================================
// CONFIGURACIÓN DE LA FECHA DEL EVENTO
// ==========================================
// IMPORTANTE: Cambia esta fecha por la del bautizo. 
// Usa el formato: "Month DD, YYYY HH:MM:SS"
const fechaEvento = new Date("11 Noviembre, 2026 11:00:00").getTime();

// Actualizar la cuenta atrás cada 1 segundo (1000 milisegundos)
const x = setInterval(function() {

    // Obtener la fecha y hora actual del sistema
    const ahora = new Date().getTime();

    // Encontrar la distancia/tiempo restante entre ahora y la fecha del evento
    const distancia = fechaEvento - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inyectar los resultados en los elementos HTML correspondientes
    document.getElementById("days").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("hours").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutes").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("seconds").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // Si la cuenta atrás ha terminado, muestra un mensaje o borra el contador
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Ha llegado el gran día!";
    }
}, 1000);