
/*
 * TO DO : 
 * Make grapgh div naming dynamic
 * Be able to feed data as a csv file to it
 * Validate form inputs
 */
var jsonObject = '';
var chartTitle = '';
var chartType  = 'Bar';
var chartData = ''; 
var selectedChart = '';


var chartID = 'chartDiv';

/*****************************************************
 *                      Title                        *
 *****************************************************/
function showtitle(){
    //Set visible attr
    zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
function set_background_type_title () {
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
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('backgroundColor1Title').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-2" : document.getElementById('backgroundColor2Title').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          title : {
          "background-color-1" : document.getElementById('backgroundColor1Title').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
  zingchart.exec(chartID,'modify', {
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
function set_x_string_title () {
  if (document.getElementById('visibleTitle').checked && document.getElementById('xStringTitle').value !='') {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        title : {
        "x" : document.getElementById('xStringTitle').value
        }
      }
    });
    creat_json();
  };
}
function set_y_string_title () {
  if (document.getElementById('visibleTitle').checked && document.getElementById('yStringTitle').value !='' ) {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        title : {
        "y" : document.getElementById('yStringTitle').value
        }
      }
    });
    creat_json();
  };
}
function set_border_title() {
  if (document.getElementById("borderTitle").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
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
     zingchart.exec(chartID,'modify', {
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

/*****************************************************
 *                   SubTitle                        *
 *****************************************************/

function show_sub_title(){
    //Set visible attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        subtitle : {
        visible : document.getElementById('visibleSubTitle').checked
        }
      }
    });
  creat_json();
}
function adjast_layout_sub_title() {
  //Set the adjust-layout attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "adjust-layout" : document.getElementById('adjustLayoutSubTitle').checked
      }
    }
  });
  creat_json();
}
var backgoundType = 'solid';
function set_background_type_sub_title () {
  bgtypes    = document.getElementById('backgroundTypeSubTitle');
  backgoundType = bgtypes.options[bgtypes.selectedIndex].value;
  if (backgoundType == "gradiant") {
    document.getElementById('backgroundColor2SubTitle').style.visibility = "visible";
  } else {
    document.getElementById('backgroundColor2SubTitle').style.visibility = "hidden";
  };
  set_background_color_sub_title ();
}
function set_background_color_sub_title () {
 
  if (backgoundType == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          subtitle : {
          "background-color-1" : document.getElementById('backgroundColor1SubTitle').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          subtitle : {
          "background-color-2" : document.getElementById('backgroundColor2SubTitle').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          subtitle : {
          "background-color-1" : document.getElementById('backgroundColor1SubTitle').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          subtitle : {
          "background-color-2" : document.getElementById('backgroundColor1SubTitle').value
          }
        }
      });
  }
  creat_json();
}
function set_text_sub_title() {
 //Chnage the title text
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      text : document.getElementById('subTitleText').value,
      }
    }
  });
  creat_json();
}
function set_bold_sub_title () {
  // Set the Boold attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "bold" : document.getElementById('boldSubTitle').checked
      }
    }
  });
  creat_json();
}
function set_font_color_sub_title () {
  // Set the font-color attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "font-color" : document.getElementById('fontColorSubTitle').value
      }
    }
  });
  creat_json();
}
function set_font_style_sub_title () {
  var style= document.getElementById('fontStyleSubTitle');
  var selectedStyle = style.options[style.selectedIndex].value;
  // Set the font-color attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "font-style" : selectedStyle
      }
    }
  });
  creat_json();
}
function set_font_family_sub_title() {
  // Set the font-family attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "font-family" : document.getElementById('fontFamilySubTitle').value
      }
    }
  });
  creat_json();
}
function set_text_align_sub_title() {
  var align = document.getElementById('textAlignSubTitle')
  var selectedAlign = align.options[align.selectedIndex].value;
  // Set the text-align attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "text-align" : selectedAlign
      }
    }
  });
  creat_json();
}
function set_margin_sub_title() {
   // Set the margin attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "margin-top" : document.getElementById('marginTopSubTitle').value,
      "margin-right" : document.getElementById('marginRightSubTitle').value,
      "margin-bottom" : document.getElementById('marginBottomSubTitle').value,
      "margin-left" : document.getElementById('marginLeftSubTitle').value
      }
    }
  });
  creat_json();
}
function set_padding_sub_title() {
   // Set the margin attr
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
      subtitle : {
      "padding-top" : document.getElementById('paddingTopSubTitle').value,
      "padding-right" : document.getElementById('paddingRightSubTitle').value,
      "padding-bottom" : document.getElementById('paddingBottomSubTitle').value,
      "padding-left" : document.getElementById('paddingLeftSubTitle').value
      }
    }
  });
  creat_json();
}
function set_x_string_sub_title () {
  if (document.getElementById('visibleTitle').checked && document.getElementById('xStringSubTitle').value !='') {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        subtitle : {
        "x" : document.getElementById('xStringSubTitle').value
        }
      }
    });
    creat_json();
  };
}
function set_y_string_sub_title () {
  if (document.getElementById('visibleTitle').checked && document.getElementById('yStringSubTitle').value !='') {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        subtitle : {
        "y" : document.getElementById('yStringSubTitle').value
        }
      }
    });
    creat_json();
  };
}
function set_border_sub_title() {
  if (document.getElementById("borderSubTitle").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        subtitle : {
        "border-width" : document.getElementById('borderWidthSubTitle').value,
        "border-color" : document.getElementById('borderColorSubTitle').value
        }
      }
    });
    creat_json();
  } else {
     zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        subtitle : {
        "border-width" : 0
        }
      }
    });
    creat_json();
  }
}
/*****************************************************
 *                   Legend                          *
 *****************************************************/
