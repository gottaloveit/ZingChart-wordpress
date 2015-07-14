var plotGeneralData = {
    "category" : "plot",
    "subcategory" :"plot",
    "inputs":[
      {
        "type":"text",
        "label": "Active Area",
        "id" :"activeAreaPlot",
        "key" :"active_area"
      },
      {
        "type" : "range",
        "id"   : "alphaAreaPlot",
        "key"  : "alphaArea",
        "label": "Alpha Area",
        "divider" :"true",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type"  :"select",
        "values":[
          "hand",
          "normal"
        ],
        "labels" :[
          "Hand",
          "Normal"
        ],
        "label" :"Cursor",
        "id"    :"cursorPlot",
        "key"   :"cursor",
        "divider":"true"
      },
      {   
        "type"  :"select",
        "values":[
          "cone",
          "cylinder",
          "pyramid",
          "histogram",
          "stepped",
          "spline",
          "segmented"
        ],
        "label" :"Aspect",
        "id"    :"aspectPlot",
        "key"   :"aspect",
        "divider":"true"
      },
      {
        "type" : "text",
        "id"   : "decimalsPlot",
        "key"  : "decimals",
        "label": "decimals",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "decimalsSeparatorPlot",
        "key"  : "decimalsSeparator",
        "label": "Decimals Separator",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "detachPlot",
        "key"  : "detach",
        "label": "Detach",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "maxNodesPlot",
        "key"  : "maxNodes",
        "label": "max Nodes",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "multiplierPlot",
        "key"  : "multiplier",
        "label": "Multiplier",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "standard",
          "currency"
        ],
        "label" :"Negation",
        "id"    :"negationPlot",
        "key"   :"negation",
        "divider":"true"
      },
      {
        "type" : "range",
        "id"   : "refAnglePlot",
        "key"  : "refAngle",
        "label": "Ref Angle",
        "divider" :"true",
        "min"  : '0',
        "max"  : '360',
        "step" :'1'
      },
      {
        "type" : "checkbox",
        "id"   : "shortPlot",
        "key"  : "short",
        "label": "Short",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "K",
          "M",
          "B"
        ],
        "label" :"Short Unit",
        "id"    :"shortUnitPlot",
        "key"   :"shortUnit",
      },
      {
        "type" : "range",
        "id"   : "slicePlot",
        "key"  : "slice",
        "label": "Slice",
        "divider" :"true",
        "min"  : '0',
        "max"  : '100',
        "step" :'1'
      },
      {
        "type" : "checkbox",
        "id"   : "stackedPlot",
        "key"  : "stacked",
        "label": "Stacked",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "thousandsSeparatorPlot",
        "key"  : "thousandsSeparator",
        "label": "Thousands Separator",
        "divider" :"true"
      },
      {
        "type" : "range",
        "id"   : "alphaPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "divider" :"true",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "plotplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
       "type" : "border",
        "id"   : "plot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "plot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      
    ],
};
var plotAnimationData ={
    "category" : "plot",
    "subcategory" :"animation",
    "inputs" :[
      {
        "type" : "select",
        "id"   : "effectAnimation", 
        "values" :[1,2,3,4,5,6,7,8,9,10,11,12,13
        ],
        "labels" :['FADE IN',
        'EXPAND VERTICAL',
        'EXPAND TOP',
        'EXPAND BOTTOM',
        'EXPAND LEFT',
        'EXPAND RIGHT',
        'EXPAND HORIZONTAL',
        'SLIDE LEFT',
        'SLIDE RIGHT',
        'SLIDE TOP',
        'SLIDE BOTTOM',
        'UNFOLD HORIZONTAL',
        'UNFOLD VERTICAL'],
        "key"  : "effect",
        "label": "Effect",
      },
      {
        "type" : "select",
        "id"   : "methodAnimation", 
        "values" :[1,2,3,4,5],
        "labels" :['LINEAR',
        'BACK EASE OUT',
        'ELASTIC EASE OUT',
        'BOUNCE EASE OUT',
        'STRONG EASE OUT',
        'REGULAR EASE OUT'
        ],
        "key"  : "method",
        "label": "Method",
        "divider" :"true"
      },
      {
        "type" : "select",
        "id"   : "sequenceAnimation", 
        "values" :[1,2,3],
        "labels" :['NO SEQUENCE',
        'BY PLOT',
        'BY NODE',
        'BY PLOT AND NODE',
        ],
        "key"  : "sequence",
        "label": "Sequence",
        "divider" :"true"
      },
      {
        "type" : "select",
        "id"   : "speedAnimation", 
        "values" :[4000,1000],
        "labels" :['Slow',
        'Fast',
        ],
        "key"  : "speed",
        "label": "Speed",
        "divider" :"true"
      },
      
    ],
};
var plotHoverState = {
    "category" : "plot",
    "subcategory" :"hoverState",
    "inputs" : [
      {
        "type" : "range",
        "id"   : "alphaHoverStatePlot",
        "key"  : "alpha",
        "label": "Alpha",
        "divider" :"true",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "hoverStateplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
       "type" : "border",
        "id"   : "hoverStateplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "hoverStateplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      }
    ],
}
var hoverMarker = {
   "category" : "plot",
    "subcategory" :"hoverMarker",
    "inputs" : [
      {
        "type" : "range",
        "id"   : "alphaHoverMarkerPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "hoverMarkerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
       {
        "type" : "text",
        "id"   : "backgroundImageHoverMarkerPlot",
        "key"  : "backgroundImage",
        "label": "Background Image",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "x",
          "y",
          "xy"
        ],
        "label" :"background Fit ",
        "id"    :"backgroundFithoverMarkerPlot",
        "key"   :"background-fit ",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "no-repeat",
          "repeat",
          "repeat-x",
          "repeat-y"
        ],
        "labels" :[
        "No Repeat",
        "Repeat",
        "Repeat X",
        "Repeat Y",
        ],
        "label" :"background Repeat ",
        "id"    :"backgroundRepeathoverMarkerPlot",
        "key"   :"background-repeat ",
        "divider" :"true"
      },
      {
       "type" : "border",
        "id"   : "hoverMarkerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "hoverMarkerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type"  :"select",
        "values":["triangle", "square", "circle", "diamond", "trapezoid", "rectangle"
        , "parallelogram", "plus", "cross", "arrow", "star3","star4","star5","star6","star7",
        "star8","star9","rpoly3","rpoly4","rpoly5","rpoly6","rpoly7","rpoly8","rpoly9","gear3","gear4","gear5","gear6","gear7","gear8","gear9", "ellipse", "arc", "pie"
        ],
        "label" :"Type",
        "id"    :"typehoverMarkerPlot",
        "key"   :"type ",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "visiblehoverMarkerPlot",
        "key"  : "visib",
        "label": "Visib",
        "divider" :"true"
      },
      ]
};
var plotMarkerData ={
    "category" : "plot",
    "subcategory" :"marker",
    "inputs" :[
      {
        "type" : "range",
        "id"   : "alphaMarkerPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "markerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
       {
        "type" : "text",
        "id"   : "backgroundImageMarkerPlot",
        "key"  : "backgroundImage",
        "label": "Background Image",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "x",
          "y",
          "xy"
        ],
        "label" :"background Fit ",
        "id"    :"backgroundFitMarkerPlot",
        "key"   :"background-fit ",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "no-repeat",
          "repeat",
          "repeat-x",
          "repeat-y"
        ],
        "labels" :[
        "No Repeat",
        "Repeat",
        "Repeat X",
        "Repeat Y",
        ],
        "label" :"background Repeat ",
        "id"    :"backgroundRepeatMarkerPlot",
        "key"   :"background-repeat ",
        "divider" :"true"
      },
      {
       "type" : "border",
        "id"   : "markerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "markerplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type"  :"select",
        "values":["triangle", "square", "circle", "diamond", "trapezoid", "rectangle"
        , "parallelogram", "plus", "cross", "arrow", "star3","star4","star5","star6","star7",
        "star8","star9","rpoly3","rpoly4","rpoly5","rpoly6","rpoly7","rpoly8","rpoly9","gear3","gear4","gear5","gear6","gear7","gear8","gear9", "ellipse", "arc", "pie"
        ],
        "label" :"Type ",
        "id"    :"typeMarkerPlot",
        "key"   :"type",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "visibleMarkerPlot",
        "key"  : "visib",
        "label": "Visib",
        "divider" :"true"
      },
    ]
};
var tooltip ={
    "category" : "plot",
    "subcategory" :"tooltip",
    "inputs" :[
      {
        "type" : "range",
        "id"   : "alphatooltipPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "tooltipplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
       {
        "type" : "text",
        "id"   : "backgroundImagetooltipPlot",
        "key"  : "backgroundImage",
        "label": "Background Image",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "x",
          "y",
          "xy"
        ],
        "label" :"background Fit ",
        "id"    :"backgroundFittooltipPlot",
        "key"   :"background-fit ",
        "divider" :"true"
      },
      {
        "type"  :"select",
        "values":[
          "no-repeat",
          "repeat",
          "repeat-x",
          "repeat-y"
        ],
        "labels" :[
        "No Repeat",
        "Repeat",
        "Repeat X",
        "Repeat Y",
        ],
        "label" :"background Repeat ",
        "id"    :"backgroundRepeatTooltipPlot",
        "key"   :"background-repeat ",
        "divider" :"true"
      },
      {
       "type" : "border",
        "id"   : "tooltipplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "tooltipplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "checkbox",
        "id"   : "visibletooltipPlot",
        "key"  : "visib",
        "label": "Visib",
        "divider" :"true"
      },
      {
        "type" : "font",
        "id"   : "tooltipPlot",
        "key"  : "",
        "label": "",
        "divider" :"true"
      },
    ]
};
var previewData ={
    "category" : "preview",
    "subcategory" :"preview",
    "inputs" : [ 
    {
      "type" : "checkbox",
      "id"   : "adjustLayoutPreview",
      "key"  : "adjust-layout",
      "label": "Adjust Layout",
    }
    ],
}
var formData =[plotGeneralData,plotAnimationData,plotHoverState,hoverMarker,plotMarkerData,tooltip,previewData];
var j = 0;
window.onload =function() {
  var element = document.getElementsByClassName("frm-el");
  var linebreak = "";
  for (var i = 0; i < element.length; i++) {
    for (var m=0; m <formData.length;m++) {
      if (element[i].getAttribute('data-category') == formData[m]["category"] && element[i].getAttribute('data-sub-category') == formData[m]["subcategory"]) {
        for (j=0; j<formData[m].inputs.length; j++) {
            linebreak = formData[m].inputs[j].divider ? "<hr>" :" ";
            switch(formData[m].inputs[j].type){
            case('checkbox') :
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='checkbox' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"' onchange='Modify_chart(this.id, this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case("text") :
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='text' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"'onKeyUp='Modify_chart(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ('select'):
              var options = ''
              var optionLable = '';
              for (var k=0; k<formData[m].inputs[j].values.length;k++) {
                if (formData[m].inputs[j].labels) {
                   optionLable = formData[m].inputs[j].labels[k];
                } else {
                  optionLable = formData[m].inputs[j].values[k];
                }
                options += "<option value='"+formData[m].inputs[j].values[k]+"'>"+optionLable +"</option>"
              };
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<select id='"+formData[m].inputs[j].id+"' data-category='"+formData[m]["category"]
              +"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"'onchange='Modify_chart(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><option></option> "+options+"</select><br>";
            break;
            case ("range") :
            //oninput is for IE compatibility.
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='range' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"' min='"+formData[m].inputs[j].min+"' max='"+formData[m].inputs[j].max+"' step='"+formData[m].inputs[j].step
              +"' onchange='Modify_chart(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'"
              +"  oninput='Modify_chart(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("bgcolor") :
              element[i].innerHTML += linebreak +"<label> Background:</lable>";//ID here represents category
              element[i].innerHTML += "<select id='backgroundType"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+
              formData[m]["subcategory"]+"'onchange='set_bg_type(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value='solid'>Solid</option><option value='gradiant'>Gradiant</option></select><br>"
              +"<label> Background color 1 : </lable> <input type='color' id='backgroundColor1"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]
              +"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_bg_color(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>"
              +"<label> Background color 2 : </lable> <input type='color' id='backgroundColor2"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]
              +"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_bg_color(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' style='visibility :hidden'><br>";
            break;
            case ("border") :
              element[i].innerHTML += linebreak +"<label> Border :</lable>";//ID here represents category
              element[i].innerHTML += "<input type='checkbox' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' id='border"+formData[m].inputs[j].id
              +"' onchange='set_border(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";  
              element[i].innerHTML += "<label> Border width :</lable><input type='text' id='borderWidth"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"
              +formData[m]["subcategory"]+"' onKeyUp='set_border(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='1px'><br>";
              element[i].innerHTML += " <label> Border color:</lable><input type='color' id='borderColor"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"
              +formData[m]["subcategory"]+"'onchange='set_border(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("line") :
              element[i].innerHTML += linebreak + "<label>Line color :</lable>";
              element[i].innerHTML += "<input type='color' id='lineColor"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              element[i].innerHTML += "<label>Line width :</lable> <input type='text' id='lineWidth"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px'><br>";
              element[i].innerHTML += "<lable> Line style :</lable>"
              +"<select id='lineStyle"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='solid'> Solid</option>"
              +"<option value='dotted'> Dotted</option>"
              +"<option value='dashed'> Dashed</option>"
              +"</select><br>";
              element[i].innerHTML +="<label>Line gap size :</lable> <input type='text' id='lineGapSize"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
              element[i].innerHTML +="<label>Line segment size :</lable> <input type='text' id='lineSegmentSize"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
            break;
            case ("font") :
              element[i].innerHTML += linebreak+"<lable> Font color :</label>";
              element[i].innerHTML += " <input type='color' id='fontColor"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              element[i].innerHTML += "<lable>Font style: </lable>";
              element[i].innerHTML += "<select id='fontStyle"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value ='normal' > normal</option>"
              +"<option value = 'italic' > italic</option>"
              +"<option value = 'oblique'> oblique</option>"
              +"</select>";
              element[i].innerHTML += "<lable> Font family :</lable>"; // It should get converted to select sometime!!!
              element[i].innerHTML += "<input type='text' id='fontFamily'"+formData[m].inputs[j].id;
            break;
          };
        };
      };
    };
  };
};
function Modify_chart(id,type,key,category,subcategory) {

  var value = ''
  switch (type) {
    case("checkbox") :
      value = document.getElementById(id).checked;
    break;
    case("select-one") :
      var opts = document.getElementById(id);
      value  = opts.options[opts.selectedIndex].value;
    break;
    default:
    //default is for text,range
      value= document.getElementById(id).value;
  }

  var dataObj = {};
  dataObj[category] = {};
  if (category != subcategory) {
    dataObj[category][subcategory] ={};
    dataObj[category][subcategory][key] = value;
  } else {
    dataObj[category][key] = value;
  }
  zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      
  });
  creat_json();}
