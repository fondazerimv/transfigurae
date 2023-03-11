var div1bol = false;
var div2bol = false;

function zoomist_change(link, id) {
  var htmlarray = document.getElementById(id).innerHTML.split(" ");
  htmlarray[11] = "src='" + String(link) + "'";
  document.getElementById(id).zoomist["url"] = link;
  document.getElementById(id).zoomist["image"]["attributes"][1] = "'" + String(link) + "'";
  document.getElementById(id).zoomist["image"]["src"] = link;
  document.getElementById(id).zoomist["image"]["currentSrc"] = link;
}

function divcompiler(image, comment) {

  classOfPars = document.getElementsByClassName("comparimg_txt");

  if (div1bol == false) {
    Object.values($(".comparimg"))[0].style.display = "block"
    zoomist_change(image, "my-zoomist1");
    console.log(Object.values(classOfPars)[0])
    Object.values(classOfPars)[0].innerHTML = comment;
    div1bol = true;
  } else {

    if (div2bol == false) {
      Object.values($(".comparimg"))[1].style.display = "block"
      zoomist_change(image, "my-zoomist2")
      Object.values(classOfPars)[1].innerHTML = comment;
      console.log(comment)
      div2bol = true;
    } else {
      div1bol = false;
      div2bol = false;
    }
  }

}

