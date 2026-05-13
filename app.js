const URL_DB = 'https://alabguheaspsowahilzc.supabase.co';
const KEY_DB = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsYWJndWhlYXNwc293YWhpbHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMjQ4NjcsImV4cCI6MjA5MjkwMDg2N30.qne7wPdHbR8H4l4oE_Cm3edKfo3gSsxJNkcyQt4RyAk';

const clienteSupabase = supabase.createClient(URL_DB, KEY_DB);
let encuestasCompletadas = []; 

// 2. Detección de errores de autenticación personalizados
function revisarErroresAuth() {
    const params = new URLSearchParams(window.location.search);
    const errorTipo = params.get('error');
    
    if (params.has('error')) {
        const errorDiv = document.getElementById('auth-error-container');
        const errorMsg = document.getElementById('auth-error-msg');
        
        const mensajes = {
            'access_denied': 'Has cancelado el inicio de sesión o denegado el acceso.',
            'server_error': 'Hubo un problema con el servidor de Discord.',
            'default': 'No se pudo completar el inicio de sesión. Inténtalo de nuevo.'
        };

        if (errorDiv) {
            errorMsg.innerText = mensajes[errorTipo] || mensajes['default'];
            errorDiv.style.display = 'block';
            window.history.replaceState({}, document.title, window.location.pathname);
            setTimeout(() => { errorDiv.style.display = 'none'; }, 6000);
        }
    }
}

// 3. Funciones globales de acceso
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