/*
 * Generic functions for bg Color
 */
var bgType= '';
function set_bg_type(id,category,subCategory) {
  var type = document.getElementById(id);
  bgType = type.options[type.selectedIndex].value;
  if (bgType =="gradiant") {
    document.getElementById("backgroundColor2"+subCategory+category).style.visibility = "visible";
  } else {
    document.getElementById("backgroundColor2"+subCategory+category).style.visibility = "hidden";
  }
  set_bg_color(category,subCategory);}
function set_bg_color(category,subCategory) {
  var dataObj = {};
  dataObj[category] = {};
  if (category != subCategory) {
    dataObj[category][subCategory] = {};
    if (bgType == "gradiant") {
      //Set background-color-1 attr
    dataObj[category][subCategory]['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });
    dataObj[category][subCategory]['backgroundColor2'] =  document.getElementById('backgroundColor2'+subCategory+category).value;
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });
    } else {
    //Set background-color-1 attr
      dataObj[category][subCategory]['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
      dataObj[category][subCategory]['backgroundColor2'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
    }
  } else {
    
    if (bgType == "gradiant") {
      //Set background-color-1 attr
    dataObj[category]['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });
    dataObj[category]['backgroundColor2'] =  document.getElementById('backgroundColor2'+subCategory+category).value;
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });
    } else {
    //Set background-color-1 attr
      dataObj[category]['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
      dataObj[category]['backgroundColor2'] =  document.getElementById('backgroundColor1'+subCategory+category).value;
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
    }
  }
  
  
  creat_json();
 }
 /*
  *  Generic function for seting border
  */
function set_border(category,subCategory) {
  var dataObj = {};
  dataObj[category] = {};
  if (category != subCategory) {
    dataObj[category][subCategory] ={};
    if (document.getElementById("border"+subCategory+category).checked) {
      dataObj[category][subCategory]["border-width"] = document.getElementById('borderWidth'+subCategory+category).value;
      dataObj[category][subCategory]["border-color"] = document.getElementById('borderColor'+subCategory+category).value;
    } else {
       dataObj[category][subCategory]["border-width"] = 0;
    }
  } else {
    if (document.getElementById('border'+category).checked) {
      dataObj[category]["border-width"] = document.getElementById('borderWidth'+category).value;
      dataObj[category]["border-color"] = document.getElementById('borderColor'+category).value;
    } else {
       dataObj[category]["border-width"] = 0;
    }
  }
  
  zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });


  creat_json();}

