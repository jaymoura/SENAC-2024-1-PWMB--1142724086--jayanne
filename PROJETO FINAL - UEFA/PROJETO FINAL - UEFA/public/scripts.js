document.addEventListener('DOMContentLoaded', function() {
    const matchesTableBody = document.querySelector('#matchesTable tbody');
    const teamsList = document.querySelector('#teamsList');

    // Função para buscar dados das partidas
    async function fetchMatches() {
        try {
            const response = await fetch('/api/matches');
            const matches = await response.json();

            // Limpar a tabela antes de adicionar novos dados
            matchesTableBody.innerHTML = '';

            // Adicionar cada partida à tabela
            matches.forEach(match => {
                const row = document.createElement('tr');
                
                const dateCell = document.createElement('td');
                dateCell.textContent = match.date;
                row.appendChild(dateCell);
                
                const timeCell = document.createElement('td');
                timeCell.textContent = match.time;
                row.appendChild(timeCell);
                
                const locationCell = document.createElement('td');
                locationCell.textContent = match.location;
                row.appendChild(locationCell);
                
                const teamsCell = document.createElement('td');
                teamsCell.textContent = `${match.home_team} vs ${match.away_team}`;
                row.appendChild(teamsCell);
                
                const resultCell = document.createElement('td');
                resultCell.textContent = match.result;
                row.appendChild(resultCell);
                
                matchesTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Erro ao buscar dados das partidas:', error);
        }
    }

    // Função para buscar dados dos times
    async function fetchTeams() {
        try {
            const response = await fetch('/api/teams');
            const teams = await response.json();

            // Limpar a lista de times antes de adicionar novos dados
            teamsList.innerHTML = '';

            // Adicionar cada time à lista
            teams.forEach(team => {
                const listItem = document.createElement('li');
                listItem.textContent = team.name;
                teamsList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Erro ao buscar dados dos times:', error);
        }
        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-item');
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            const offset = -currentSlide * 100;
            document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        }
    
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
    
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
    
        // Optionally, auto-slide every 5 seconds
        setInterval(nextSlide, 3000);
    }

    // Chamar as funções para buscar e exibir os dados
    fetchMatches();
    fetchTeams();
});
