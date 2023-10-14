// Game constructor class 
class Game {
	constructor(title, platform, genre, studio) {
		this.title = title; 
		this.platform = platform;
		this.genre = genre;
		this.studio= studio; 
	}
}

class UI { 
// display games 
	static displayGames() {
		const games = Store.getGames();
		games.forEach((game) => {
			UI.addGameToList(game); 
		});
	}
// add game to list 
	static addGameToList(game) {
		const ps3GameList = document.querySelector('#PS3-game-list');
		const ps4GameList = document.querySelector('#PS4-game-list');
		const switchGameList = document.querySelector('#Switch-game-list');
		const newGameDiv = document.createElement('div');
		const ps3Horror = document.querySelector('#PS3-horror'); 

		newGameDiv.classList.add('placeholder-game'); 
		newGameDiv.innerHTML= `
				<div name = "thumb-container" class = "thumb-container"></div>
				<div class = "game-info-box">	
					<div name = "title" class = "title">${game.title}</div>
					<div name = "studio" class = "studio">${game.studio}</div>
				</div>
				<div name = "remove" class = "delete"><i class="fa-solid fa-trash" style="color: #2c2936;"></i></div>
			`;

			
			
		if (game.platform === 'PS3' && game.genre === 'RPG') {		 
			let ps3Rpg = document.querySelector('.PS3-RPG'); 
			if (!ps3Rpg) {
				ps3Rpg = document.createElement('div');
				ps3Rpg.classList.add('genre-box', 'PS3-RPG', 'PS3', 'RPG'); 
				ps3Rpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
				ps3Rpg.appendChild(newGameDiv);
				newGameDiv.style.backgroundColor = '#81cede';				
				ps3GameList.appendChild(ps3Rpg);		
			} 
				ps3Rpg.appendChild(newGameDiv);	
				newGameDiv.style.backgroundColor = '#81cede';  
			
			} else if (game.platform === 'PS3' && game.genre === 'Horror') {
				let ps3Horror = document.querySelector('.PS3-Horror'); 
				if (!ps3Horror) {
					ps3Horror = document.createElement('div');
					ps3Horror.classList.add('genre-box', 'PS3-Horror', 'PS3', 'horror');
					ps3Horror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
					ps3Horror.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#9c676c';					
					ps3GameList.appendChild(ps3Horror);
				} 
					ps3Horror.appendChild(newGameDiv);	
					newGameDiv.style.backgroundColor = '#9c676c';
			
			} else if (game.platform === 'PS3' && game.genre === 'Sports') {
				let ps3Sports = document.querySelector('.PS3-Sports'); 
				if (!ps3Sports) {
					ps3Sports = document.createElement('div');
					ps3Sports.classList.add('genre-box', 'PS3-Sports', 'PS3', 'sports');
					ps3Sports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
					ps3Sports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';			
					ps3GameList.appendChild(ps3Sports);
				} 
					ps3Sports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';

			} else if (game.platform === 'PS3' && game.genre === 'Racing') {
				let ps3Racing = document.querySelector('.PS3-Racing'); 
				if (!ps3Racing) {
					ps3Racing = document.createElement('div');
					ps3Racing.classList.add('genre-box', 'PS3-Racing', 'PS3', 'racing');
					ps3Racing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
					newGameDiv.style.backgroundColor = '#8b8fe0';
					ps3Racing.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Racing);
				} 
					newGameDiv.style.backgroundColor = '#8b8fe0';
					ps3Racing.appendChild(newGameDiv);

			} else if (game.platform === 'PS3' && game.genre === 'Action') {
				let ps3Action = document.querySelector('.PS3-Action'); 
				if (!ps3Action) {
					ps3Action = document.createElement('div');
					ps3Action.classList.add('genre-box', 'PS3-Action', 'PS3', 'action');
					ps3Action.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
					newGameDiv.style.backgroundColor = '#e6ca7e';
					ps3Action.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Action);
				} 
					ps3Action.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#e6ca7e';

			} else if (game.platform === 'PS3' && game.genre === 'Adventure') {
				let ps3Adventure = document.querySelector('.PS3-Adventure'); 
				if (!ps3Adventure) {
					ps3Adventure = document.createElement('div');
					ps3Adventure.classList.add('genre-box', 'PS3-Adventure', 'PS3', 'adventure');
					ps3Adventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
					newGameDiv.style.backgroundColor = '#9c755c';
					ps3Adventure.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Adventure);
				} 
					newGameDiv.style.backgroundColor = '#9c755c';
					ps3Adventure.appendChild(newGameDiv);

			} else if (game.platform === 'PS3' && game.genre === 'Simulation') {
				let ps3Simulation = document.querySelector('.PS3-Simulation'); 
				if (!ps3Simulation) {
					ps3Simulation = document.createElement('div');
					ps3Simulation.classList.add('genre-box', 'PS3-Simulation', 'PS3', 'simulation');
					ps3Simulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
					newGameDiv.style.backgroundColor = '#e4e9f0';
					ps3Simulation.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Simulation);
				} 
					newGameDiv.style.backgroundColor = '#e4e9f0';
					ps3Simulation.appendChild(newGameDiv);

			} else if (game.platform === 'PS3' && game.genre === 'Fighting') {
				let ps3Fighting = document.querySelector('.PS3-Fighting'); 
				if (!ps3Fighting) {
					ps3Fighting = document.createElement('div');
					ps3Fighting.classList.add('genre-box', 'PS3-Fighting', 'PS3', 'fighting');
					ps3Fighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
					newGameDiv.style.backgroundColor = '#db9865';
					ps3Fighting.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Fighting);
				} 
					ps3Fighting.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#db9865';

			} else if (game.platform === 'PS3' && game.genre === 'FPS') {
				let ps3Fps = document.querySelector('.PS3-FPS'); 
				if (!ps3Fps) {
					ps3Fps = document.createElement('div');
					ps3Fps.classList.add('genre-box', 'PS3-FPS', 'PS3', 'FPS');
					ps3Fps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>FPS</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
					newGameDiv.style.backgroundColor = '#bbc2c4';
					ps3Fps.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Fps); 
				} 
					newGameDiv.style.backgroundColor = '#bbc2c4';
					ps3Fps.appendChild(newGameDiv);

			} else if (game.platform === 'PS3' && game.genre === 'Platformer') {
				let ps3Platformer = document.querySelector('.PS3-Platformer'); 
				if (!ps3Platformer) {
					ps3Platformer = document.createElement('div');
					ps3Platformer.classList.add('genre-box', 'PS3-Platformer', 'PS3');
					ps3Platformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
					ps3Platformer.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Platformer); 
				} 
					ps3Platformer.appendChild(newGameDiv);

			} else if (game.platform === 'PS3' && game.genre === 'Strategy') {
				let ps3Strategy = document.querySelector('.PS3-Strategy'); 
				if (!ps3Strategy) {
					ps3Strategy = document.createElement('div');
					ps3Strategy.classList.add('genre-box', 'PS3-Strategy', 'PS3', 'strategy');
					ps3Strategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
					newGameDiv.style.backgroundColor = '#dba2e0';
					ps3Strategy.appendChild(newGameDiv);				
					ps3GameList.appendChild(ps3Strategy);
				} 
					newGameDiv.style.backgroundColor = '#dba2e0';
					ps3Strategy.appendChild(newGameDiv);
			}
			UI.updateGenreBoxes();
			UI.updatePs3Container();
			

 		if (game.platform === 'PS4' && game.genre === 'RPG') {
 			let ps4Rpg = document.querySelector('.PS4-RPG'); 
			if (!ps4Rpg) {
				ps4Rpg = document.createElement('div');
				ps4Rpg.classList.add('genre-box', 'PS4-RPG', 'PS4', 'RPG');
				ps4Rpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
				ps4Rpg.appendChild(newGameDiv);
				newGameDiv.style.backgroundColor = '#81cede';				
				ps4GameList.appendChild(ps4Rpg);
			} 
				ps4Rpg.appendChild(newGameDiv);
				newGameDiv.style.backgroundColor = '#81cede';		
			
			} else if (game.platform === 'PS4' && game.genre === 'Horror') {
				let ps4Horror = document.querySelector('.PS4-Horror'); 
				if (!ps4Horror) {
					ps4Horror = document.createElement('div');
					ps4Horror.classList.add('genre-box', 'PS4-Horror', 'PS4', 'horror');
					ps4Horror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
					ps4Horror.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#9c676c';				
					ps4GameList.appendChild(ps4Horror);
				} 
					ps4Horror.appendChild(newGameDiv);	
					newGameDiv.style.backgroundColor = '#9c676c';
			
			} else if (game.platform === 'PS4' && game.genre === 'Sports') {
				let ps4Sports = document.querySelector('.PS4-Sports'); 
				if (!ps4Sports) {
					ps4Sports = document.createElement('div');
					ps4Sports.classList.add('genre-box', 'PS4-Sports', 'PS4', 'sports');
					ps4Sports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
					ps4Sports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';				
					ps4GameList.appendChild(ps4Sports);
				} 
					ps4Sports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';

			} else if (game.platform === 'PS4' && game.genre === 'Racing') {
				let ps4Racing = document.querySelector('.PS4-Racing'); 
				if (!ps4Racing) {
					ps4Racing = document.createElement('div');
					ps4Racing.classList.add('genre-box', 'PS4-Racing', 'PS4', 'racing');
					ps4Racing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
					newGameDiv.style.backgroundColor = '#8b8fe0';
					ps4Racing.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Racing);
				} 
					newGameDiv.style.backgroundColor = '#8b8fe0';
					ps4Racing.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Action') {
				let ps4Action = document.querySelector('.PS4-Action'); 
				if (!ps4Action) {
					ps4Action = document.createElement('div');
					ps4Action.classList.add('genre-box', 'PS4-Action', 'PS4', 'action');
					ps4Action.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
					newGameDiv.style.backgroundColor = '#e6ca7e';
					ps4Action.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Action);
				} 
					newGameDiv.style.backgroundColor = '#e6ca7e';
					ps4Action.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Adventure') {
				let ps4Adventure = document.querySelector('.PS4-Adventure'); 
				if (!ps4Adventure) {
					ps4Adventure = document.createElement('div');
					ps4Adventure.classList.add('genre-box', 'PS4-Adventure', 'PS4', 'adventure');
					ps4Adventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
					newGameDiv.style.backgroundColor = '#9c755c';
					ps4Adventure.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Adventure);
				} 
					newGameDiv.style.backgroundColor = '#9c755c';
					ps4Adventure.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Simulation') {
				let ps4Simulation = document.querySelector('.PS4-Simulation'); 
				if (!ps4Simulation) {
					ps4Simulation = document.createElement('div');
					ps4Simulation.classList.add('genre-box', 'PS4-Simulation', 'PS4', 'simulation');
					ps4Simulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
					newGameDiv.style.backgroundColor = '#e4e9f0';
					ps4Simulation.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Simulation);
				} 
					newGameDiv.style.backgroundColor = '#e4e9f0';
					ps4Simulation.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Fighting') {
				let ps4Fighting = document.querySelector('.PS4-Fighting'); 
				if (!ps4Fighting) {
					ps4Fighting = document.createElement('div');
					ps4Fighting.classList.add('genre-box', 'PS4-Fighting', 'PS4', 'fighting');
					ps4Fighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
					newGameDiv.style.backgroundColor = '#db9865';
					ps4Fighting.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Fighting);
				} 
					newGameDiv.style.backgroundColor = '#db9865';
					ps4Fighting.appendChild(newGameDiv);



			} else if (game.platform === 'PS4' && game.genre === 'FPS') {
				let ps4Fps = document.querySelector('.PS4-FPS'); 
				if (!ps4Fps) {
					ps4Fps = document.createElement('div');
					ps4Fps.classList.add('genre-box', 'PS4-FPS', 'PS4', 'FPS');
					ps4Fps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3></div>FPS</h3><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
					newGameDiv.style.backgroundColor = '#bbc2c4';
					ps4Fps.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Fps);
				} 
					newGameDiv.style.backgroundColor = '#bbc2c4';
					ps4Fps.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Platformer') {
				let ps4Platformer = document.querySelector('.PS4-Platformer'); 
				if (!ps4Platformer) {
					ps4Platformer = document.createElement('div');
					ps4Platformer.classList.add('genre-box', 'PS4-Platformer', 'PS4');
					ps4Platformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
					ps4Platformer.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Platformer);
				} 
					ps4Platformer.appendChild(newGameDiv);

			} else if (game.platform === 'PS4' && game.genre === 'Strategy') {
				let ps4Strategy = document.querySelector('.PS4-Strategy'); 
				if (!ps4Strategy) {
					ps4Strategy = document.createElement('div');
					ps4Strategy.classList.add('genre-box', 'PS4-Strategy', 'PS4', 'strategy');
					ps4Strategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
					newGameDiv.style.backgroundColor = '#dba2e0';
					ps4Strategy.appendChild(newGameDiv);				
					ps4GameList.appendChild(ps4Strategy); 
				} 
					newGameDiv.style.backgroundColor = '#dba2e0';
					ps4Strategy.appendChild(newGameDiv);
			}
			UI.updateGenreBoxes();
			UI.updatePs4Container(); 

			if (game.platform === 'Switch' && game.genre === 'RPG') {
 			let switchRpg = document.querySelector('.switch-RPG'); 
			if (!switchRpg) {
				switchRpg = document.createElement('div');
				switchRpg.classList.add('genre-box', 'switch-RPG', 'switch', 'RPG');
				switchRpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
				switchRpg.appendChild(newGameDiv);
				newGameDiv.style.backgroundColor = '#81cede';				
				switchGameList.appendChild(switchRpg);
			} 
				switchRpg.appendChild(newGameDiv);
				newGameDiv.style.backgroundColor = '#81cede';	
			
			} else if (game.platform === 'Switch' && game.genre === 'Horror') {
				let switchHorror = document.querySelector('.switch-Horror'); 
				if (!switchHorror) {
					switchHorror = document.createElement('div');
					switchHorror.classList.add('genre-box', 'switch-Horror', 'switch', 'horror');
					switchHorror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
					switchHorror.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#9c676c';				
					switchGameList.appendChild(switchHorror);
				} 
					switchHorror.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#9c676c';	
			
			} else if (game.platform === 'Switch' && game.genre === 'Sports') {
				let switchSports = document.querySelector('.switch-Sports'); 
				if (!switchSports) {
					switchSports = document.createElement('div');
					switchSports.classList.add('genre-box', 'switch-Sports', 'switch', 'sports');
					switchSports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
					switchSports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';				
					switchGameList.appendChild(switchSports);
				} 
					switchSports.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#a7c799';

			} else if (game.platform === 'Switch' && game.genre === 'Racing') {
				let switchRacing = document.querySelector('.switch-Racing'); 
				if (!switchRacing) {
					switchRacing = document.createElement('div');
					switchRacing.classList.add('genre-box', 'switch-Racing', 'switch', 'racing');
					switchRacing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
					newGameDiv.style.backgroundColor = '#8b8fe0';
					switchRacing.appendChild(newGameDiv);				
					switchGameList.appendChild(switchRacing);
				} 
					newGameDiv.style.backgroundColor = '#8b8fe0';
					switchRacing.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Action') {
				let switchAction = document.querySelector('.switch-Action'); 
				if (!switchAction) {
					switchAction = document.createElement('div');
					switchAction.classList.add('genre-box', 'switch-Action', 'switch', 'action');
					switchAction.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
					newGameDiv.style.backgroundColor = '#e6ca7e';
					switchAction.appendChild(newGameDiv);				
					switchGameList.appendChild(switchAction);
				} 
					newGameDiv.style.backgroundColor = '#e6ca7e';
					switchAction.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Adventure') {
				let switchAdventure = document.querySelector('.switch-Adventure'); 
				if (!switchAdventure) {
					switchAdventure = document.createElement('div');
					switchAdventure.classList.add('genre-box', 'switch-Adventure', 'switch', 'adventure');
					switchAdventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
					newGameDiv.style.backgroundColor = '#9c755c';
					switchAdventure.appendChild(newGameDiv);				
					switchGameList.appendChild(switchAdventure);
				} 
					newGameDiv.style.backgroundColor = '#9c755c';
					switchAdventure.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Simulation') {
				let switchSimulation = document.querySelector('.switch-Simulation'); 
				if (!switchSimulation) {
					switchSimulation = document.createElement('div');
					switchSimulation.classList.add('genre-box', 'switch-Simulation', 'switch', 'simulation');
					switchSimulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
					newGameDiv.style.backgroundColor = '#e4e9f0';
					switchSimulation.appendChild(newGameDiv);				
					switchGameList.appendChild(switchSimulation);
				} 
					newGameDiv.style.backgroundColor = '#e4e9f0';
					switchSimulation.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Fighting') {
				let switchFighting = document.querySelector('.switch-Fighting'); 
				if (!switchFighting) {
					switchFighting = document.createElement('div');
					switchFighting.classList.add('genre-box', 'switch-Fighting', 'switch', 'fighting');
					switchFighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
					newGameDiv.style.backgroundColor = '#db9865';
					switchFighting.appendChild(newGameDiv);				
					switchGameList.appendChild(switchFighting);
				} 
					newGameDiv.style.backgroundColor = '#db9865';
					switchFighting.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'FPS') {
				let switchFps = document.querySelector('.switch-FPS'); 
				if (!switchFps) {
					switchFps = document.createElement('div');
					switchFps.classList.add('genre-box', 'switch-FPS', 'switch', 'FPS');
					switchFps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>FPS</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
					newGameDiv.style.backgroundColor = '#bbc2c4';
					switchFps.appendChild(newGameDiv);				
					switchGameList.appendChild(switchFps);
				} 
					newGameDiv.style.backgroundColor = '#bbc2c4';
					switchFps.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Platformer') {
				let switchPlatformer = document.querySelector('.switch-Platformer'); 
				if (!switchPlatformer) {
					switchPlatformer = document.createElement('div');
					switchPlatformer.classList.add('genre-box', 'switch-Platformer', 'switch');
					switchPlatformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
					switchPlatformer.appendChild(newGameDiv);				
					switchGameList.appendChild(switchPlatformer);
				} 
					switchPlatformer.appendChild(newGameDiv);

			} else if (game.platform === 'Switch' && game.genre === 'Strategy') {
				let switchStrategy = document.querySelector('.switch-Strategy'); 
				if (!switchStrategy) {
					switchStrategy = document.createElement('div');
					switchStrategy.classList.add('genre-box', 'switch-Strategy', 'switch', 'strategy');
					switchStrategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
					newGameDiv.style.backgroundColor = '#dba2e0';
					switchStrategy.appendChild(newGameDiv);				
					switchGameList.appendChild(switchStrategy);
				} 
					newGameDiv.style.backgroundColor = '#dba2e0';
					switchStrategy.appendChild(newGameDiv);
			}	
 			UI.updateGenreBoxes();
 			UI.updateSwitchContainer();
	}

		
	static updatePs3Container() {
		const ps3Container = document.querySelector('#PS3-game-list');
		const ps3ContentDivs = document.querySelectorAll('.PS3'); 
		let totalHeight = 90; 

		ps3ContentDivs.forEach((div) => {
			totalHeight += div.offsetHeight;
		}); 

		ps3Container.style.height= totalHeight + 'px'; 

	}

	static updatePs4Container() {
		const ps4Container = document.querySelector('#PS4-game-list');
		const ps4ContentDivs = document.querySelectorAll('.PS4'); 
		let totalHeight = 90; 

		ps4ContentDivs.forEach((div) => {
			totalHeight += div.offsetHeight;
		}); 

		ps4Container.style.height= totalHeight + 'px'; 

	}
	

	static updateSwitchContainer() {
		const switchContainer = document.querySelector('#Switch-game-list');
		const switchContentDivs = document.querySelectorAll('.switch'); 
		let totalHeight = 90; 

		switchContentDivs.forEach((div) => {
			totalHeight += div.offsetHeight;
		}); 

		switchContainer.style.height= totalHeight + 'px'; 
	}

	static updateGenreBox(el) {
		const boxContentDivs = el.querySelectorAll('.placeholder-game'); 
		let totalHeight = 90;

		boxContentDivs.forEach((div) =>{
			totalHeight += div.offsetHeight;
		});
		el.style.height= totalHeight + 'px'; 
	}

	static updateGenreBoxes() {
		const genreBoxes = document.querySelectorAll('.genre-box');

		genreBoxes.forEach((genreBox) => {
			UI.updateGenreBox(genreBox); 
		}); 
	}