/*
 * Generic function for seting line
 */
function set_line(category,subCategory) {
  var dataObj = {};
  dataObj[category] = {};
  if (category != subCategory) {
    dataObj[category][subCategory] ={};
    var lineStyles = document.getElementById("lineStyle"+subCategory+category);
    var style = lineStyles.options[lineStyles.selectedIndex].value;
    dataObj[category][subCategory]["lineStyle"] = (style !='') ? style : 'solid';
    dataObj[category][subCategory]["lineWidth"] = (document.getElementById('lineWidth'+subCategory+category).value !='') ? document.getElementById('lineWidth'+subCategory+category).value : '2px';
    dataObj[category][subCategory]["lineColor"] = (document.getElementById('lineColor'+subCategory+category).value !='') ? document.getElementById('lineColor'+subCategory+category).value :'#000';
    dataObj[category][subCategory]["lineGapSize"] = (document.getElementById('lineGapSize'+subCategory+category).value !='') ? document.getElementById('lineGapSize'+subCategory+category).value :'2px';
    dataObj[category][subCategory]["lineSegmentSize"] = (document.getElementById('lineSegmentSize'+subCategory+category).value !='') ? document.getElementById('lineSegmentSize'+subCategory+category).value :'2px';
  } else {
    var lineStyles = document.getElementById("lineStyle"+category);
    var style = lineStyles.options[lineStyles.selectedIndex].value;
    dataObj[category]["lineStyle"] = (style !='') ? style : 'solid';
    dataObj[category]["lineWidth"] = (document.getElementById('lineWidth'+category).value !='') ? document.getElementById('lineWidth'+category).value : '2px';
    dataObj[category]["lineColor"] = (document.getElementById('lineColor'+category).value !='') ? document.getElementById('lineColor'+category).value :'#000';
    dataObj[category]["lineGapSize"] = (document.getElementById('lineGapSize'+category).value !='') ? document.getElementById('lineGapSize'+category).value :'2px';
    dataObj[category]["lineSegmentSize"] = (document.getElementById('lineSegmentSize'+category).value !='') ? document.getElementById('lineSegmentSize'+category).value :'2px';
  }
  zingchart.exec(chartID,'modify', {
    graphid : 0,
    data : dataObj
  });
  creat_json();
}
/*
 * Generic function for seting font
 */