function show_legend() {
  zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "visible" : document.getElementById('visibleLegend').checked
        }
      }
    });
  creat_json();
}
function adjast_layout_legend() {
  zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "adjust-layout" : document.getElementById('adjustLayoutLegend').checked
        }
      }
    });
  zingchart.exec(chartID,'update');
  creat_json();
} 
function align_legend() {
  var style= document.getElementById('alignLegend');
  var selectedAlign = style.options[style.selectedIndex].value;
  zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "align" : selectedAlign
        }
      }
    });
  creat_json();
}
function draggable_legend() {
  zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "draggable" : document.getElementById('draggableLegend').checked
        }
      }
    });
  zingchart.exec(chartID,'update');
  creat_json();
}
function set_layout_legend() {
  var layout = document.getElementById('layoutLegend');
  var selectedLayout =  layout.options[layout.selectedIndex].value;
  if (selectedLayout != 'colXrow') {
     zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "layout" : selectedLayout
        }
      }
    });
  } else {
    document.getElementById('colRowLegend').style.visibility = 'visible';
     zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "layout" : document.getElementById('rowsLayout').value+'x'+document.getElementById('colsLayout').value
        }
      }
    });
  }
  creat_json();
}
function set_x_string_legend() {
  if (document.getElementById('visibleLegend').checked && document.getElementById('xStringLegend').value !='' ) {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "x" : document.getElementById('xStringLegend').value
        }
      }
    });
    creat_json();
  };
}
function set_y_string_legend() {
  if (document.getElementById('visibleLegend').checked && document.getElementById('yStringLegend').value != '') {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "y" : document.getElementById('yStringLegend').value
        }
      }
    });
    creat_json();
  };
}
function minimize_legend() {
  if (document.getElementById('visibleLegend').checked) {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "minimize" : document.getElementById('minimizeLegend').checked,
        }
      }
    });
    creat_json();
  };
}
function toggle_action_legend() {
  var action = document.getElementById('toggleActionLegend');
  var selectedAction = action.options[action.selectedIndex].value;
  if (document.getElementById('visibleLegend').checked) {
    // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "toggle-action" : selectedAction,
        }
      }
    });
    creat_json();
  };
}
var backgoundTypeLegend ='';
function set_background_type_legend () {
  var bgtypesLegend    = document.getElementById('backgroundTypeLegend');
  backgoundTypeLegend = bgtypesLegend.options[bgtypesLegend.selectedIndex].value;
  if (backgoundTypeLegend == "gradiant") {
    document.getElementById('backgroundColor2Legend').style.visibility = "visible";
  } else {
    document.getElementById('backgroundColor2Legend').style.visibility = "hidden";
  };
  set_background_color_legend ();
}
function set_background_color_legend () {
 
  if (backgoundTypeLegend == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
         legend : {
          "background-color-1" : document.getElementById('backgroundColor1Legend').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
          "background-color-2" : document.getElementById('backgroundColor2Legend').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
          "background-color-1" : document.getElementById('backgroundColor1Legend').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
          "background-color-2" : document.getElementById('backgroundColor1Legend').value
          }
        }
      });
  }
  creat_json();
}

