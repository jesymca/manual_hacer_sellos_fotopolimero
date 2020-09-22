 /*
  +---------------------------------------------------------+
  | Ad Simple                 Copyright www.YugDesign.com   |
  +---------------------------------------------------------+
  | This program may be used and hosted free of charge by   |
  |anyone for personal purpose as long as this copyright    |
  |notice remains intact.                                   |
  +---------------------------------------------------------+
 */
 
 var img_width = "600";
 var img_height = "80";
 var img_title = "Click Aqui";
 var img_align = "center";
 
 
 var ad=new Array()
 //insert here your images src
 ad[0]='http://www.jesuministrosymas.com.ve/LOGO.png';
 ad[1]='http://www.jesuministrosymas.com.ve/servicios/servicios-publicitarios/publicidad/logo%20CANTV.png';
 ad[2]='http://www.jesuministrosymas.com.ve/servicios/servicios-publicitarios/publicidad/logo%20CDMON.png';
 ad[3]='http://www.jesuministrosymas.com.ve/servicios/servicios-publicitarios/publicidad/logo%20CONATEL.png';
 ad[4]='http://www.jesuministrosymas.com.ve/LOGO.png';
 
 var links=new Array()
 //insert here your links
 links[0]='../Servicios%20Publicitarios.html';
 links[1]='../Cursos.html';
 links[2]='../Servicios%20Publicitarios.html';
 links[3]='../Cursos.html';
 links[4]='../Servicios%20Publicitarios.html';

var title=new Array()
 //insert here your links
 title[0]='jesuministrosymas';
 title[1]='cantv';
 title[2]='cdmon';
 title[3]='conatel';
 title[4]='jesuministrosymas'; 

 var xy=Math.floor(Math.random()*ad.length);
 document.write('<a href="'+links[xy]+'" target="_blank" align="'+img_align+'"><img src="'+ad[xy]+'" width="'+img_width+'" height="'+img_height+'" alt="'+img_title+'" title="'+title[xy]+'" align="'+img_align+'"></a>');