// 4. Lógica visual y de votación
function marcarOpcionSeleccionada(opcionId) {
    const botonClickeado = document.querySelector(`[onclick="votar('${opcionId}')"]`);
    if (!botonClickeado) return;

    const grupoEncuesta = botonClickeado.closest('.grupo-encuesta');
    if (!grupoEncuesta) return;

    grupoEncuesta.querySelectorAll('.opcion-voto').forEach(boton => {
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

async function verificarVotosUsuario(user) {
    if (!user) return;
    const { data: votos } = await clienteSupabase
        .from('votos')
        .select('opcion_id, encuesta_id')
        .eq('discord_id', user.user_metadata.sub);

    if (votos) {
        votos.forEach(v => {
            if (!encuestasCompletadas.includes(v.encuesta_id)) encuestasCompletadas.push(v.encuesta_id);
            marcarOpcionSeleccionada(v.opcion_id);
        });
    }
}

// 5. Escucha de sesión
clienteSupabase.auth.onAuthStateChange((event, session) => {
    const authSection = document.getElementById('auth-section');
    if (!authSection) return;

    if (session?.user) {
        authSection.innerHTML = `
            <div class="user-profile">
                <img src="${session.user.user_metadata.avatar_url}" alt="Avatar" class="user-avatar">
                <span class="user-name">${session.user.user_metadata.full_name || "Usuario"}</span>
                <button onclick="cerrarSesion()" class="btn-logout">×</button>
            </div>`;
        verificarVotosUsuario(session.user);
    } else {
        authSection.innerHTML = `<a href="#" onclick="loginConDiscord()">Login</a>`;
    }
});

// 6. Acción de votar

async function votar(opcionId) {
    const partidaActual = PARTIDAS.find(p => p.opciones.some(o => o.id === opcionId));
    if (!partidaActual) return;

    const ahoraUnix = Math.floor(Date.now() / 1000);

    if (ahoraUnix > partidaActual.clausura) {
        mostrarModal("Fuera de tiempo", "El tiempo para votar en este encuentro ha finalizado.");
        return;
    }

    const idEncuesta = partidaActual.id_db;
    if (encuestasCompletadas.includes(idEncuesta)) return;

    const { data: { session } } = await clienteSupabase.auth.getSession();
    if (!session?.user) {
        mostrarModal("Sesión Requerida", "Conecta tu cuenta de Discord", true);
        return;
    }

    const { error } = await clienteSupabase.from('votos').insert([{
        encuesta_id: idEncuesta,
        discord_id: session.user.user_metadata.sub,
        opcion_id: opcionId,
        avatar_url: session.user.user_metadata.avatar_url,
        username: session.user.user_metadata.full_name || "Usuario"
    }]);

    if (!error) {
        encuestasCompletadas.push(idEncuesta);
        marcarOpcionSeleccionada(opcionId);
        mostrarModal("¡Éxito!", "Voto registrado correctamente");
    }
}

// 7. Modales y Resultados
function mostrarModal(t, m, l = false) {
    const modal = document.getElementById('custom-modal');
    if (!modal) return;
    document.getElementById('modal-title').innerText = t;
    document.getElementById('modal-text').innerText = m;
    const btn = document.getElementById('modal-primary-btn');
    btn.innerHTML = l ? `Inicia sesión con <i class="fa-brands fa-discord"></i>` : "Entendido";
    btn.onclick = l ? () => { cerrarModal(); loginConDiscord(); } : cerrarModal;
    modal.style.display = 'flex';
}

function cerrarModal() {
    const m = document.getElementById('custom-modal');
    if (m) { m.classList.add('cerrando'); setTimeout(() => { m.style.display = 'none'; m.classList.remove('cerrando'); }, 300); }
}

// Cerrar modal al pulsar fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('custom-modal');
    if (e.target === modal) cerrarModal();
});

document.addEventListener('DOMContentLoaded', revisarErroresAuth);

// LÓGICA DE RESULTADOS

async function actualizarTodoResultados() {
    const { data: votos, error } = await clienteSupabase
        .from('votos')
        .select('opcion_id, avatar_url, username');

    if (error || !votos) return;

    const contenedor = document.getElementById('lista-resultados');
    if (!contenedor) return;

    const conteo = votos.reduce((acc, v) => {
        acc[v.opcion_id] = (acc[v.opcion_id] || 0) + 1;
        return acc;
    }, {});

    contenedor.innerHTML = PARTIDAS.map(partida => {
        const opcA = partida.opciones[0];
        const opcB = partida.opciones[1];
        const vA = conteo[opcA.id] || 0;
        const vB = conteo[opcB.id] || 0;
        const total = vA + vB;

        const porcA = total > 0 ? Math.round((vA / total) * 100) : 50;
        const porcB = total > 0 ? 100 - porcA : 50;

        return `
            <div class="grupo-resultado-encuesta dispute-mode">
                <div class="dispute-header">
                    <span class="dispute-title">${partida.titulo}</span>
                    <span class="dispute-total">${total} votos totales</span>
                </div>
                
                <div class="dispute-container">
                    <div class="team-info left">
                        <span class="team-name">${opcA.nombre}</span>
                        <span class="team-percent">${porcA}%</span>
                    </div>

                    <div class="dispute-bar-bg">
                        <div class="dispute-fill left" style="width: ${porcA}%"></div>
                        <div class="dispute-fill right" style="width: ${porcB}%"></div>
                    </div>

                    <div class="team-info right">
                        <span class="team-percent">${porcB}%</span>
                        <span class="team-name">${opcB.nombre}</span>
                    </div>
                </div>
                <div class="dispute-votes-footer">
                    <span>${vA} votos</span>
                    <span>${vB} votos</span>
                </div>
            </div>`;
    }).join('');

    const contenedorAvatares = document.getElementById('avatares-recientes');
    if (contenedorAvatares) {
        const mapaUsuarios = new Map();
        const usuariosUnicos = [...votos].reverse().filter(v => v.avatar_url && !mapaUsuarios.has(v.username) && mapaUsuarios.set(v.username, true)).slice(0, 12);
        contenedorAvatares.innerHTML = usuariosUnicos.map(v => `<img src="${v.avatar_url}" class="avatar-voto" title="${v.username}">`).join('') || '<p>Sin votos aún</p>';
    }
}

if (window.location.pathname.includes('resultados.html')) {
    actualizarTodoResultados();
    clienteSupabase.channel('cambios_votos').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'votos' }, actualizarTodoResultados).subscribe();
}
