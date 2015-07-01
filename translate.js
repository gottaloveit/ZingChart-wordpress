
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
      "adjust-layout" : document.getElementById('adjustLayoutTitle').checked
      }
    }
  });
  creat_json();
}
var backgoundType = 'solid';
function set_background_type () {
  bgtypes    = document.getElementById('backgroundTypeTitle');
  backgoundType = bgtypes.options[bgtypes.selectedIndex].value;
  if (backgoundType == "gradiant") {
    document.getElementById('backgroundColor2Title').style.visibility = "visible";
  } else {
    document.getElementById('backgroundColor2Title').style.visibility = "hidden";
  };
  set_background_color_title ();
}
function set_background_color_title () {
 
  if (backgoundType == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('backgroundColor1Title').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-2" : document.getElementById('backgroundColor2Title').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('backgroundColor1Title').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec('chartDiv','modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-2" : document.getElementById('backgroundColor1Title').value
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
function set_font_color_title () {
  // Set the font-color attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "font-color" : document.getElementById('fontColorTitle').value
      }
    }
  });
  creat_json();
}
function set_font_style_title () {
  var style= document.getElementById('fontStyleTitle');
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
function set_font_family_title() {
  // Set the font-family attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "font-family" : document.getElementById('fontFamilyTitle').value
      }
    }
  });
  creat_json();
}
function set_text_align_title() {
  var align = document.getElementById('textAlignTitle')
  var selectedAlign = align.options[align.selectedIndex].value;
  // Set the text-align attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "text-align" : selectedAlign
      }
    }
  });
  creat_json();
}
function set_margin_title() {
   // Set the margin attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "margin-top" : document.getElementById('marginTopTitle').value,
      "margin-right" : document.getElementById('marginRightTitle').value,
      "margin-bottom" : document.getElementById('marginBottomTitle').value,
      "margin-left" : document.getElementById('marginLeftTitle').value
      }
    }
  });
  creat_json();
}
function set_padding_title() {
   // Set the margin attr
  zingchart.exec('chartDiv','modify', {
      graphid : 0,
      data : {
      title : {
      "padding-top" : document.getElementById('paddingTopTitle').value,
      "padding-right" : document.getElementById('paddingRightTitle').value,
      "padding-bottom" : document.getElementById('paddingBottomTitle').value,
      "padding-left" : document.getElementById('paddingLeftTitle').value
      }
    }
  });
  creat_json();
}
function set_xy_string_title () {
  if (document.getElementById('visibleTitle').checked) {
    // Set the text-align attr
    zingchart.exec('chartDiv','modify', {
        graphid : 0,
        data : {
        title : {
        "x" : document.getElementById('xStringTitle').value,
        "y" : document.getElementById('yStringTitle').value,
        }
      }
    });
    creat_json();
  };
}
function set_border_title() {
  if (document.getElementById("borderTitle").checked) {
      // Set the text-align attr
    zingchart.exec('chartDiv','modify', {
        graphid : 0,
        data : {
        title : {
        "border-width" : document.getElementById('borderWidthTitle').value,
        "border-color" : document.getElementById('borderColorTitle').value
        }
      }
    });
    creat_json();
  } else {
     zingchart.exec('chartDiv','modify', {
        graphid : 0,
        data : {
        title : {
        "border-width" : 0
        }
      }
    });
    creat_json();
  }
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
