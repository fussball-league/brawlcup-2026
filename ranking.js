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
                puntos: 0,
                aciertos: 0
            };
        }

        const usuario = acc[v.username];
        usuario.puntos += 25; 

        const partidaInfo = PARTIDAS.find(p => p.id_db === v.encuesta_id);
        
        if (partidaInfo && (partidaInfo.ganador_id === v.opcion_id)) {
            usuario.puntos += 75;
            usuario.aciertos += 1; 
        }

        return acc;
    }, {});

    const rankingOrdenado = Object.values(mapaRanking).sort((a, b) => b.puntos - a.puntos);

    renderizarPodio(rankingOrdenado);
    renderizarTabla(rankingOrdenado.slice(3));
}

function renderizarPodio(lista) {
    const contenedor = document.getElementById('podio-container');
    if (!contenedor || lista.length === 0) return;

    const tops = [
        { ...lista[0], rank: 1, medal: '🥇' },
        { ...lista[1], rank: 2, medal: '🥈' },
        { ...lista[2], rank: 3, medal: '🥉' }
    ].filter(user => user.nombre !== undefined);
    
    contenedor.innerHTML = tops.map(user => `
    <div class="podio-item podio-${user.rank}">
        <div class="podio-medal">
            ${user.medal} 
            <span style="font-size: 1.2rem; font-weight: 900; margin-left: 5px;">${user.puntos}</span>
        </div>
        <img src="${user.avatar || 'https://via.placeholder.com/80'}" class="podio-avatar">
        <span class="podio-name">${user.nombre}</span>
        <div class="podio-stats">
            <p><i class="fa-solid fa-trophy"></i> ${user.aciertos} Aciertos</p>
        </div>
    </div>
`).join('');

function renderizarTabla(lista) {
    const tbody = document.getElementById('ranking-body');
    if (!tbody) return;

    tbody.innerHTML = lista.map((user, index) => {
        const posicion = index + 4;

        return `
            <tr class="fila-ranking">
                <td class="col-centrada">${posicion}</td>
                <td class="usuario-info col-centrada">
                    <img src="${user.avatar || 'https://via.placeholder.com/40'}" class="avatar-ranking">
                    <span class="user-name-table">${user.nombre}</span>
                </td>
                <td class="col-centrada">
                    <i class="fa-solid fa-trophy" style="color: rgba(255, 215, 0, 0.4); font-size: 0.8rem;"></i> 
                    ${user.aciertos}
                </td>
                <td class="votos-count col-centrada">${user.puntos} <small>PTS</small></td>
            </tr>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', cargarRanking);
