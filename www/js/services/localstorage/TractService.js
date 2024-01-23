var TractService = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store sample data in Local Storage
        window.localStorage.setItem("tracts", JSON.stringify(
			 [
				{"id": 0, "name":"Albanian", "file":"files/AlnEng4.html", "local":"Y"},
				{"id": 1, "name":"Acholi", "file":"files/AcoEng4.html", "local":"Y"},
				{"id": 2, "name":"Cebuano", "file":"files/CebEng4.html", "local":"Y"},
				{"id": 3, "name":"Chinese (Traditional)", "file":"files/Chn1Eng4.html", "local":"Y"},
				{"id": 4, "name":"Chinese (Simplified)", "file":"files/ChnEng4.html", "local":"Y"},
				{"id": 5, "name":"Arabic", "file":"files/AraEngM.html", "local":"Y"},
				{"id": 6, "name":"Dinka", "file":"files/DinEng4.html", "local":"Y"},
				{"id": 7, "name":"Danish", "file":"files/DnsEng4.html", "local":"Y"},
				{"id": 8, "name":"Dutch", "file":"files/DutEng4.html", "local":"Y"},
				{"id": 9, "name":"Fijian", "file":"files/FjiEng4.html", "local":"Y"},
				{"id": 10, "name":"Estonian", "file":"files/EstEng4.html", "local":"Y"},
				{"id": 11, "name":"Greek", "file":"files/GrkEngK.html", "local":"Y"},
				{"id": 12, "name":"French", "file":"files/FrnEngK.html", "local":"Y"},
				{"id": 13, "name":"French (special)", "file":"files/FrnEngM.html", "local":"Y"},
				{"id": 14, "name":"German", "file":"files/GerEngK.html", "local":"Y"},
				{"id": 15, "name":"Haitian", "file":"files/HatEng4.html", "local":"Y"},
				{"id": 16, "name":"Hungarian", "file":"files/HngEng4.html", "local":"Y"},
				{"id": 17, "name":"Ilocano", "file":"files/IloEng4.html", "local":"Y"},
				{"id": 18, "name":"Indonesian", "file":"files/IndEng4.html", "local":"Y"},
				{"id": 19, "name":"Indonesan (special)", "file":"files/IndEngM.html", "local":"Y"},
				{"id": 20, "name":"Italian", "file":"files/ItaEng4.html", "local":"Y"},
				{"id": 21, "name":"Mongolian", "file":"files/KhkEng4.html", "local":"Y"},
				{"id": 22, "name":"Hindi", "file":"files/HndEng4.html", "local":"Y"},
				{"id": 23, "name":"Japanese", "file":"files/JpnEng4.html", "local":"Y"},
				{"id": 24, "name":"Latvian", "file":"files/LatEng4.html", "local":"Y"},
				{"id": 25, "name":"Korean", "file":"files/KknEng4.html", "local":"Y"},
				{"id": 26, "name":"Malagasy", "file":"files/MexEng4.html", "local":"Y"},
				{"id": 27, "name":"Nuer", "file":"files/NusEng4.html", "local":"Y"},
				{"id": 28, "name":"Oromo (central)", "file":"files/Oro1Eng4.html", "local":"Y"},
				{"id": 29, "name":"Farsi", "file":"files/PesEngM.html", "local":"Y"},
				{"id": 30, "name":"Polish", "file":"files/PolEng4.html", "local":"Y"},
				{"id": 31, "name":"Afrikaans", "file":"files/AfkEng4.html", "local":"Y"},
				{"id": 32, "name":"Pedi", "file":"files/SrtEng4.html", "local":"Y"},
				{"id": 33, "name":"Brazilian Portuguese", "file":"files/Por2Eng4.html", "local":"Y"},
				{"id": 34, "name":"Romanian", "file":"files/RumEng4.html", "local":"Y"},
				{"id": 35, "name":"Russian", "file":"files/RusEng4.html", "local":"Y"},
				{"id": 36, "name":"Russian (Central Asia)", "file":"files/RusEngM.html", "local":"Y"},
				{"id": 37, "name":"Setswana", "file":"files/SetEng4.html", "local":"Y"},
				{"id": 38, "name":"Serbian", "file":"files/SerEng4.html", "local":"Y"},
				{"id": 39, "name":"Somali", "file":"files/SomEng4.html", "local":"Y"},
				{"id": 40, "name":"Spanish", "file":"files/Spn2Eng4.html", "local":"Y"},
				{"id": 41, "name":"Croatian", "file":"files/SrcEng4.html", "local":"Y"},
				{"id": 42, "name":"Swahili", "file":"files/SwaEng4.html", "local":"Y"},
				{"id": 43, "name":"Tagalog", "file":"files/TagEng4.html", "local":"Y"},
				{"id": 44, "name":"Sinhala", "file":"files/SinEng4.html", "local":"Y"},
				{"id": 45, "name":"Thai", "file":"files/ThjEng4.html", "local":"Y"},
				{"id": 46, "name":"Finnish", "file":"files/FinEng4.html", "local":"Y"},
				{"id": 47, "name":"Turkish", "file":"files/TrkEngM.html", "local":"Y"},
				{"id": 48, "name":"Urdu", "file":"files/UrdEng4.html", "local":"Y"},
				{"id": 49, "name":"Norwegian", "file":"files/NorEng4.html", "local":"Y"},
				{"id": 50, "name":"Bulgarian", "file":"files/BulEng4.html", "local":"Y"},
				{"id": 51, "name":"Kazakh", "file":"files/KazEng4.html", "local":"Y"},
				{"id": 52, "name":"Bambara", "file":"files/BamEng4.html", "local":"Y"},
				{"id": 53, "name":"Changane", "file":"files/ChaEng4.html", "local":"Y"},
				{"id": 54, "name":"Czech", "file":"files/CzcEng4.html", "local":"Y"},
				{"id": 55, "name":"Dinka Bor", "file":"files/DibEng4.html", "local":"Y"},
				{"id": 56, "name":"Ekegussii", "file":"files/GuzEng4.html", "local":"Y"},
				{"id": 57, "name":"Hebrew", "file":"files/HebEngJ.html", "local":"Y"},
				{"id": 58, "name":"Yiddish", "file":"files/YidEngJ.html", "local":"Y"},
				{"id": 59, "name":"Hausa", "file":"files/HuaEng4.html", "local":"Y"},
				{"id": 60, "name":"Ibo", "file":"files/IgrEng4.html", "local":"Y"},
				{"id": 61, "name":"Kalenjin", "file":"files/KalEng4.html", "local":"Y"},
				{"id": 62, "name":"Kamba", "file":"files/KikEng4.html", "local":"Y"},
				{"id": 63, "name":"Kinyarawandan", "file":"files/RuaEng4.html", "local":"Y"},
				{"id": 64, "name":"Luba Kaonde", "file":"files/KqnEng4.html", "local":"Y"},
				{"id": 65, "name":"Shona", "file":"files/ShdEng4.html", "local":"Y"},
				{"id": 66, "name":"Sotho", "file":"files/SsoEng4.html", "local":"Y"},
				{"id": 67, "name":"Zaire Swahili", "file":"files/Swa2Eng4.html", "local":"Y"},
				{"id": 68, "name":"Swedish", "file":"files/SweEng4.html", "local":"Y"},
				{"id": 69, "name":"Tongan", "file":"files/TovEng4.html", "local":"Y"},
				{"id": 70, "name":"Siswati", "file":"files/SwzEng4.html", "local":"Y"},
				{"id": 71, "name":"Tsonga", "file":"files/TsoEng4.html", "local":"Y"},
				{"id": 72, "name":"Tswana", "file":"files/TswEng4.html", "local":"Y"},
				{"id": 73, "name":"Akuapwim Twi", "file":"files/TwsEng4.html", "local":"Y"},
				{"id": 74, "name":"Tyap", "file":"files/TyaEng4.html", "local":"Y"},
				{"id": 75, "name":"Xhosa", "file":"files/XosEng4.html", "local":"Y"},
				{"id": 76, "name":"Zulu", "file":"files/ZuuEng4.html", "local":"Y"},
				{"id": 77, "name":"Tibetan", "file":"files/TibEng4.html", "local":"Y"},
				{"id": 78, "name":"Ukrainian", "file":"files/UkrEng4.html", "local":"Y"},
				{"id": 79, "name":"Vietnamese (university)", "file":"files/VieEng4.html", "local":"Y"},
				{"id": 80, "name":"English", "file":"files/Eng4.htm", "local":"Y"},
				{"id": 81, "name":"Konkani", "file":"files/GomEng4.html", "local":"Y"},
				{"id": 82, "name":"Aymara", "file":"files/AymEng4.html", "local":"Y"},
				{"id": 83, "name":"Bicolano", "file":"files/BclEng4.html", "local":"Y"},
				{"id": 84, "name":"Chibemba", "file":"files/BemEng4.html", "local":"Y"},
				{"id": 85, "name":"Bukusu", "file":"files/BxkEng4.html", "local":"Y"},
				{"id": 86, "name":"Runyoro", "file":"files/NyoEng4.html", "local":"Y"},
				
				
				
				]
        ));
		deferred.resolve();
        return deferred.promise();
    }
    this.findById = function (id) {

        var deferred = $.Deferred(),
            tracts = JSON.parse(window.localStorage.getItem("tracts")),
            tract = null,
            l = tracts.length;

        for (var i = 0; i < l; i++) {
            if (tracts[i].id === id) {
                tract = tracts[i];
                break;
            }
        }
		if (tract.local){
			$.ajax({url: tract.file, success: function(result){
				 tract.text = result;
				 deferred.resolve(tract);
			 }});
        }
		else{
		  tract.text = downloadFile(tract.website);
			deferred.resolve(tract);
			
		}
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
        tracts = JSON.parse(window.localStorage.getItem("tracts")),
            results = tracts.filter(function (element) {
                var name = element.name;
			   return name.toLowerCase().indexOf(searchKey.toLowerCase())== 0;
            });
		results.sort(SortByName);
        deferred.resolve(results);
        return deferred.promise();
    }
	this.findAll= function(){
		var deferred = $.Deferred(),
		tracts = JSON.parse(window.localStorage.getItem("tracts")),
			results = tracts.sort(SortByName);
		deferred.resolve(results);
		return deferred.promise();
	 
		
	}

}

function SortByName(a, b){
  var aName = a.name.toLowerCase();
  var bName = b.name.toLowerCase(); 
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}