function set_line(category,subCategory) { 
  var dataObj = {};
  dataObj[category] = {};

}

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
var backgoundTypeMarkerLegend = '';
function set_background_type_marker_legend() {
  var bg= document.getElementById("backgroundTypeMarkerLegend");
  backgoundTypeMarkerLegend = bg.options[bg.selectedIndex].value;
  if (backgoundTypeMarkerLegend != 'gradiant') {
    document.getElementById('backgroundColor2MarkerLegend').style.visibility = "hidden";
  } else {
    document.getElementById('backgroundColor2MarkerLegend').style.visibility = "visible";
  }
  set_background_color_marker_legend ();
}
function set_background_color_marker_legend () {
  if (backgoundTypeMarkerLegend == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
         legend : {
          'marker':{
            "background-color-1" : document.getElementById('backgroundColor1MarkerLegend').value
          }
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
            'marker': {
              "background-color-2" : document.getElementById('backgroundColor2MarkerLegend').value
            }
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
            'marker': {
              "background-color-1" : document.getElementById('backgroundColor1MarkerLegend').value
            }
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
            'marker':{
              "background-color-2" : document.getElementById('backgroundColor1MarkerLegend').value
            }
          }
        }
      });
  }
  creat_json();
}
function set_background_image_marker_legend() {
 if (document.getElementById("visibleLegend").checked) {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        legend : {
          "marker" :{
            "background-image" :document.getElementById('backgroundImageMarkerLegend').value
          },
        }
      }
    });
    creat_json();
  };
}
function set_border_marker_legend() {
   if (document.getElementById("visibleLegend").checked) {
    if (document.getElementById('borderMarkerLegend').checked) {
        zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
            "marker" :{
              "border-width" :document.getElementById('borderWidthMarkerLegend').value,
              "border-color" :document.getElementById('borderColorMarkerLegend').value
            },
          }
        }
      });
    } else {
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          legend : {
            "marker" :{
              "border-width" :0
            },
          }
        }
      });
    }
    creat_json();
  };
}
/*****************************************************
 *                   Plot Area                       *
 *****************************************************/
 function adjust_layout_plot_area() {
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        plotarea : {
          "adjustLayout" : document.getElementById('adjustLayoutPlotArea').checked
        }
      }
    });
  creat_json();
 }

 function set_alpha_plot_area() {
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
        plotarea : {
          alpha: document.getElementById('alphaPlotArea').value
        }
      }
    });
    creat_json();
}
var backgroundTypePlotArea='';
function set_background_type_plot_area() {
  var bg= document.getElementById("backgroundTypePlotArea");
  backgroundTypePlotArea = bg.options[bg.selectedIndex].value;
  if (backgroundTypePlotArea != 'gradiant') {
    document.getElementById('backgroundColor2PlotArea').style.visibility = "hidden";
  } else {
    document.getElementById('backgroundColor2PlotArea').style.visibility = "visible";
  }
  set_background_color_plot_area ();
}
function set_background_color_plot_area() {
  if (backgroundTypePlotArea == "gradiant") {
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea: {
            "background-color-1" : document.getElementById('backgroundColor1PlotArea').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "background-color-2" : document.getElementById('backgroundColor2PlotArea').value
          }
        }
      });
  } else {
    //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "background-color-1" : document.getElementById('backgroundColor1PlotArea').value
          }
        }
      });
      //Set background-color-1 attr
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "background-color-2" : document.getElementById('backgroundColor1PlotArea').value
          }
        }
      });
  }
  creat_json();
}
function set_background_image_plot_area() {
  zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "background-image" : document.getElementById('backgroundImagePlotArea').value
          }
        }
      });
  creat_json();
}
function set_background_fir_plot_area() {
  var fits = document.getElementById('backgroundFitPlotArea')
  var selectedFit = fits.options[fits.selectedIndex].value;
    zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "backgroundFit" : selectedFit
          }
        }
      });
  creat_json();
}
function set_background_repeat_plot_area() {
  var repeats = document.getElementById('backgroundRepeatPlotArea')
  var selectedRepeat = repeats.options[repeats.selectedIndex].value;
    zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "backgroundRepeat" : selectedRepeat
          }
        }
      });
  creat_json();
}
function set_background_position_plot_area() {
  zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "backgroundPosition" : document.getElementById('backgroundPositionXPlotArea').value+' '+document.getElementById('backgroundPositionYPlotArea').value
          }
        }
      });
  creat_json();
}
function set_border_plot_area() {
      if (document.getElementById('borderPlotArea').checked) {
        zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "border-width" :document.getElementById('borderWidthPlotArea').value,
              "border-color" :document.getElementById('borderColorPlotArea').value
          }
        }
      });
    } else {
      zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : {
          plotarea : {
              "border-width" :0
          }
        }
      });
    }
    creat_json();
}
function creat_json() {
  zingchart.exec(chartID,'update');
  // At some point we have to fix this this does not work correctly
  var jsonString = JSON.stringify(zingchart.exec(chartID,'getdata' ),null,"\t");
  //if (typeof jsonString != "undefined") {
    document.getElementById('zingcharts-javaScript').value = jsonString;
  //} else {
   // alert("Please select your chart first!!!");
  //}
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