// add genre

//remove game 
	static removeGame (el) {
		const parentGenre = el.closest('.genre-box');
		if(el.classList.contains('delete')) {
			el.parentElement.remove(); 
		}else if (el.classList.contains('fa-trash')) {
			el.parentElement.parentElement.remove(); 
		}

		if (parentGenre.childNodes.length === 1) {
			parentGenre.remove(); 
		}
		UI.updateGenreBoxes();
	}

static collapseGenre(el) {
		const genreChildren = Array.from(el.parentElement.parentElement.children);
		const genreBox = el.parentElement.parentElement;
		const caret = genreBox.querySelector('.menu-up');
		genreChildren.forEach((genreChild) =>{
			if (genreChild.classList.contains('placeholder-game') && genreChild.style.display !== 'none') { 
				genreChild.style.display = 'none';
				caret.classList.remove('fa-caret-up');  
				caret.classList.add('fa-caret-down');
			} else if (genreChild.style.display === 'none') {
				genreChild.style.display = 'flex';
				caret.classList.remove('fa-caret-down');
				caret.classList.add('fa-caret-up');
			}
		});
		UI.updateGenreBoxes();
		UI.updatePs3Container();
		UI.updatePs4Container();
		UI.updateSwitchContainer();
	}

//clear fields 
	static clearFields () {
		document.querySelector('#game-title-input').value= ''; 
		document.querySelector('#platform-select').value= ''; 
		document.querySelector('#genre-select').value= ''; 
		document.querySelector('#studio-input').value= ''; 
	}