function set_border_legend() {
  if (document.getElementById("borderLegend").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "border-width" : document.getElementById('borderWidthLegend').value,
        "border-color" : document.getElementById('borderColorLegend').value
        }
      }
    });
    creat_json();
  } else {
     zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
        "border-width" : 0
        }
      }
    });
    creat_json();
  }
}
function set_margin_legend() {
  if (document.getElementById("visibleLegend").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "margin-top"    : document.getElementById('marginTopLegend').value,
          "margin-right"  : document.getElementById('marginRightLegend').value,
          "margin-bottom" : document.getElementById('marginBottomLegend').value,
          "margin-left"   : document.getElementById('marginLeftLegend').value
        }
      }
    });
    creat_json();
  } 
}
function set_padding_legend() {
  if (document.getElementById("visibleLegend").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "paddingTop"    : document.getElementById('paddingTopLegend').value,
          "paddingRight"  : document.getElementById('paddingRightLegend').value,
          "paddingBottom" : document.getElementById('paddingBottomLegend').value,
          "paddingLeft"   : document.getElementById('paddingLeftLegend').value
        }
      }
    });
    creat_json();
  } 
}
function set_highlight_plot () {
  if (document.getElementById("visibleLegend").checked) {
      // Set the text-align attr
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "highlight-plot" : document.getElementById('highlightPlotLegend').checked,
        }
      }
    });
    creat_json();
  } 
}
function set_xy_position_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "position" : document.getElementById('xPositionLegend').value+' '+document.getElementById('yPositionLegend').value,
        }
      }
    });
    creat_json();
  };
}
function set_item_bold_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            'bold' :document.getElementById('boldItemLegend').checked,
          },
        }
      }
    });
    creat_json();
  };
}
function set_item_font_color_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            'font-color' :document.getElementById('fontColorItemLegend').value,
          },
        }
      }
    });
    creat_json();
  };
}
function set_font_style_item_legend() {
  if (document.getElementById("visibleLegend").checked) {
    var style = document.getElementById('fontStyleItemLegend');
    var selected = style.options[style.selectedIndex].value;
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            'font-style' :selected,
          },
        }
      }
    });
    creat_json();
  };
}
function set_font_family_item_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            'font-family' :document.getElementById('fontFamilyItemLegend').value
          },
        }
      }
    });
    creat_json();
  };
}
function set_text_align_item_legend() {
  if (document.getElementById("visibleLegend").checked) {
    var align = document.getElementById('textAlignItemLegend');
    var selected = align.options[align.selectedIndex].value;
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            'text-align' :selected
          },
        }
      }
    });
    creat_json();
  };
}
function set_margin_item_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            "margin-top"    : document.getElementById('marginTopItemLegend').value,
            "margin-right"  : document.getElementById('marginRightItemLegend').value,
            "margin-bottom" : document.getElementById('marginBottomitemLegend').value,
            "margin-left"   : document.getElementById('marginLeftItemLegend').value,
          },
        }
      }
    });
    creat_json();
  };
}
function set_padding_item_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "item" :{
            "padding-top"    : document.getElementById('paddingTopItemLegend').value,
            "padding-right"  : document.getElementById('paddingRightItemLegend').value,
            "padding-bottom" : document.getElementById('paddingBottomItemLegend').value,
            "padding-left"   : document.getElementById('paddingLeftItemLegend').value,
          },
        }
      }
    });
    creat_json();
  };
}
function set_marker_type_legend() {
  if (document.getElementById("visibleLegend").checked) {
    var marker = document.getElementById('typeMarkerLegend');
    var selected = marker.options[marker.selectedIndex].value;
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "marker" :{
            'type' :selected
          },
        }
      }
    });
    creat_json();
  };
}
function set_alpha_marker_legend() {
  if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "marker" :{
            'alpha' :document.getElementById('alphaMarkerLegend').value
          },
        }
      }
    });
    creat_json();
  };
}
function creat_json() {
  document.getElementById('zingcharts-javaScript').value = JSON.stringify(zingchart.exec(chartID,'getdata' ),null,"\t");
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
    case 'area':
      chartData = {
         "type":"area",
          "series":[
            {
            "values":[11,36,7,44,11,28,42,26,13,32,12,24,16,11,43,39]
            },
            {
            "values":[21,29,14,16,28,35,21,18,11,7,4,9,25,15,33,13]
          }
        ] 
      };
    break;
    case 'scatter':
      chartData = 
                  {
            "graphset":[
                {
                    "type":"scatter",
                    "series":[
                        {
                            "values":[[1,15],
                            [2.3,4],
                            [5,10.4],
                            [6,7],
                            [3,6],
                            [7.5,15],
                            [8,2.3],
                            [.81,7],
                            [2,12.5],
                            [4.2,4],
                            [5,1],
                            [6,3],
                            [8.8,16.8]]
                        },
                        {
                            "values":[[3,5],
                            [2.3,17],
                            [8,8],
                            [6.4,12.3],
                            [4,6.6],
                            [7.2,3],
                            [2,12],
                            [1.5,4.3],
                            [6.7,2],
                            [4,10],
                            [3.4,10],
                            [6,14],
                            [2,6.7]]
                        },
                        {
                            "values":[[3,11],
                            [6.2,7.2],
                            [8,14],
                            [3,2.5],
                            [4.4,5],
                            [8,13],
                            [2,1],
                            [7.9,4.1],
                            [6,16.3],
                            [.51,8],
                            [3,6],
                            [5.7,14.8],
                            [2,2]]
                        }
                    ]   
                }
            ]
        };
    break;
    case 'pie':
       chartData =
        {
            "graphset":[
                {    
                    "type":"pie",
                    "series":[
                        {
                            "text":"Apples",
                            "values":[5]
                        },
                        {
                            "text":"Oranges",
                            "values":[8]
                        },
                        {
                            "text":"Bananas",
                            "values":[22]
                        },
                        {
                            "text":"Grapes",
                            "values":[16]
                        },
                        {
                            "text":"Cherries",
                            "values":[12]
                        }
                    ]
                }
            ]
        
      };
    break;
  }
  drawChart();
}

function drawChart(){
  zingchart.render({
    id:chartID,
    height:400,
    width:600,
    data:chartData
  });
};
