Game.updates = (function(){
	
	var instance = {};

	instance.versionNumber = 1;
	instance.updateRead = false;

	instance.updateTemplate = Handlebars.compile('<li><span>{{desc}}</span></li>');

	instance.initialise = function(){
		for(var id in Game.updatesData) {
            this.createDisplay(Game.updatesData[id]);
        }
    	if(this.updateRead === false){
    		document.getElementById("updateAlert").className = "hidden";
    	}
	}

	instance.createDisplay = function(self){
		if(self.read == false){
			var target = $('#updateLog');
	        var html = this.updateTemplate(self);
	        target.append($(html));
	        self.read = true;
	        this.updateRead = true;
		}
	}

	instance.save = function(data){
		data.updates = {versionNumber: 1, entries: {}};
		for(var id in Game.updatesData){
			data.updates.entries[id] = Game.updatesData[id];
		}
	}

	instance.load = function(data){
		if(data.updates) {
			if(data.updates.versionNumber && data.updates.versionNumber == 1){
				Game.updates.versionNumber = data.versionNumber;
				for(var id in data.updates.entries){
					Game.updatesData[id] = data.updates.entries[id];
				}
			}
		}
	}

	instance.getUpdateData = function(id) {
        return Game.updatesData[id];
    };

	return instance;

}());

Game.updatesData = (function(){

	var instance = {};

	instance.nerfEnergyEff = {
		desc: 'Nerfed Energy Efficiency to be 100x cheaper, but only go up to 25%',
		read: false
	};

	instance.batteryEff = {
		desc: 'Battery Efficiency Upgrade increases your battery storage by 1% (max 50)',
		read: false
	};

	instance.multiResearchLevel = {
		desc: 'Changed Multibuy researches to show current level instead of next level',
		read: false
	};

	// instance.XXXX4 = {
	// 	desc: 'XXXX4',
	// 	read: false
	// };

	return instance;

}());