//show alert
	static showAlert(message, className) {
		const alert = document.createElement('div'); 
		alert.className = `alert alert-${className}`; 
		console.log(alert);
		alert.appendChild(document.createTextNode(message)); 
		document.body.appendChild(alert); 
		setTimeout(() => document.querySelector('.alert').remove(),2000); 
	}
}


// STORAGE STUFF 
	class Store {
	
// Get games 
		static getGames() {
			let games; 
			if(localStorage.getItem('games') === null) {
				games = [];
			} else {
				games = JSON.parse(localStorage.getItem('games'));
			}
			return games; 
		}
//Add game to storage 
		static addGame(game) {
			const games =Store.getGames();
			games.push(game);
			localStorage.setItem('games', JSON.stringify(games));
		}

//add genre to storage (don't need? part of the constructor class?)

//remove game from storage 
		static removeGame(title) {
			const games = Store.getGames();
			games.forEach((game, index) => {
				if (game.title === title) {
					games.splice(index, 1); 
				}
			});
			localStorage.setItem('games', JSON.stringify(games)); 
		}
//remove genre from storage (also don't need?)
}

//EVENT LISTENERS

// Submit 
document.querySelector('#visible-submit-button').addEventListener('click', (e) => {
	const title = document.querySelector('#game-title-input').value; 
	const platform = document.querySelector('#platform-select').value;
	const genre = document.querySelector('#genre-select').value;
	const studio = document.querySelector('#studio-input').value; 
	console.log(platform); 
	if(title === '' || platform === '' || genre === '' || studio === '') {
		UI.showAlert('please fill all fields', 'failure');
	} else {
		const game = new Game(title, platform, genre, studio);
		UI.addGameToList(game);
		Store.addGame(game); 
		UI.showAlert('Game added to collection!', 'success'); 
		UI.clearFields(); 
	}
}); 