function selector(n) {

  jsondata = {
    "0": {
      "path": "images/StCaterina.jpg",
      "labels": "Santa Caterina al Sinai <br> mosaico absidale"
    },
    "1": {
      "path": "images/NereoAchilleo.jpg",
      "labels": "Roma, Santissimi Nereo ed Achilleo <br> mosaico dell'arco trionfale"
    },
    "2": {
      "path": "images/Daphni.jpg",
      "labels": "Chaidari, Moní Dafníou <br> mosaico della navata centrale "
    },
    "3": {
      "path": "images/Kakopetria.jpg",
      "labels": "Kakopetria, Hagios Nikolaos tis Stegis <br> pittura murale nella volta ovest della navata "
    },
    "4": {
      "path": "images/NeaMoni.jpg",
      "labels": "Chios, Néa Moní <br> mosaico nella volta del naos"
    },
    "5": {
      "path": "images/Porta.jpg",
      "labels": "Teodoro greco e Staurachio di Scio <br> Roma, San Paolo fuori le Mura <br> formella bronzea del portale maggiore "
    },
    "6": {
      "path": "images/IconaSinai.jpeg",
      "labels": "Santa Caterina al Sinai <br> icona"
    },
    "7": {
      "path": "images/Melisenda.jpg",
      "labels": "Londra, British Library <br> <i>Salterio di Melisenda</i>, ms. Egerton 1139, c. 4v"
    },
    "8": {
      "path": "images/CappellaPalatina.jpg",
      "labels": "Palermo, Palazzo dei Normanni <br> mosaico della Cappella Palatina "
    },
    "9": {
      "path": "images/Nerezi.jpeg",
      "labels": "Nerezi, Sveti Panteleimon <br> pittura murale del naos"
    },
    "10": {
      "path": "images/Monreale.jpg",
      "labels": "Monreale, Santa Maria Nuova <br> mosaico della navata"
    },
    "11": {
      "path": "images/Pisa.jpg",
      "labels": "Bonanno Pisano <br> Pisa, Santa Maria Assunta <br> formella bronzea della porta di San Ranieri"
    },
    "12": {
      "path": "images/Louvre.jpg",
      "labels": "Parigi, Musée du Louvre <br> icona in micromosaico"
    },
    "13": {
      "path": "images/Crociato.jpg",
      "labels": "Santa Caterina al Sinai <br> scomparto di trave della gloria "
    },
    "14": {
      "path": "images/TorosRoslin.jpg",
      "labels": "T'oros Roslin <br> Baltimora, Walters Art Museum <br> <i>Tetraevangelion</i>, ms. W.539, c. 153r "
    },
    "15": {
      "path": "images/Sopocani.jpg",
      "labels": "Sopočani, Santissima Trinità <br> pittura murale del naos"
    },
    "16": {
      "path": "images/Crevole.jpg",
      "labels": "Bottega di Guido da Siena <br> Siena, Pinacoteca Nazionale <br> scomparto del dossale di Santa Cecila a Crevole"
    },
    "17": {
      "path": "images/Iveron.jpg",
      "labels": "Monte Athos, Moní Ivíron <br> <i>Tetraevangelion</i>, ms. 5, c. 269v"
    },
    "18": {
      "path": "images/Tessalonica.jpg",
      "labels": "Los Angeles, Getty Museum <br> <i>Tetraevangelion</i>, ms. Ludwig II.5, c. 45v"
    },
    "19": {
      "path": "images/Gr54.jpg",
      "labels": "Parigi, Bibliothèque nationale de France <br> <i>Tetraevangelion bilingue</i>, ms. Grec 54, c. 213r"
    },
    "20": {
      "path": "images/Supplicationes.jpg",
      "labels": "Firenze, Biblioteca Medicea Laureanziana <br> <i>Supplicationes Variae</i>, ms. Pluteo 25.3, c. 371r"
    },
    "21": {
      "path": "images/BUB.jpg",
      "labels": "Collaboratore del Maestro della Bibbia di Gerona <br> Bologna, Biblioteca Universitaria <br> <i>Salterio</i>, ms. 346, c. 9v"
    },
    "22": {
      "path": "images/Peribleptos.jpg",
      "labels": "Michele e Eutichio Astrapas <br> Ocrida, San Clemente <br> pittura murale nella volta del naos"
    },
    "23": {
      "path": "images/Prilep.jpg",
      "labels": "Prilep, San Nicola <br> pittura murale del naos"
    },
    "24": {
      "path": "images/Lesouef.jpg",
      "labels": "Jacopino da Reggio <br> Parigi, Bibliothèque nationale de France <br> <i>Salterio</i>, ms. Smith-Lesouef 21, c. 15v"
    },
    "25": {
      "path": "images/Asinou.jpg",
      "labels": "Nikitari, Panagia Asinou <br> pittura murale nella volta del naos"
    },
    "26": {
      "path": "images/Gladzor.jpg",
      "labels": "T'oros di Taron e collaboratori <br> Los Angeles, Young Research Library of UCLA <br> <i>Vangelo Gladzor</i>, ms. 1, c. 106r"
    },
    "27": {
      "path": "images/Duccio.jpg",
      "labels": "Duccio di Buoninsegna <br> Londra, National Gallery <br> scomparto di predella dalla Maestà per il duomo di Siena. "
    },
    "28": {
      "path": "images/OperaDuomo.jpg",
      "labels": "Firenze, Museo dell'Opera del Duomo <br> scomparto di dittico in micromosaico"
    },
    "29": {
      "path": "images/SSApostoli.jpg",
      "labels": "Salonicco, Santissimi Apostoli <br> mosaico nella volta del naos"
    },
    "30": {
      "path": "images/Thyssen.jpg",
      "labels": "Maestro del tabernacolo Haniel <br> Madrid, Museo Nacional Thyssen-Bornemisza <br> scomparto del tabernacolo Haniel"
    },
    "31": {
      "path": "images/Studenica.jpg",
      "labels": "Studenica, Santa Maria <br> pittura murale nella volta del naos "
    },
    "32": {
      "path": "images/Tessile.jpg",
      "labels": "Città del Vaticano, Museo del tesoro di San Pietro <br> sakkos"
    },
    "33": {
      "path": "images/Iconostasi.jpg",
      "labels": "Santa Caterina al Sinai <br> scomparto di trave della gloria "
    },
    "34": {
      "path": "images/Cantacuzeno.jpg",
      "labels": "Parigi, Bibliothèque nationale de France <br> <i>Joannes Cantacuzenus</i>, ms. Grec 1242, c. 92v"
    }
  }

  var filepath = "0201firstviz/" + Object.values(Object.values(jsondata)[n])[0];
  var label = Object.values(Object.values(jsondata)[n])[1];
  divcompiler(filepath, label);
}