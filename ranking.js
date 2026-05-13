/* ranking.js */

async function cargarRanking() {
    const { data: votos, error } = await clienteSupabase
        .from('votos')
        .select('username, avatar_url, encuesta_id, opcion_id');

    if (error) return console.error("Error:", error);

    const mapaRanking = votos.reduce((acc, v) => {
        if (!acc[v.username]) {
            acc[v.username] = { 
                nombre: v.username, 
                avatar: v.avatar_url, 
                puntos: 0
            };
        }

        const usuario = acc[v.username];
        usuario.puntos += 25;

        const partidaInfo = PARTIDAS.find(p => p.id_db === v.encuesta_id);
        if (partidaInfo && (partidaInfo.ganador_id === v.opcion_id)) {
            usuario.puntos += 75;
        }

        return acc;
    }, {});

    const rankingOrdenado = Object.values(mapaRanking).sort((a, b) => b.puntos - a.puntos);
    renderizarTabla(rankingOrdenado);
}

function renderizarTabla(lista) {
    const tbody = document.getElementById('ranking-body');
    if (!tbody) return;

    tbody.innerHTML = lista.map((user, index) => {
        const posicion = index + 1;
        let iconoPosicion = posicion;
        let clasePodio = '';

        if(posicion === 1) { iconoPosicion = '🥇'; clasePodio = 'top-1'; }
        else if(posicion === 2) { iconoPosicion = '🥈'; clasePodio = 'top-2'; }
        else if(posicion === 3) { iconoPosicion = '🥉'; clasePodio = 'top-3'; }

        return `
            <tr class="fila-ranking ${clasePodio}">
                <td class="posicion">${iconoPosicion}</td>
                <td class="usuario-info">
                    <img src="${user.avatar || 'https://via.placeholder.com/40'}" class="avatar-ranking">
                    <span class="user-name-table">${user.nombre}</span>
                </td>
                <td class="votos-count txt-derecha">${user.puntos} <small>PTS</small></td>
            </tr>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', cargarRanking);