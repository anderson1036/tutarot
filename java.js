// Define las cartas disponibles
const cartas = [
    "El Loco", "La Emperatriz", "La Estrella", "La Muerte", "El Colgado", 
    "El Sol", "El Mago", "La Luna", "La Fuerza"
  ];
  
  // Copia las cartas disponibles para manipulación
  let cartasDisponibles = [...cartas];
  let cartasSeleccionadas = [];
  
  // Función para seleccionar una carta
  function seleccionarCarta(numero) {
    const carta = document.getElementById(`carta${numero}`);
  
    // Verifica si la carta no ha sido seleccionada y hay cartas disponibles
    if (!carta.classList.contains('seleccionada') && cartasDisponibles.length > 0 && cartasSeleccionadas.length < 3) {
      const indiceCarta = Math.floor(Math.random() * cartasDisponibles.length);
      const cartaSeleccionada = cartasDisponibles.splice(indiceCarta, 1)[0];
      
      // Marca la carta como seleccionada y la agrega al array de cartas seleccionadas
      carta.classList.add('seleccionada');
      cartasSeleccionadas.push({ numero, nombre: cartaSeleccionada });
    }
  
    // Cuando se seleccionan 3 cartas, muestra el resultado
    if (cartasSeleccionadas.length === 3) {
      mostrarResultado();
    }
  }
  
// Función para mostrar el resultado de la lectura de tarot
function mostrarResultado() {
  const cartasSeleccionadasDiv = document.getElementById('cartasSeleccionadas');
  const interpretacionDiv = document.getElementById('interpretacion');

  // Muestra las cartas seleccionadas
  cartasSeleccionadasDiv.innerHTML = '';
  cartasSeleccionadas.forEach(carta => {
    cartasSeleccionadasDiv.innerHTML += `Carta ${carta.numero}: ${carta.nombre}<br>`;
  });

  // Interpretación personalizada según las cartas seleccionadas (puedes modificar esto)
  interpretacionDiv.innerHTML = 'Interpretación:<br>';

  interpretacionDiv.innerHTML += 'Has seleccionado estas tres cartas, que representan tu pasado, presente y futuro:<br>';

  console.log('Cartas seleccionadas:', cartasSeleccionadas);

// Interpretaciones para todas las cartas
const interpretaciones = {
  "El Loco": [
    "Eres una persona llena de energía y espíritu aventurero. Este es el momento de seguir tus instintos y explorar nuevas posibilidades en la vida.",
    "La vida te llama a tomar riesgos y ser más espontáneo. Abraza la incertidumbre con valentía."
  ],
  "La Emperatriz": [
    "La abundancia y la creatividad te rodean. Este es un buen momento para nutrir tus ideas y proyectos, ya que florecerán y te llevarán al éxito.",
    "Tu capacidad de crear y nutrir es ilimitada. Conéctate con la naturaleza y confía en tu instinto maternal."
  ],
  "La Estrella": [
    "La esperanza y la inspiración están en tu camino. Mantén una visión positiva y sigue tus sueños, ya que el universo te apoya.",
    "Eres una fuente de inspiración para los demás. Comparte tu luz y optimismo con el mundo."
  ],
  "La Muerte": [
    "Estás experimentando una transformación profunda en tu vida. Deja ir lo antiguo para dar paso a lo nuevo y renace.",
    "La Muerte no siempre significa final, sino cambio y renacimiento. Acepta las transiciones con valentía."
  ],
  "El Colgado": [
    "Te encuentras en un momento de pausa y reflexión. Aprovecha este tiempo para obtener una nueva perspectiva antes de tomar decisiones importantes.",
    "La paciencia y la rendición son clave en este momento. No todo puede ser controlado, aprende a fluir con la vida."
  ],
  "El Sol": [
    "La alegría y la vitalidad te rodean. Disfruta de momentos positivos y comparte tu luz con los demás.",
    "Eres bendecido con optimismo y vitalidad. Aprovecha este período de felicidad y éxito."
  ],
  "El Mago": [
    "Posees el poder de manifestar tus sueños en la realidad. Utiliza tus habilidades y recursos con sabiduría.",
    "Eres un creador talentoso. Conecta con tus habilidades y confía en tu capacidad para transformar tu realidad."
  ],
  "La Luna": [
    "La intuición y las emociones profundas guían tu camino. Presta atención a los mensajes de tu subconsciente.",
    "Eres sensible y perceptivo. Explora el mundo de los sueños y las emociones para obtener una comprensión más profunda."
  ],
  "La Fuerza": [
    "La fuerza interior y la compasión son tus mayores activos. Enfrenta los desafíos con valentía y amor.",
    "Tu verdadera fortaleza proviene de la compasión y la resistencia. Aborda los desafíos desde un lugar de amor y poder interior."
  ]
  // Puedes seguir agregando interpretaciones para más cartas según sea necesario
};

  interpretacionDiv.innerHTML += `En tu pasado, ${interpretaciones[cartasSeleccionadas[0].nombre] || 'Sin interpretación disponible'}<br>`;
  interpretacionDiv.innerHTML += `En tu presente, ${interpretaciones[cartasSeleccionadas[1].nombre] || 'Sin interpretación disponible'}<br>`;
  interpretacionDiv.innerHTML += `Y en tu futuro, ${interpretaciones[cartasSeleccionadas[2].nombre] || 'Sin interpretación disponible'}<br>`;
}


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  