document.querySelector('#hidden-submit-button').addEventListener('click', (e) => {
	const title = document.querySelector('#game-title-input').value; 
	const platform = document.querySelector('#platform-select').value;
	const genre = document.querySelector('#genre-select').value;
	const studio = document.querySelector('#studio-input').value; 
	if(title === '' || platform === '' || genre === '' || studio === '') {
		UI.showAlert('please fill all fields', 'failure');
	} else {
		const game = new Game(title, platform, genre, studio);
		UI.addGameToList(game);
		Store.addGame(game); 
		UI.showAlert('Game added to collection!', 'success'); 
		UI.clearFields(); 
	}
}); 




//DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
	UI.displayGames(); 	
	UI.updatePs3Container(); 
	UI.updatePs4Container(); 
	UI.updateSwitchContainer(); 
	UI.updateGenreBoxes();
}); 

// remove 
document.querySelector('.game-collection-container',).addEventListener('click', (e) => {
	if (e.target.classList.contains('delete') || e.target.classList.contains('fa-trash')) {
		const gameTitle = e.target.closest('.placeholder-game').querySelector('.title').textContent; 
		UI.removeGame(e.target);
		Store.removeGame(gameTitle);
		UI.updatePs3Container(); 
		UI.updatePs4Container(); 
		UI.updateSwitchContainer(); 
		UI.showAlert('Game removed from collection', 'success')		
	}
});

//collapse menu on click
document.querySelector('.game-collection-container').addEventListener('click', (e) => {
	if (e.target.classList.contains('menu-up')) {
		console.log('caret clicked!'); 
		UI.collapseGenre(e.target); 
	}
});



const platform = document.querySelector('#platform-select');


platform.addEventListener('change', () => {
	const platformSelected = platform.value; 
	console.log(platformSelected);
});

window.addEventListener('resize', () => {
	UI.updateGenreBoxes();
	UI.updatePs3Container();
	UI.updatePs4Container();
	UI.updateSwitchContainer(); 
});

//localStorage.clear();