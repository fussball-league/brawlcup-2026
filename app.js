const clienteSupabase = supabase.createClient(CONFIG.URL_DB, CONFIG.KEY_DB);
let encuestasCompletadas = []; // Guardaremos los id_db de las encuestas ya votadas

// 2. Funciones globales de acceso
window.loginConDiscord = async () => {
    await clienteSupabase.auth.signInWithOAuth({
        provider: 'discord',
        options: { redirectTo: window.location.origin }
    });
};

window.cerrarSesion = async () => {
    await clienteSupabase.auth.signOut();
    localStorage.clear();
    window.location.reload();
};

// 3. Lógica visual inteligente (Solo bloquea la partida actual)
function marcarOpcionSeleccionada(opcionId) {
    const botonClickeado = document.querySelector(`[onclick="votar('${opcionId}')"]`);
    if (!botonClickeado) return;

    // Buscamos el contenedor .grupo-encuesta más cercano al botón
    const grupoEncuesta = botonClickeado.closest('.grupo-encuesta');
    if (!grupoEncuesta) return;

    const botonesDelGrupo = grupoEncuesta.querySelectorAll('.opcion-voto');

    botonesDelGrupo.forEach(boton => {
        if (boton === botonClickeado) {
            boton.classList.add('voto-realizado');
            const p = boton.querySelector('.opcion-info p');
            if (p) p.innerText = "Elección registrada";
        } else {
            boton.style.opacity = "0.4";
            boton.style.pointerEvents = "none";
            boton.style.filter = "grayscale(1)";
        }
    });
}

// 4. Verificación de votos previos al cargar
async function verificarVotosUsuario(user) {
    if (!user) return;

    const { data: votos } = await clienteSupabase
        .from('votos')
        .select('opcion_id, encuesta_id')
        .eq('discord_id', user.user_metadata.sub);

    if (votos && votos.length > 0) {
        votos.forEach(v => {
            // Anotamos que esta encuesta ya está lista
            if (!encuestasCompletadas.includes(v.encuesta_id)) {
                encuestasCompletadas.push(v.encuesta_id);
            }
            // Marcamos visualmente la opción elegida
            marcarOpcionSeleccionada(v.opcion_id);
        });
    }
}

// 5. Escucha de sesión
clienteSupabase.auth.onAuthStateChange((event, session) => {
    const authSection = document.getElementById('auth-section');
    if (!authSection) return;

    if (session?.user) {
        const avatarUrl = session.user.user_metadata.avatar_url;
        const nickname = session.user.user_metadata.full_name || "Usuario";

        authSection.innerHTML = `
            <div class="user-profile">
                <img src="${avatarUrl}" alt="Avatar" class="user-avatar">
                <span class="user-name">${nickname}</span>
                <button onclick="cerrarSesion()" class="btn-logout">×</button>
            </div>`;

        verificarVotosUsuario(session.user);
    } else {
        authSection.innerHTML = `<a href="#" onclick="loginConDiscord()">Login</a>`;
    }
});

// 6. Acción de votar corregida (Busca el id_db en PARTIDAS)
async function votar(opcionId) {
    // Buscamos a qué partida pertenece esta opción en el array de encuestas.js
    const partidaActual = PARTIDAS.find(p => p.opciones.some(o => o.id === opcionId));

    if (!partidaActual) {
        console.error("No se encontró la partida para el ID:", opcionId);
        return;
    }

    const idEncuesta = partidaActual.id_db;

    // Bloqueo si ya votó en esta partida específica
    if (encuestasCompletadas.includes(idEncuesta)) return;

    const { data: { session } } = await clienteSupabase.auth.getSession();
    const user = session?.user;

    if (!user) {
        mostrarModal("Sesión Requerida", "Inicia sesión con Discord.", true);
        return;
    }

    const { error } = await clienteSupabase.from('votos').insert([{
        encuesta_id: idEncuesta,
        discord_id: user.user_metadata.sub,
        opcion_id: opcionId,
        avatar_url: user.user_metadata.avatar_url,
        username: user.user_metadata.full_name || "Usuario"
    }]);

    if (!error) {
        encuestasCompletadas.push(idEncuesta);
        marcarOpcionSeleccionada(opcionId);
        mostrarModal("¡Éxito!", "Voto registrado correctamente.");
    } else {
        if (error.code === '23505') { // Error de duplicado en DB
            encuestasCompletadas.push(idEncuesta);
            marcarOpcionSeleccionada(opcionId);
        } else {
            console.error("Error al votar:", error);
        }
    }
}

// 7. Funciones de Modal y Resultados (Se mantienen igual)
function mostrarModal(t, m, l = false) {
    const modal = document.getElementById('custom-modal');
    if (!modal) return;
    document.getElementById('modal-title').innerText = t;
    document.getElementById('modal-text').innerText = m;
    const btn = document.getElementById('modal-primary-btn');
    if (l) {
        btn.innerHTML = `Login <i class="fa-brands fa-discord"></i>`;
        btn.onclick = () => { cerrarModal(); loginConDiscord(); };
    } else {
        btn.innerText = "Entendido";
        btn.onclick = cerrarModal;
    }
    modal.style.display = 'flex';
}

