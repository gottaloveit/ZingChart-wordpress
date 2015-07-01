
/*
 * TO DO : 
 * Make grapgh div naming dynamic
 * Be able to feed data as a csv file to it
 */
var jsonObject = '';
var chartTitle = '';
var chartType  = 'Bar';
var chartData = ''; 
var selectedChart = '';
function showtitle(){
    //Set visible attr
    zingchart.exec('chartDiv','modify', {
        graphid : 0,
        data : {
        title : {
        visible : document.getElementById('visibleTitle').checked
        }
      }
    });
  creat_json();
}
function adjast_layout_title() {
  //Set the adjust-layout attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "adjust-layout" : document.getElementById('adjust-layout').checked
      }
    }
  });
  creat_json();
}
var backgoundType = 'solid';
function set_background_type () {
  bgtypes    = document.getElementById('background-type');
  backgoundType = bgtypes.options[bgtypes.selectedIndex].value;
  if (backgoundType == "gradiant") {
    document.getElementById('background-color-2').style.visibility = "visible";
  } else {
    document.getElementById('background-color-2').style.visibility = "hidden";
  };
  set_background_color ();
}
function set_background_color () {
 
  if (backgoundType == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('background-color-1').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-2" : document.getElementById('background-color-2').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('background-color-1').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-2" : document.getElementById('background-color-1').value
          }
        }
      });
  }
  creat_json();
}
function set_text_title() {
 //Chnage the title text
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      text : document.getElementById('titleText').value,
      }
    }
  });
  creat_json();
}
function set_bold_title () {
  // Set the Boold attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "bold" : document.getElementById('boldTitle').checked
      }
    }
  });
  creat_json();
}
function set_font_color () {
  // Set the font-color attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "font-color" : document.getElementById('font-color').value
      }
    }
  });
  creat_json();
}
function set_font_style () {
  var style= document.getElementById('font-style');
  var selectedStyle = style.options[style.selectedIndex].value;
  // Set the font-color attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "font-style" : selectedStyle
      }
    }
  });
  creat_json();
}
function set_font_family() {
  // Set the font-family attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "font-family" : document.getElementById('font-family').value
      }
    }
  });
  creat_json();
}
function creat_json() {
  document.getElementById('zingcharts-javaScript').value = JSON.stringify(zingchart.exec('chartDiv','getdata' ));
}
function chartRouter() {
  var charts = document.getElementById('whichChart');
  var selectedChart = charts.options[charts.selectedIndex].value;
  switch (selectedChart) {
    case 'bar' :
      chartData={
      "type": "bar",
      "series": [
      { "values": [35, 42, 67, 89, 25, 34, 67, 85 ] },
      { "values": [28, 57, 43, 56, 78, 99, 67, 28 ] }
      ]
      };
    break;
    case 'line' :
      chartData = {
      "show-progress":false,
      "graphset":[
          {
              "plot":{
                  
              },
              "type":"line",
              "series":[
                  {
                      "values":[-57,-44,-7,-17,58,-31,-81,57,28,-14,94,87,-89,-89,-20,-97,-11,44,30,-38],
                      "text":"Item 0"
                  },
                  {
                      "values":[53,42,-27,-92,6,13,60,-83,-7,-92,47,-71,32,31,-85,-86,8,-12,97,-96],
                      "text":"Item 1"
                  },
                  {
                      "values":[18,-50,53,-36,-35,-51,49,-24,-14,-30,34,62,11,52,-81,-94,46,57,-62,-70],
                      "text":"Item 2"
                  },
                  {
                      "values":[8,40,6,-82,12,-76,-2,-97,13,-12,-71,-100,-31,9,7,-51,90,-40,-19,-27],
                      "text":"Item 3"
                  }
              ]
          }
      ]
      };

    break;
  }
  drawChart();
}

function buildJason() {
  
  
}

function drawChart(){
  zingchart.render({
    id:'chartDiv',
    height:400,
    width:600,
    data:chartData
  });
};
