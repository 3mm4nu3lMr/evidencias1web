document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".card");
    const overlay = document.getElementById("popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-img");
    const popupText = document.getElementById("popup-text");
    const popupSource = document.getElementById("popup-fuente");
    const closeButton = document.querySelector(".close-btn");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            popupTitle.textContent = tarjeta.getAttribute("data-titulo");
            popupText.textContent = tarjeta.getAttribute("data-descripcion");
            popupSource.textContent = tarjeta.getAttribute("data-fuente");
            popupImage.src = tarjeta.getAttribute("data-imagen");
            popupImage.alt = tarjeta.getAttribute("data-titulo");

            overlay.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});    
// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});





// Script para el botón de "Volver arriba"
// Respuestas correctas
const respuestasCorrectas = {
    p1: "a", // Tecnología extraterrestre
    p2: "a", // Teoría del montaje lunar
    p3: "a", // Estelas químicas para control climático
    p4: "a", // Un grupo secreto que controla el mundo
    p5: "a"  // Teoría del microchip en vacunas
};

// Niveles de conocimiento
const niveles = [
    { min: 0, max: 1, texto: "Novato - ¡Recién empiezas en el mundo de las teorías conspirativas!" },
    { min: 2, max: 3, texto: "Aprendiz - Sabes algo, pero hay mucho por descubrir." },
    { min: 4, max: 5, texto: "Experto - ¡Eres un conocedor de las teorías conspirativas!" }
];

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comentarios = document.getElementById("comentarios").value;
    
    // Calcular puntaje
    let puntaje = 0;
    const respuestasUsuario = {};
    
    for (let i = 1; i <= 5; i++) {
        const pregunta = `p${i}`;
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        
        if (respuestaSeleccionada) {
            respuestasUsuario[pregunta] = respuestaSeleccionada.value;
            if (respuestaSeleccionada.value === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }
    }
    
    // Mostrar resultados
    document.getElementById("puntaje").textContent = `Obtuviste ${puntaje} de 5 respuestas correctas.`;
    
    // Determinar nivel
    const nivel = niveles.find(n => puntaje >= n.min && puntaje <= n.max);
    document.getElementById("nivel").textContent = nivel.texto;
    
    // Mostrar sección de resultados
    document.getElementById("resultados").style.display = "block";
    
    // Configurar botón para generar PDF
    document.getElementById("descargar-pdf").onclick = function() {
        generarPDF(nombre, email, puntaje, nivel.texto, comentarios, respuestasUsuario);
    };
    
    // Desplazarse a los resultados
    document.getElementById("resultados").scrollIntoView({ behavior: 'smooth' });
});

function generarPDF(nombre, email, puntaje, nivel, comentarios, respuestas) {
    // Usamos jsPDF (ya incluido en el head)
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.text("Resultados del Quiz de Teorías Conspirativas", 105, 20, { align: 'center' });
    
    // Información personal
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 60);
    
    // Resultados
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 255);
    doc.text("RESULTADOS", 105, 80, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Puntaje: ${puntaje} de 5`, 20, 90);
    doc.text(`Nivel: ${nivel}`, 20, 100);
    
    // Tabla de respuestas
    doc.autoTable({
        startY: 110,
        head: [['Pregunta', 'Tu respuesta', 'Correcta']],
        body: [
            [
                '¿Qué se oculta en el Área 51?', 
                obtenerTextoRespuesta('p1', respuestas.p1), 
                'Tecnología extraterrestre'
            ],
            [
                'Teoría sobre el alunizaje', 
                obtenerTextoRespuesta('p2', respuestas.p2), 
                'Teoría del montaje lunar'
            ],
            [
                '¿Qué son los chemtrails?', 
                obtenerTextoRespuesta('p3', respuestas.p3), 
                'Estelas químicas para control climático'
            ],
            [
                '¿Quiénes son los Illuminati?', 
                obtenerTextoRespuesta('p4', respuestas.p4), 
                'Un grupo secreto que controla el mundo'
            ],
            [
                'Teoría sobre vacunas', 
                obtenerTextoRespuesta('p5', respuestas.p5), 
                'Teoría del microchip en vacunas'
            ]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [22, 22, 22]
        }
    });
    
    // Comentarios
    if (comentarios) {
        doc.text("Tu teoría favorita:", 20, doc.lastAutoTable.finalY + 20);
        doc.text(comentarios, 20, doc.lastAutoTable.finalY + 30, { maxWidth: 170 });
    }
    
    // Guardar PDF
    doc.save(`Resultados_Teorias_Conspirativas_${nombre.replace(/\s+/g, '_')}.pdf`);
}

function obtenerTextoRespuesta(pregunta, respuesta) {
    const opciones = {
        p1: { a: "Tecnología extraterrestre", b: "Armas nucleares secretas", c: "Reservas de oro" },
        p2: { a: "Teoría del montaje lunar", b: "Teoría de la Tierra plana", c: "Teoría del holograma cósmico" },
        p3: { a: "Estelas químicas para control climático", b: "Rutas de vuelo secretas", c: "Fenómeno meteorológico natural" },
        p4: { a: "Un grupo secreto que controla el mundo", b: "Sociedad científica del siglo XVIII", c: "Orden religiosa medieval" },
        p5: { a: "Teoría del microchip en vacunas", b: "Teoría de la inmunidad artificial", c: "Teoría de la modificación genética" }
    };
    
    return opciones[pregunta][respuesta] || "No respondida";
}