function cerrarModal() {
    const m = document.getElementById('custom-modal');
    if (m) { m.classList.add('cerrando'); setTimeout(() => { m.style.display = 'none'; m.classList.remove('cerrando'); }, 300); }
}

window.onclick = function(event) {
    const modal = document.getElementById('custom-modal');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Inicialización para resultados.html
if (window.location.pathname.includes('resultados.html')) {
}

/// --- LÓGICA PARA RESULTADOS.HTML ---

// app.js

async function actualizarTodoResultados() {
    const { data: votos, error } = await clienteSupabase
        .from('votos')
        .select('opcion_id, avatar_url, username');

    if (error) return console.error("Error al obtener votos:", error);

    const contenedor = document.getElementById('lista-resultados');
    if (!contenedor) return;

    // 1. Contar votos por ID de opción
    const conteo = votos.reduce((acc, v) => {
        acc[v.opcion_id] = (acc[v.opcion_id] || 0) + 1;
        return acc;
    }, {});

    // 2. Generar el HTML dinámicamente basándose en PARTIDAS (de encuestas.js)
    contenedor.innerHTML = PARTIDAS.map(partida => {
        // Calculamos el total de votos de ESTA partida específica
        const totalVotosPartida = partida.opciones.reduce((sum, opc) => sum + (conteo[opc.id] || 0), 0);

        return `
            <div class="grupo-resultado-encuesta" style="margin-bottom: 40px;">
                <h4 class="titulo-partida" style="margin-bottom: 15px;">${partida.titulo}</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    ${partida.opciones.map(opc => {
            const cant = conteo[opc.id] || 0;
            const porc = totalVotosPartida > 0 ? Math.round((cant / totalVotosPartida) * 100) : 0;

            return `
                            <div class="contenedor-barra">
                                <div class="info-barra">
                                    <span>${opc.nombre}</span>
                                    <span class="porcentaje">${porc}%</span>
                                </div>
                                <div class="barra-progreso-bg">
                                    <div class="barra-progreso-fill" style="width: ${porc}%;"></div>
                                </div>
                                <span class="votos-conteo">${cant} ${cant === 1 ? 'voto' : 'votos'}</span>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }).join('');

    // 3. Renderizar Avatares Recientes (SIN DUPLICADOS)
    const contenedorAvatares = document.getElementById('avatares-recientes');
    if (contenedorAvatares) {
        // Filtramos para que cada usuario aparezca solo una vez
        const usuariosUnicos = [];
        const mapaUsuarios = new Map();

        // Recorremos los votos (del más nuevo al más viejo)
        [...votos].reverse().forEach(v => {
            if (v.avatar_url && !mapaUsuarios.has(v.username)) {
                mapaUsuarios.set(v.username, true);
                usuariosUnicos.push(v);
            }
        });

        // Mostramos solo los primeros 12 usuarios únicos
        const mostrarUsuarios = usuariosUnicos.slice(0, 12);

        contenedorAvatares.innerHTML = mostrarUsuarios.map(v => `
            <img src="${v.avatar_url}" 
                 class="avatar-voto" 
                 title="${v.username}" 
                 alt="Avatar de ${v.username}">
        `).join('') || '<p style="color:#555">Sin votos aún</p>';
    }
}

// Inicialización y Realtime
if (window.location.pathname.includes('resultados.html')) {
    // Carga inicial
    actualizarTodoResultados();

    // Suscripción en tiempo real para que cambie solo al recibir votos
    clienteSupabase
        .channel('cambios_votos')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'votos' }, () => {
            actualizarTodoResultados();
        })
        .subscribe();
}

// app.js

function revisarErroresAuth() {
    const params = new URLSearchParams(window.location.search);
    const errorTipo = params.get('error');
    
    if (params.has('error')) {
        const errorDiv = document.getElementById('auth-error-container');
        const errorMsg = document.getElementById('auth-error-msg');
        
        const mensajesPersonalizados = {
            'access_denied': 'Has cancelado el inicio de sesión o denegado el acceso.',
            'server_error': 'Hubo un problema temporal con el servidor de Discord.',
            'default': 'No se pudo completar el inicio de sesión. Inténtalo de nuevo.'
        };

        if (errorDiv) {
            errorMsg.innerText = mensajesPersonalizados[errorTipo] || mensajesPersonalizados['default'];
            errorDiv.style.display = 'block';
            
            window.history.replaceState({}, document.title, window.location.pathname);
            
            setTimeout(() => { errorDiv.style.display = 'none'; }, 5000);
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', revisarErroresAuth);