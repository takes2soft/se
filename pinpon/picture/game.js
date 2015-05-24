enchant();
/*
Core : ゲーム本体
- rootScene
-- Sprite(pandaオブジェクト)


*/
window.onload = function(){

	GAMEN_WIDTH = 720;
	GAMEN_HEIGHT = 960;

	game = new Game(GAMEN_WIDTH,GAMEN_HEIGHT);
	game.preload(['pinpon.jpg','pinpon.mp3','blank.png']);
	game.fps = 12;
	
	game.onload = function(){
		//背景
		var scene = game.rootScene;
		
		//チャイム画像表示
		var pinpon = new Sprite(427,640);
		pinpon.image = game.assets['pinpon.jpg'];
		
		//チャイムボタン
		var button = new Sprite(64,64);
		button.image = game.assets['blank.png'];
		button.x = 200;
		button.y = 150;
		button.scale(2,2);
		
		var sound = null;
		//チャイム音
		button.addEventListener('touchstart',function(){
			if(sound){
				sound.stop();
				se = null;
			}
			sound = game.assets['pinpon.mp3'].clone();
        	sound.play();
		});

		//rootSceneに追加。
		game.rootScene.addChild(pinpon);
		game.rootScene.addChild(button);

	}
	game.start();
	//game.debug();

};