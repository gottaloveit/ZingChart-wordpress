/*
 * TO DO : 
 * Make grapgh div naming dynamic
 * Be able to feed data as a csv file to it
 * Validate form inputs
 * Fix the Series duplication part that prevents tabs to work anymore.
 * Chart series types should be implenmented
 * The same for trhe 


 * have a data part s
 */
var titleData          = {
    "category" : "title",
    "subcategory" :"title",
    "inputs" : [
      {
        "type":"checkbox",
        "label": "Visible",
        "id" :"visibleTitle",
        "key" :"visible"
      },
      {
        "type" : "text",
        "id"   : "textTitle",
        "key"  : "text",
        "label": "text",
        "divider" :"true"
      },
      {
        "type":"checkbox",
        "label": "Adjust Layout",
        "id" :"adjustLayoutTitle",
        "key" :"adjust-layout",
        "divider" :"true"
      },
      {
        "type":"checkbox",
        "label": "Bold",
        "id" :"boldTitle",
        "key" :"bold",
        "divider" :"true"
      },
      {
        "type" : "bgcolor",
        "id"   : "titletitle", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "font",
        "id"   : "title", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "border",
        "id"   : "title", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "text",
        "id"   : "paddingTopTitle",
        "key"  : "padding-top",
        "label": "padding-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightTitle",
        "key"  : "padding-right",
        "label": "padding-right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomTitle",
        "key"  : "padding-bottom",
        "label": "padding-bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingleftTitle",
        "key"  : "padding-left",
        "label": "padding-left",
      },
      {
        "type" : "text",
        "id"   : "marginTopTitle",
        "key"  : "margin-top",
        "label": "margin-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "marginRightTitle",
        "key"  : "margin-right",
        "label": "margin-right",
      },
      {
        "type" : "text",
        "id"   : "marginBottomTitle",
        "key"  : "margin-bottom",
        "label": "margin-bottom",
      },
      {
        "type" : "text",
        "id"   : "margingleftTitle",
        "key"  : "margin-left",
        "label": "margin-left",
      },
      {
        "type" : "text",
        "id"   : "xTitle",
        "key"  : "x",
        "label": "x-string",
        "divider" : "true"
      },
      {
        "type" : "text",
        "id"   : "yTitle",
        "key"  : "y",
        "label": "y-string",
      },
    ],};
var subtitleData       = {
    "category" : "subtitle",
    "subcategory" :"subtitle",
    "inputs" : [
      {
        "type":"checkbox",
        "label": "Visible",
        "id" :"visibleSubTitle",
        "key" :"visible"
      },
      {
        "type" : "text",
        "id"   : "textSubTitle",
        "key"  : "text",
        "label": "text",
        "divider" :"true"
      },
      {
        "type":"checkbox",
        "label": "Adjust Layout",
        "id" :"adjustLayoutSubTitle",
        "key" :"adjust-layout",
        "divider" :"true"
      },
      {
        "type":"checkbox",
        "label": "Bold",
        "id" :"boldSubTitle",
        "key" :"bold",
        "divider" :"true"
      },
      {
        "type" : "bgcolor",
        "id"   : "subtitlesubtitle", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "font",
        "id"   : "subtitle", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "border",
        "id"   : "subtitle", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "text",
        "id"   : "paddingTopSubTitle",
        "key"  : "padding-top",
        "label": "padding-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightSubTitle",
        "key"  : "padding-right",
        "label": "padding-right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomSubTitle",
        "key"  : "padding-bottom",
        "label": "padding-bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingleftSubTitle",
        "key"  : "padding-left",
        "label": "padding-left",
      },
      {
        "type" : "text",
        "id"   : "marginTopSubTitle",
        "key"  : "margin-top",
        "label": "margin-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "marginRightSubTitle",
        "key"  : "margin-right",
        "label": "margin-right",
      },
      {
        "type" : "text",
        "id"   : "marginBottomSubTitle",
        "key"  : "margin-bottom",
        "label": "margin-bottom",
      },
      {
        "type" : "text",
        "id"   : "margingleftSubTitle",
        "key"  : "margin-left",
        "label": "margin-left",
      },
      {
        "type" : "text",
        "id"   : "xSubTitle",
        "key"  : "x",
        "label": "x-string",
        "divider" : "true"
      },
      {
        "type" : "text",
        "id"   : "ySubTitle",
        "key"  : "y",
        "label": "y-string",
      },
    ],};
var legendDatageneral  = {
    "category" : "legend",
    "subcategory" :"legend",
    "inputs" : [
      {
        "type":"checkbox",
        "label": "Visible",
        "id" :"visibleLegend",
        "key" :"visible"
      },
      {
        "type":"checkbox",
        "label": "Adjust Layout",
        "id" :"adjustLayoutLegend",
        "key" :"adjust-layout",
        "divider" :"true"
      },
      {   
        "type"  :"select",
        "values":[
          "Center",
          "left",
          "Right",
        ],
        "label" :"Align",
        "id"    :"alignLegend",
        "key"   :"align",
        "divider":"true",
      },
      {
        "type":"checkbox",
        "label": "Daggable",
        "id" :"draggableLegend",
        "key" :"draggable",
      },
      {   
        "type"  :"select",
        "values":[
          "vertical",
          "horizontal",
          "float",
          "col x row",
        ],
        "label" :"Layout",
        "id"    :"layoutlegend",
        "key"   :"layout",
        "divider":"true",
      },
      {
        "type" : "text",
        "id"   : "rowLayoutLegend",
        "key"  : "",
        "label": "Row(Works only in col x row)",
      },
      {
        "type" : "text",
        "id"   : "columnLayoutLegend",
        "key"  : "",
        "label": "Column(Works only in col x row)",
      },
      {
        "type" : "text",
        "id"   : "xLegend",
        "key"  : "x",
        "label": "x-string",
        "divider" : "true",
        "defValue" : "0",
      },
      {
        "type" : "text",
        "id"   : "yLegend",
        "key"  : "y",
        "label": "y-string",
        "defValue" : "0",
      },
      {
        "type":"checkbox",
        "label": "Minimize",
        "id" :"minimizeLegend",
        "key" :"minimize",
        "divider" :"true"
      },
      {   
        "type"  :"select",
        "values":[
          "hide",
          "remove",
          "disabled",
        ],
        "label" :"Toggle action",
        "id"    :"toggle-actionLegend",
        "key"   :"toggle-action",
        "divider":"true",
      },
      {
        "type" : "bgcolor",
        "id"   : "legendlegend",
        "key"  : "",
        "label": "",
        "divider" : "true",
      },
      {
        "type" : "border",
        "id"   : "legend",
        "key"  : "",
        "label": "",
        "divider" : "true",
      },
      {
        "type" : "text",
        "id"   : "paddingTopLegend",
        "key"  : "padding-top",
        "label": "padding-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightLegend",
        "key"  : "padding-right",
        "label": "padding-right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomLegend",
        "key"  : "padding-bottom",
        "label": "padding-bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingleftLegend",
        "key"  : "padding-left",
        "label": "padding-left",
      },
      {
        "type" : "text",
        "id"   : "marginTopLegend",
        "key"  : "margin-top",
        "label": "margin-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "marginRightLegend",
        "key"  : "margin-right",
        "label": "margin-right",
      },
      {
        "type" : "text",
        "id"   : "marginBottomLegend",
        "key"  : "margin-bottom",
        "label": "margin-bottom",
      },
      {
        "type" : "text",
        "id"   : "margingleftLegend",
        "key"  : "margin-left",
        "label": "margin-left",
      },
      {
        "type":"checkbox",
        "label": "Highlight plot",
        "id" :"highlight-plotLegend",
        "key" :"highlight-plot",
        "divider" :"true"
      },
    ],};
var legendDataitem     = {
    "category" : "legend",
    "subcategory" :"item",
    "inputs" : [
      {
        "type":"checkbox",
        "label": "Bold",
        "id" :"highlight-plotLegend",
        "key" :"highlight-plot",
      },
      {
        "type":"color",
        "label": "Font color",
        "id" :"font-colorItmeLegend",
        "key" :"font-color",
        "divider":"true"
      },
      {   
        "type"  :"select",
        "values":[
          "normal",
          "italic",
          "oblique",
        ],
        "label" :"Font Style",
        "id"    :"fontStyleItemLegend",
        "key"   :"font-style",
        "divider":"true",
      },
      {
        "type" : "text",
        "id"   : "fontFamilyItemLegend",
        "key"  : "font-family",
        "label": "Font family"
      },
      {   
        "type"  :"select",
        "values":[
          "Center",
          "left",
          "Right",
        ],
        "label" :"Text align",
        "id"    :"textAlignitemLegend",
        "key"   :"text-align",
        "divider":"true",
      },
      {
        "type" : "text",
        "id"   : "paddingTopItemLegend",
        "key"  : "padding-top",
        "label": "padding-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightItemLegend",
        "key"  : "padding-right",
        "label": "padding-right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomItemLegend",
        "key"  : "padding-bottom",
        "label": "padding-bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingleftItemLegend",
        "key"  : "padding-left",
        "label": "padding-left",
      },
      {
        "type" : "text",
        "id"   : "marginTopItemLegend",
        "key"  : "margin-top",
        "label": "margin-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "marginRightItemLegend",
        "key"  : "margin-right",
        "label": "margin-right",
      },
      {
        "type" : "text",
        "id"   : "marginBottomItemLegend",
        "key"  : "margin-bottom",
        "label": "margin-bottom",
      },
      {
        "type" : "text",
        "id"   : "margingleftItemLegend",
        "key"  : "margin-left",
        "label": "margin-left",
      },

    ],};
var legendDataMarker   = {
    "category" : "legend",
    "subcategory" :"marker",
    "inputs" : [
      {
        "type"  :"select",
        "values":["triangle", "square", "circle", "diamond", "trapezoid", "rectangle"
        , "parallelogram", "plus", "cross", "arrow", "star3","star4","star5","star6","star7",
        "star8","star9","rpoly3","rpoly4","rpoly5","rpoly6","rpoly7","rpoly8","rpoly9","gear3","gear4","gear5","gear6","gear7","gear8","gear9", "ellipse", "arc", "pie"
        ],
        "label" :"Type ",
        "id"    :"typeMarkerLegend",
        "key"   :"type",
      },
      {
        "type" : "range",
        "id"   : "alphaMarkerLegend",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "markerlegend", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "text",
        "id"   : "backgroundImageMarkerLegend",
        "key"  : "backgroundImage",
        "label": "Background Image",
        "divider" :"true"
      },
      {
        "type" : "border",
        "id"   : "markerlegend",
        "key"  : "",
        "label": "",
        "divider" : "true",
      },
    ],};
var plotareaData       = {
    "category" : "plotarea",
    "subcategory" :"plotarea",
    "inputs":[
      {
        "type":"checkbox",
        "label": "Adjust Layout",
        "id" :"adjustLayoutPlotArea",
        "key" :"adjust-layout",
        "divider" :"true"
      },
      {
        "type" : "range",
        "id"   : "alphaPlotArea",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "plotareaplotarea", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "text",
        "id"   : "backgroundImagePlotArea",
        "key"  : "backgroundImage",
        "label": "Background Image",
      },
      {
        "type"  :"select",
        "values":["X","Y","XY"
        ],
        "label" :"Background fit",
        "id"    :"background-fitPlotArea",
        "key"   :"background-fit",
      },
      {
        "type" : "border",
        "id"   : "plotarea",
        "key"  : "",
        "label": "",
        "divider" : "true",
      },
      {
        "type" : "text",
        "id"   : "paddingTopPlotArea",
        "key"  : "padding-top",
        "label": "padding-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightPlotArea",
        "key"  : "padding-right",
        "label": "padding-right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomPlotArea",
        "key"  : "padding-bottom",
        "label": "padding-bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingleftPlotArea",
        "key"  : "padding-left",
        "label": "padding-left",
      },
      {
        "type" : "text",
        "id"   : "marginTopPlotArea",
        "key"  : "margin-top",
        "label": "margin-top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "marginRightPlotArea",
        "key"  : "margin-right",
        "label": "margin-right",
      },
      {
        "type" : "text",
        "id"   : "marginBottomPlotArea",
        "key"  : "margin-bottom",
        "label": "margin-bottom",
      },
      {
        "type" : "text",
        "id"   : "margingleftPlotArea",
        "key"  : "margin-left",
        "label": "margin-left",
      },
    ],};
var plotGeneralData    = {
    "category" : "plot",
    "subcategory" :"plot",
    "inputs":[
      {
        "type":"checkbox",
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
      
    ],};
var plotAnimationData  = {
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
      
    ],};
var plotHoverState     = {
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
    ],};
var hoverMarker        = {
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
      ]};
var plotMarkerData     = {
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
    ]};
var tooltip            = {
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
        "id"   : "tooltipplot",
        "key"  : "",
        "label": "",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "heightTooltipPlot",
        "key"  : "height",
        "label": "Height ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "widthTooltipPlot",
        "key"  : "width",
        "label": "Width ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginToptooltipplot",
        "key"  : "marginTop",
        "label": "Margin Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginRighttooltipplot",
        "key"  : "marginRight",
        "label": "Margin Right",
      },
      {
        "type" : "text",
        "id"   : "MarginBottomtooltipplot",
        "key"  : "marginBottom",
        "label": "Margin Bottom",
      },
      {
        "type" : "text",
        "id"   : "MarginLefttooltipplot",
        "key"  : "marginLeft",
        "label": "Margin Left",
      },
      {
        "type" : "text",
        "id"   : "paddingToptooltipplot",
        "key"  : "paddingTop",
        "label": "Padding Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRighttooltipplot",
        "key"  : "paddingRight",
        "label": "Padding Right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomtooltipplot",
        "key"  : "paddingBottom",
        "label": "Padding Bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingLefttooltipplot",
        "key"  : "paddingLeft",
        "label": "Padding Left",
      },
      {
        "type" : "checkbox",
        "id"   : "calloutTooltipPlot",
        "key"  : "callout",
        "label": "Callout",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutHeightTooltipplot",
        "key"  : "calloutHeight",
        "label": "Callout Height",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutWidthTooltipplot",
        "key"  : "calloutWidth",
        "label": "Callout Width",
      },
      {
        "type"  :"select",
        "values":[
          "top",
          "right",
          "bottom",
          "left"
        ],
        "labels" :[
        "Top",
        "Right",
        "Bottom",
        "Left",
        ],
        "label" :"Callout Position ",
        "id"    :"calloutPositionTooltipPlot",
        "key"   :"calloutPosition",
      },
      {
        "type" : "text",
        "id"   : "xTooltipPlot",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "yTooltipPlot",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      {
        "type" : "checkbox",
        "id"   : "wrapTextTooltipPlot",
        "key"  : "wrapText",
        "label": "Wrap text",
        "divider" :"true"
      },
    ]};
var valueBox           = {
    "category" : "plot",
    "subcategory" :"value-box",
    "inputs" :[
      {
        "type" : "range",
        "id"   : "alphavalueBoxPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
       {
        "type" : "text",
        "id"   : "backgroundImagevalueBoxPlot",
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
        "id"    :"backgroundFitvalueBoxPlot",
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
        "id"    :"backgroundRepeatvalueBoxPlot",
        "key"   :"background-repeat ",
        "divider" :"true"
      },
      {
       "type" : "border",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "checkbox",
        "id"   : "visiblevalueBoxPlot",
        "key"  : "visib",
        "label": "Visib",
        "divider" :"true"
      },
      {
        "type" : "font",
        "id"   : "value-boxplot",
        "key"  : "",
        "label": "",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "heightvalueBoxPlot",
        "key"  : "height",
        "label": "Height ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "widthvalueBoxPlot",
        "key"  : "width",
        "label": "Width ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginTopvalueBoxPlot",
        "key"  : "marginTop",
        "label": "Margin Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginRightvalueBoxPlot",
        "key"  : "marginRight",
        "label": "Margin Right",
      },
      {
        "type" : "text",
        "id"   : "MarginBottomvalueBoxPlot",
        "key"  : "marginBottom",
        "label": "Margin Bottom",
      },
      {
        "type" : "text",
        "id"   : "MarginLeftvalueBoxPlot",
        "key"  : "marginLeft",
        "label": "Margin Left",
      },
      {
        "type" : "text",
        "id"   : "paddingTopvalueBoxPlot",
        "key"  : "paddingTop",
        "label": "Padding Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightvalueBoxPlot",
        "key"  : "paddingRight",
        "label": "Padding Right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomvalueBoxPlot",
        "key"  : "paddingBottom",
        "label": "Padding Bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingLeftvalueBoxPlot",
        "key"  : "paddingLeft",
        "label": "Padding Left",
      },
      {
        "type" : "checkbox",
        "id"   : "calloutvalueBoxPlot",
        "key"  : "callout",
        "label": "Callout",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutHeightvalueBoxPlot",
        "key"  : "calloutHeight",
        "label": "Callout Height",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutWidthvalueBoxPlot",
        "key"  : "calloutWidth",
        "label": "Callout Width",
      },
      {
        "type"  :"select",
        "values":[
          "top",
          "right",
          "bottom",
          "left"
        ],
        "labels" :[
        "Top",
        "Right",
        "Bottom",
        "Left",
        ],
        "label" :"Callout Position ",
        "id"    :"calloutPositionvalueBoxPlot",
        "key"   :"calloutPosition",
      },
      {
        "type" : "text",
        "id"   : "xvalueBoxPlot",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "yvalueBoxPlot",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      {
        "type" : "checkbox",
        "id"   : "wrapTextvalueBoxPlot",
        "key"  : "wrapText",
        "label": "Wrap text",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "placementvalueBoxPlot",
        "key"  : "placement",
        "label": "Placement",
        "divider" :"true"
      },
    ]};
var previewData        = {
      "category" : "preview",
      "subcategory" :"preview",
      "inputs" : [ 
      {
        "type" : "checkbox",
        "id"   : "visiblePreview",
        "key"  : "visible",
        "label": "Visib",
      },
      {
        "type" : "checkbox",
        "id"   : "adjustLayoutPreview",
        "key"  : "adjust-layout",
        "label": "Adjust Layout",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "heightPreview",
        "key"  : "height",
        "label": "Height",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "widthPreview",
        "key"  : "width",
        "label": "Width",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginPreview",
        "key"  : "marginTop",
        "label": "Margin Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginRightPreview",
        "key"  : "marginRight",
        "label": "Margin Right",
      },
      {
        "type" : "text",
        "id"   : "MarginBottomPreview",
        "key"  : "marginBottom",
        "label": "Margin Bottom",
      },
      {
        "type" : "text",
        "id"   : "MarginLeftPreview",
        "key"  : "marginLeft",
        "label": "Margin Left",
      },
      {
        "type" : "text",
        "id"   : "paddingTopPreview",
        "key"  : "paddingTop",
        "label": "Padding Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightPreview",
        "key"  : "paddingRight",
        "label": "Padding Right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomPreview",
        "key"  : "paddingBottom",
        "label": "Padding Bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingLeftPreview",
        "key"  : "paddingLeft",
        "label": "Padding Left",
      },
      {
        "type" : "text",
        "id"   : "xPreview",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "yPreview",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      {
        "type" : "bgcolor",
        "id"   : "preview", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },],}
var scaleRData         = {
  "category" : "scale-r",
      "subcategory" :"scale-r",
      "inputs" : [ 
      {
        "type" : "range",
        "id"   : "aperture",
        "key"  : "aperture",
        "label": "Aperture",
        "min"  : '0',
        "max"  : '360',
        "step" :'1'
      },
      ],};
var scaleData          = {
    "category" : "scale",
      "subcategory" :"scale",
      "inputs" : [ 
      {
        "type"  :"select",
        "values":[
          "auto",
        ],
        "labels" :[
        "Auto",
        ],
        "label" :"Size Factor ",
        "id"    :"size-factorscalescale",
        "key"   :"size-factor",
      },
      {
        "type" : "range",
        "id"   : "size-factor2scalescale",
        "key"  : "size-factor",
        "label": "Size Factor",
        "min"  : '0',
        "max"  : '10',
        "step" :'.1'
      },
      ],};
var labelData          = {
      "category" : "labels",
      "subcategory" :"labels",
      "inputs" : [ 
        {
          "type" : "bgcolor",
          "id"   : "labelslabels", //In the case of category ID the id should match the category name
          "key"  : "",
          "label": "",
         
        },
        {
          "type" : "checkbox",
          "id"   : "callout",
          "key"  : "callout",
          "label": "Callout",
           "divider" :"true",
        },
        {
          "type" : "text",
          "id"   : "callout-height",
          "key"  : "callout-height",
          "label": "Callout Height",
        },
        {
          "type" : "text",
          "id"   : "callout-width",
          "key"  : "callout-width",
          "label": "Callout Width",
        },
        {
          "type" : "text",
          "id"   : "callout-hooklabelsX",
          "key"  : "callout-hook",
          "label": "Callout Hook X",
        },
        {
          "type" : "text",
          "id"   : "callout-hooklabelsY",
          "key"  : "callout-hook",
          "label": "Callout Hook Y",
        },
         {
          "type"  :"select",
          "values":[
            "top",
            "right",
            "bottom",
            "left"
          ],
          "labels" :[
          "Top",
          "Right",
          "Bottom",
          "Left"
          ],
          "label" :"Callout position",
          "id"    :"callout-positionlabels",
          "key"   :"callout-position",
        },
        {
          "type"  :"select",
          "values":[
            "",
            "c",
          ],
          "labels" :[
          "Normal",
          "center"
          ],
          "label" :"Anchor",
          "id"    :"anchorlabels",
          "key"   :"anchor",
          "divider" :"true",
        },

        {
          "type" : "checkbox",
          "id"   : "boldlabels",
          "key"  : "bold",
          "label": "Bold",
          "divider" :"true"
        },
        {
          "type" : "border",
          "id"   : "labels",
          "key"  : "",
          "label": "",
          "divider" :"true"
        },
        {
          "type" : "text",
          "id"   : "textlabels",
          "key"  : "text",
          "label": "Text",
          "divider" :"true"
        },
        {
          "type" : "select",
          "values":["left","center","right"],
          "labels" :["Left","Center","Right"],
          "label"  : "Text Align",
          "id"     : "text-alignlabels",
          "key"    : "text-align"
        },
        {
          "type" : "select",
          "values":["Top","middle","bottom"],
          "labels" :["Top","Middle","Bottom"],
          "label"  : "vertical align",
          "id"     : "vertical-alignlabels",
          "key"    : "vertical-align"
        },
        {
          "type" : "text",
          "id"   : "urllabels",
          "key"  : "url",
          "label": "Url",
        },
        {
          "type" : "select",
          "values":["_self","blank"],
          "labels" :["Self","Blank"],
          "label"  : "Target",
          "id"     : "targetlabels",
          "key"    : "target"
        },
        {
          "type" : "checkbox",
          "id"   : "underlinelabels",
          "key"  : "underline",
          "label": "Underline",
        },
        {
          "type" : "checkbox",
          "id"   : "wrap-textlabels",
          "key"  : "wrap-text",
          "label": "Wrap text",
        },
        {
          "type" : "color",
          "id"   : "fontColorlabels",
          "key"  : "font-color",
          "label": "Font Color",
          "divider" :"true"
        },
        {
          "type" : "text",
          "id"   : "fontSizelabels",
          "key"  : "font-size",
          "label": "Font Size",
        },
        {
          "type" : "text",
          "id"   : "fontFamilylabels",
          "key"  : "font-family",
          "label": "Font Family",
        },
        {
        "type" : "range",
        "id"   : "font-anglelabels",
        "key"  : "font-angle",
        "label": "Font Angle",
        "min"  : '0',
        "max"  : '360',
        "step" :'1'
      },
      {
        "type" : "text",
        "id"   : "heightlabels",
        "key"  : "height",
        "label": "Height",
        "divider" : "true"
      },
      {
        "type" : "text",
        "id"   : "widthlabels",
        "key"  : "width",
        "label": "Width",
      },
      {
        "type" : "text",
        "id"   : "margin-toplabels",
        "key"  : "margin-top",
        "label": "Margin top",
        "divider" : "true"
      },
      {
        "type" : "text",
        "id"   : "margin-rightlabels",
        "key"  : "margin-right",
        "label": "Margin right",
      },
      {
        "type" : "text",
        "id"   : "margin-bottomlabels",
        "key"  : "margin-bottom",
        "label": "Margin bottom",
      },
      {
        "type" : "text",
        "id"   : "margin-leftlabels",
        "key"  : "margin-left",
        "label": "Margin left",
      },
       {
        "type" : "text",
        "id"   : "padding-toplabels",
        "key"  : "padding-top",
        "label": "Padding top",
        "divider" : "true"
      },
      {
        "type" : "text",
        "id"   : "padding-rightlabels",
        "key"  : "padding-right",
        "label": "Padding right",
      },
      {
        "type" : "text",
        "id"   : "padding-bottomlabels",
        "key"  : "padding-bottom",
        "label": "Padding bottom",
      },
      {
        "type" : "text",
        "id"   : "padding-leftlabels",
        "key"  : "padding-left",
        "label": "Padding left",
      },
      {
        "type" : "text",
        "id"   : "padding-leftlabels",
        "key"  : "padding-left",
        "label": "Padding left",
      },
      {
        "type" : "text",
        "id"   : "xlabels",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "ylabels",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      ],};
var seriesGeneralData  = {
    "category" : "series",
    "subcategory" :"series",
    "inputs":[
      {
        "type":"checkbox",
        "label": "Active Area",
        "id" :"activeAreaSeries",
        "key" :"active_area"
      },
      {
        "type" : "range",
        "id"   : "alphaAreaSeries",
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
        "id"    :"cursorSeries",
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
        "id"    :"aspectSeries",
        "key"   :"aspect",
        "divider":"true"
      },
      {
        "type" : "text",
        "id"   : "decimalsSeries",
        "key"  : "decimals",
        "label": "decimals",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "decimalsSeparatorSeries",
        "key"  : "decimalsSeparator",
        "label": "Decimals Separator",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "detachSeries",
        "key"  : "detach",
        "label": "Detach",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "maxNodesSeries",
        "key"  : "maxNodes",
        "label": "max Nodes",
        "divider" :"true"
      },
      {
        "type" : "checkbox",
        "id"   : "multiplierSeries",
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
        "id"    :"negationSeries",
        "key"   :"negation",
        "divider":"true"
      },
      {
        "type" : "range",
        "id"   : "refAngleSeries",
        "key"  : "refAngle",
        "label": "Ref Angle",
        "divider" :"true",
        "min"  : '0',
        "max"  : '360',
        "step" :'1'
      },
      {
        "type" : "checkbox",
        "id"   : "shortSeries",
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
        "id"    :"shortUnitSeries",
        "key"   :"shortUnit",
      },
      {
        "type" : "range",
        "id"   : "sliceSeries",
        "key"  : "slice",
        "label": "Slice",
        "divider" :"true",
        "min"  : '0',
        "max"  : '100',
        "step" :'1'
      },
      {
        "type" : "checkbox",
        "id"   : "stackedSeries",
        "key"  : "stacked",
        "label": "Stacked",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "thousandsSeparatorSeries",
        "key"  : "thousandsSeparator",
        "label": "Thousands Separator",
        "divider" :"true"
      },
      {
        "type" : "range",
        "id"   : "alphaSeries",
        "key"  : "alpha",
        "label": "Alpha",
        "divider" :"true",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "seriesseries", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
       "type" : "border",
        "id"   : "series", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "series", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      
    ],};
var seriesAnimationData= {
    "category" : "series",
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
      
    ],};
var seriesHoverState   = {
    "category" : "series",
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
    ],};
var serieshoverMarker  = {
   "category" : "series",
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
      ]};
var seriesMarkerData   = {
    "category" : "series",
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
        "type" : "range",
        "id"   : "sizePlot",
        "key"  : "size",
        "label": "Size",
        "min"  : '0',
        "max"  : '100',
        "step" :'1'
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
    ]};
var seriestooltip      = {
    "category" : "series",
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
        "id"   : "tooltipplot",
        "key"  : "",
        "label": "",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "heightTooltipPlot",
        "key"  : "height",
        "label": "Height ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "widthTooltipPlot",
        "key"  : "width",
        "label": "Width ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginToptooltipplot",
        "key"  : "marginTop",
        "label": "Margin Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginRighttooltipplot",
        "key"  : "marginRight",
        "label": "Margin Right",
      },
      {
        "type" : "text",
        "id"   : "MarginBottomtooltipplot",
        "key"  : "marginBottom",
        "label": "Margin Bottom",
      },
      {
        "type" : "text",
        "id"   : "MarginLefttooltipplot",
        "key"  : "marginLeft",
        "label": "Margin Left",
      },
      {
        "type" : "text",
        "id"   : "paddingToptooltipplot",
        "key"  : "paddingTop",
        "label": "Padding Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRighttooltipplot",
        "key"  : "paddingRight",
        "label": "Padding Right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomtooltipplot",
        "key"  : "paddingBottom",
        "label": "Padding Bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingLefttooltipplot",
        "key"  : "paddingLeft",
        "label": "Padding Left",
      },
      {
        "type" : "checkbox",
        "id"   : "calloutTooltipPlot",
        "key"  : "callout",
        "label": "Callout",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutHeightTooltipplot",
        "key"  : "calloutHeight",
        "label": "Callout Height",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutWidthTooltipplot",
        "key"  : "calloutWidth",
        "label": "Callout Width",
      },
      {
        "type"  :"select",
        "values":[
          "top",
          "right",
          "bottom",
          "left"
        ],
        "labels" :[
        "Top",
        "Right",
        "Bottom",
        "Left",
        ],
        "label" :"Callout Position ",
        "id"    :"calloutPositionTooltipPlot",
        "key"   :"calloutPosition",
      },
      {
        "type" : "text",
        "id"   : "xTooltipPlot",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "yTooltipPlot",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      {
        "type" : "checkbox",
        "id"   : "wrapTextTooltipPlot",
        "key"  : "wrapText",
        "label": "Wrap text",
        "divider" :"true"
      },
    ]};
var seriesvalueBox     = {
    "category" : "series",
    "subcategory" :"value-box",
    "inputs" :[
      {
        "type" : "range",
        "id"   : "alphavalueBoxPlot",
        "key"  : "alpha",
        "label": "Alpha",
        "min"  : '0',
        "max"  : '1',
        "step" :'.1'
      },
      {
        "type" : "bgcolor",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
       {
        "type" : "text",
        "id"   : "backgroundImagevalueBoxPlot",
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
        "id"    :"backgroundFitvalueBoxPlot",
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
        "id"    :"backgroundRepeatvalueBoxPlot",
        "key"   :"background-repeat ",
        "divider" :"true"
      },
      {
       "type" : "border",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "line",
        "id"   : "value-boxplot", //In the case of category ID the id should match the category name
        "key"  : "",
        "label": "",
        "divider" :"true",
      },
      {
        "type" : "checkbox",
        "id"   : "visiblevalueBoxPlot",
        "key"  : "visib",
        "label": "Visib",
        "divider" :"true"
      },
      {
        "type" : "font",
        "id"   : "value-boxplot",
        "key"  : "",
        "label": "",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "heightvalueBoxPlot",
        "key"  : "height",
        "label": "Height ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "widthvalueBoxPlot",
        "key"  : "width",
        "label": "Width ",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginTopvalueBoxPlot",
        "key"  : "marginTop",
        "label": "Margin Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "MarginRightvalueBoxPlot",
        "key"  : "marginRight",
        "label": "Margin Right",
      },
      {
        "type" : "text",
        "id"   : "MarginBottomvalueBoxPlot",
        "key"  : "marginBottom",
        "label": "Margin Bottom",
      },
      {
        "type" : "text",
        "id"   : "MarginLeftvalueBoxPlot",
        "key"  : "marginLeft",
        "label": "Margin Left",
      },
      {
        "type" : "text",
        "id"   : "paddingTopvalueBoxPlot",
        "key"  : "paddingTop",
        "label": "Padding Top",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "paddingRightvalueBoxPlot",
        "key"  : "paddingRight",
        "label": "Padding Right",
      },
      {
        "type" : "text",
        "id"   : "paddingBottomvalueBoxPlot",
        "key"  : "paddingBottom",
        "label": "Padding Bottom",
      },
      {
        "type" : "text",
        "id"   : "paddingLeftvalueBoxPlot",
        "key"  : "paddingLeft",
        "label": "Padding Left",
      },
      {
        "type" : "checkbox",
        "id"   : "calloutvalueBoxPlot",
        "key"  : "callout",
        "label": "Callout",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutHeightvalueBoxPlot",
        "key"  : "calloutHeight",
        "label": "Callout Height",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "calloutWidthvalueBoxPlot",
        "key"  : "calloutWidth",
        "label": "Callout Width",
      },
      {
        "type"  :"select",
        "values":[
          "top",
          "right",
          "bottom",
          "left"
        ],
        "labels" :[
        "Top",
        "Right",
        "Bottom",
        "Left",
        ],
        "label" :"Callout Position ",
        "id"    :"calloutPositionvalueBoxPlot",
        "key"   :"calloutPosition",
      },
      {
        "type" : "text",
        "id"   : "xvalueBoxPlot",
        "key"  : "x",
        "label": "Offset X",
        "divider" :"true",
        "defValue" : "0"
      },
      {
        "type" : "text",
        "id"   : "yvalueBoxPlot",
        "key"  : "y",
        "label": "Offset Y",
        "defValue" : "0"
      },
      {
        "type" : "checkbox",
        "id"   : "wrapTextvalueBoxPlot",
        "key"  : "wrapText",
        "label": "Wrap text",
        "divider" :"true"
      },
      {
        "type" : "text",
        "id"   : "placementvalueBoxPlot",
        "key"  : "placement",
        "label": "Placement",
        "divider" :"true"
      },
    ]};
var scaleX             = {
  "category" : "scale-x",
  "subcategory" :"scale-x",
  "inputs" :[
  {
    "type" : "range",
    "id"   : "alphascaleX",
    "key"  : "alpha",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '1',
    "step" :'.1'
  },
  {
    "type" : "text",
    "id"   : "decimalsScaleX",
    "key"  : "decimals",
    "label": "Decimals",
    "divider" :"true"
  },
  {
    "type" : "text",
    "id"   : "decimals-separatorScaleX",
    "key"  : "decimals-separator",
    "label": "Decimals separator",
  },
  {
    "type" : "text",
    "id"   : "formatScaleX",
    "key"  : "format",
    "label": "Format",
    "divider" :"true"
  },
  {
    "type" : "checkbox",
    "id"   : "items-overlap",
    "key"  : "items-overlap",
    "label": "Callvitems-overlapout",
    "divider" :"true",
  },
  {
    "type" : "color",
    "id"   : "line-colorScaleX",
    "key"  : "line-color",
    "label": "Line color",
    "divider" :"true"
  },
  {
    "type" : "range",
    "id"   : "line-widthscaleX",
    "key"  : "line-width",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "methodAnimation", 
    "values" :["solid","dotted","dashed"],
    "labels" :['Solid',
    'Dotted',
    'Dashed',
    ],
    "key"  : "line-style",
    "label": "Line style",
  },
  {
    "type" : "text",
    "id"   : "paddingTopScaleX",
    "key"  : "padding-top",
    "label": "padding-top",
    "divider" :"true"
  },
  {
    "type" : "text",
    "id"   : "paddingTopScaleX",
    "key"  : "padding-right",
    "label": "padding-right",
  },
  {
    "type" : "text",
    "id"   : "paddingBottomScaleX",
    "key"  : "padding-bottom",
    "label": "padding-bottom",
  },
  {
    "type" : "text",
    "id"   : "paddingleftScaleX",
    "key"  : "padding-left",
    "label": "padding-left",
  },
  {
    "type" : "text",
    "id"   : "marginTopScaleX",
    "key"  : "margin-top",
    "label": "margin-top",
    "divider" :"true"
  },
  {
    "type" : "text",
    "id"   : "marginTopScaleX",
    "key"  : "margin-right",
    "label": "margin-right",
  },
  {
    "type" : "text",
    "id"   : "marginBottomScaleX",
    "key"  : "margin-bottom",
    "label": "margin-bottom",
  },
  {
    "type" : "text",
    "id"   : "margingleftScaleX",
    "key"  : "margin-left",
    "label": "margin-left",
  },
  {
    "type" : "range",
    "id"   : "max-itemsscaleX",
    "key"  : "max-items",
    "label": "Max items",
    "min"  : '0',
    "max"  : '100',
    "step" :'1',
    "divider" : "true"
  },
  {
    "type" : "range",
    "id"   : "max-ticksscaleX",
    "key"  : "max-ticks",
    "label": "Max ticks",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "methodAnimation", 
    "values" :["standard","currency"],
    "labels" :['Standartd',
    'Currancy',
    ],
    "key"  : "negation",
    "label": "Negation",
    "divider" : "true"
  },
  {
    "type" : "select",
    "id"   : "short-unitScaleX", 
    "values" :["k","K","m","M","b","B"],
    "key"  : "short-unit",
    "label": "Short unit",
    "divider" : "true"
  },
  {
    "type" : "select",
    "id"   : "thousands-separatorScaleX", 
    "values" :[",","."],
    "key"  : "thousands-separator",
    "label": "Thousands Separator",
    "divider" : "true"
  },
  {
    "type" : "text",
    "id"   : "valuesScaleX",
    "key"  : "values",
    "label": "Values",
    "divider" :"true"
  },
  {
    "type" : "checkbox",
    "id"   : "zoomingScaleX",
    "key"  : "zooming",
    "label": "Zooming",
    "divider" :"true",
  },
  {
    "type" : "checkbox",
    "id"   : "zoom-snapScaleX",
    "key"  : "zoom-snap",
    "label": "zoom-snap",
  },
   {
    "type" : "text",
    "id"   : "zoom-toScaleX",
    "key"  : "zoom-to",
    "label": "Zoom to",
    "divider" :"true"
  },
  {
    "type" : "select",
    "id"   : "placementScaleX", 
    "values" :["default","opposite"],
    "key"  : "placement",
    "label": "Placement",
    "divider" : "true"
  },

  ],};
var scaleXGuid         = {
  "category" : "scale-x",
  "subcategory" :"guide",
  "inputs" :[
  {
    "type" : "range",
    "id"   : "alphascaleX",
    "key"  : "alpha",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '1',
    "step" :'.1'
  },
  {
    "type" : "color",
    "id"   : "line-colorScaleX",
    "key"  : "line-color",
    "label": "Line color",
    "divider" :"true"
  },
  {
    "type" : "range",
    "id"   : "line-widthscaleX",
    "key"  : "line-width",
    "label": "Line width",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-gap-sizescaleX",
    "key"  : "line-gap-size",
    "label": "Line gap size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-segment-sizescaleX",
    "key"  : "line-segment-size",
    "label": "Line segment size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "methodAnimation", 
    "values" :["solid","dotted","dashed"],
    "labels" :['Solid',
    'Dotted',
    'Dashed',
    ],
    "key"  : "line-style",
    "label": "Line style",
  },
  {
    "type" : "checkbox",
    "id"   : "visibleScaleX",
    "key"  : "visible",
    "label": "Visible",
    "divider" :"true",
  },
  ],};
var scaleXLabel        = {
  "category" : "scale-x",
  "subcategory" :"label",
  "inputs" :[
    {
      "type" : "range",
      "id"   : "font-sizeLabelScaleX",
      "key"  : "font-size",
      "label": "Font size",
      "min"  : '0',
      "max"  : '100',
      "step" :'1',
    },
    {
      "type" : "color",
      "id"   : "font-colorLabelScaleX",
      "key"  : "font-color",
      "label": "Font color",
    },
    {
      "type" : "text",
      "id"   : "font-familyLabelScaleX",
      "key"  : "font-family",
      "label": "Font family",
    },
    {
      "type" : "checkbox",
      "id"   : "boldLabelScaleX",
      "key"  : "bold",
      "label": "bold",
    },
    {
      "type" : "text",
      "id"   : "paddingTopLabelScaleX",
      "key"  : "padding-top",
      "label": "padding-top",
      "divider" :"true",
    },
    {
      "type" : "text",
      "id"   : "paddingTopLabelScaleX",
      "key"  : "padding-right",
      "label": "padding-right",
    },
    {
      "type" : "text",
      "id"   : "paddingBottomLabelScaleX",
      "key"  : "padding-bottom",
      "label": "padding-bottom",
    },
    {
      "type" : "text",
      "id"   : "paddingleftLabelScaleX",
      "key"  : "padding-left",
      "label": "padding-left",
    },
    {
      "type" : "text",
      "id"   : "marginTopLabelScaleX",
      "key"  : "margin-top",
      "label": "margin-top",
      "divider" :"true"
    },
    {
      "type" : "text",
      "id"   : "marginTopLabelScaleX",
      "key"  : "margin-right",
      "label": "margin-right",
    },
    {
      "type" : "text",
      "id"   : "marginBottomLabelScaleX",
      "key"  : "margin-bottom",
      "label": "margin-bottom",
    },
    {
      "type" : "text",
      "id"   : "margingleftLabelScaleX",
      "key"  : "margin-left",
      "label": "margin-left",
    },
    {
      "type" : "text",
      "id"   : "textLabelScaleX",
      "key"  : "text",
      "label": "Text",
      "divider" :"true",
    },
    {
      "type" : "range",
      "id"   : "heightLabelScaleX",
      "key"  : "height",
      "label": "Height",
      "min"  : '0',
      "max"  : '1000',
      "step" :'1',
      "divider" : "true",
    },
    {
      "type" : "range",
      "id"   : "widthLabelScaleX",
      "key"  : "width",
      "label": "Width",
      "min"  : '0',
      "max"  : '1000',
      "step" :'1'
    },
    {
      "type" : "checkbox",
      "id"   : "wrap-textLabelScaleX",
      "key"  : "wrap-text",
      "label": "Wrap text",
    },
  ], };
var scaleXmarkers      = {
  "category" : "scale-x",
  "subcategory" :"markers",
  "inputs" :[
    {
    "type" : "select",
    "id"   : "typeMarkersScale-x", 
    "values" :["line","area"],
    "key"  : "type",
    "label": "Type",
  },
  {
    "type"   : "select",
    "id"     : "placementMarkersScaleX", 
    "values" :["default","opposite"],
    "key"    : "placement",
    "label"  : "Placement",
    "divider" : "true"
  },
  {
    "type" : "range",
    "id"   : "alphaMarkerscaleX",
    "key"  : "alpha",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '1',
    "step" :'.1'
  },
  {
    "type" : "bgcolor",
    "id"   : "scale-xmarkers", //In the case of category ID the id should match the category name
    "key"  : "",
    "label": "",
    "divider" :"true",
  },
  {
    "type" : "color",
    "id"   : "line-colorScaleX",
    "key"  : "line-color",
    "label": "Line color",
    "divider" :"true"
  },
  {
    "type" : "range",
    "id"   : "line-widthscaleX",
    "key"  : "line-width",
    "label": "Line width",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-gap-sizescaleX",
    "key"  : "line-gap-size",
    "label": "Line gap size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-segment-sizescaleX",
    "key"  : "line-segment-size",
    "label": "Line segment size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "methodAnimation", 
    "values" :["solid","dotted","dashed"],
    "labels" :['Solid',
    'Dotted',
    'Dashed',
    ],
    "key"  : "line-style",
    "label": "Line style",
  },

  ],};
var scaleXrefLine      = {
  "category" : "scale-x",
  "subcategory" :"ref-line",
  "inputs" :[
  {
    "type" : "range",
    "id"   : "alphaMarkerscaleX",
    "key"  : "alpha",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '1',
    "step" :'.1'
  },
  {
    "type" : "color",
    "id"   : "line-colorScaleX",
    "key"  : "line-color",
    "label": "Line color",
    "divider" :"true"
  },
  {
    "type" : "range",
    "id"   : "line-widthscaleX",
    "key"  : "line-width",
    "label": "Line width",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-gap-sizescaleX",
    "key"  : "line-gap-size",
    "label": "Line gap size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-segment-sizescaleX",
    "key"  : "line-segment-size",
    "label": "Line segment size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "lineStyleRefLineScaleX", 
    "values" :["solid","dotted","dashed"],
    "labels" :['Solid',
    'Dotted',
    'Dashed',
    ],
    "key"  : "line-style",
    "label": "Line style",
  },
  {
    "type" : "checkbox",
    "id"   : "visibleRefLineScaleX",
    "key"  : "visible",
    "label": "Visible",
    "divider" :"true"
  },
  ],};
var scaleXTick         = {
  "category" : "scale-x",
  "subcategory" :"tick",
  "inputs" :[
  {
    "type" : "range",
    "id"   : "alphaTickscaleX",
    "key"  : "alpha",
    "label": "Alpha",
    "min"  : '0',
    "max"  : '1',
    "step" :'.1'
  },
  {
    "type" : "color",
    "id"   : "line-colorTickScaleX",
    "key"  : "line-color",
    "label": "Line color",
    "divider" :"true"
  },
  {
    "type" : "range",
    "id"   : "line-widthTickscaleX",
    "key"  : "line-width",
    "label": "Line width",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-gap-sizeTickscaleX",
    "key"  : "line-gap-size",
    "label": "Line gap size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "range",
    "id"   : "line-segment-sizeTickscaleX",
    "key"  : "line-segment-size",
    "label": "Line segment size",
    "min"  : '0',
    "max"  : '100',
    "step" :'1'
  },
  {
    "type" : "select",
    "id"   : "lineStyleRefLineTickScaleX", 
    "values" :["solid","dotted","dashed"],
    "labels" :['Solid',
    'Dotted',
    'Dashed',
    ],
    "key"  : "line-style",
    "label": "Line style",
  },
  {
    "type" : "select",
    "id"   : "placementTickScaleX", 
    "values" :["default","opposite"],
    "key"  : "placement",
    "label": "Placement",
    "divider" : "true"
  },
  {
    "type" : "checkbox",
    "id"   : "visibleRefLineScaleX",
    "key"  : "visible",
    "label": "Visible",
    "divider" :"true"
  },
  ],};
var scaleXItem         = {
  "category" : "scale-x",
  "subcategory" :"item",
  "inputs" :[
    {
      "type" : "range",
      "id"   : "font-sizeItemScaleX",
      "key"  : "font-size",
      "label": "Font size",
      "min"  : '0',
      "max"  : '100',
      "step" :'1',
    },
    {
      "type" : "color",
      "id"   : "font-colorItemScaleX",
      "key"  : "font-color",
      "label": "Font color",
    },
    {
      "type" : "text",
      "id"   : "font-familyItemScaleX",
      "key"  : "font-family",
      "label": "Font family",
    },
    {
      "type" : "range",
      "id"   : "font-angelItemScaleX",
      "key"  : "font-angel",
      "label": "Font angel",
      "min"  : '0',
      "max"  : '360',
      "step" :'1',
    },
    {
      "type" : "checkbox",
      "id"   : "boldItemScaleX",
      "key"  : "bold",
      "label": "bold",
    },
    {
      "type" : "text",
      "id"   : "paddingTopItemScaleX",
      "key"  : "padding-top",
      "label": "padding-top",
      "divider" :"true",
    },
    {
      "type" : "text",
      "id"   : "paddingTopItemScaleX",
      "key"  : "padding-right",
      "label": "padding-right",
    },
    {
      "type" : "text",
      "id"   : "paddingBottomItemScaleX",
      "key"  : "padding-bottom",
      "label": "padding-bottom",
    },
    {
      "type" : "text",
      "id"   : "paddingleftItemScaleX",
      "key"  : "padding-left",
      "label": "padding-left",
    },
    {
      "type" : "text",
      "id"   : "marginTopItemScaleX",
      "key"  : "margin-top",
      "label": "margin-top",
      "divider" :"true"
    },
    {
      "type" : "text",
      "id"   : "marginTopItemScaleX",
      "key"  : "margin-right",
      "label": "margin-right",
    },
    {
      "type" : "text",
      "id"   : "marginBottomItemScaleX",
      "key"  : "margin-bottom",
      "label": "margin-bottom",
    },
    {
      "type" : "text",
      "id"   : "margingleftItemScaleX",
      "key"  : "margin-left",
      "label": "margin-left",
    },
    {
      "type" : "text",
      "id"   : "max-charsItemScaleX",
      "key"  : "max-chars",
      "label": "Max chars",
      "divider" :"true",
    },
  ],};
//These arrays will regeiustor Json to HTML 
var formData   = [titleData,subtitleData,legendDatageneral,legendDataitem,
legendDataMarker,plotareaData,plotGeneralData,plotAnimationData,
plotHoverState,hoverMarker,plotMarkerData,tooltip,
valueBox,scaleData,scaleRData,previewData];
var seriesData = [seriesGeneralData,seriesAnimationData,seriesHoverState,
serieshoverMarker,seriesMarkerData,seriestooltip,seriesvalueBox];
var scaleData  = [scaleX,scaleXGuid,scaleXLabel,scaleXmarkers,
scaleXrefLine,scaleXTick,scaleXItem];
var j = 0;
var labelConfigId  = 0; // This is for the label replaction. It holds each labels id.
var seriesConfigId = 0;
var scaleXCounter  = 0;
var scaleYCounter  = 0;
window.onload =function load_inputs() {

/*All Scale data goes here*/ 
  var seriesElement = document.getElementsByClassName("scl-el");
  var linebreak = "";
  for (var i = 0; i < seriesElement.length; i++) {
    for (var m=0; m <scaleData.length;m++) {
      if (seriesElement[i].getAttribute('data-category') == scaleData[m]["category"] && seriesElement[i].getAttribute('data-sub-category') == scaleData[m]["subcategory"]) {
        for (j=0; j<scaleData[m].inputs.length; j++) {
            linebreak = scaleData[m].inputs[j].divider ? "<hr>" :" ";
            switch(scaleData[m].inputs[j].type){
            case('checkbox') :
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ scaleData[m].inputs[j].label+": </label>"
              +"<input type='checkbox' id='"+scaleData[m].inputs[j].id+"' data-category='"
              +scaleData[m]["category"]+"' data-key='"+scaleData[m].inputs[j].key+"' dat-subcat='"+
              scaleData[m].subcategory
              +"' onchange='Modify_chart_scale(this, this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case("color") :
              var defaultVal= ''; 
              if (typeof scaleData[m].inputs[j].defValue != 'undefined' ) {
                defaultVal = scaleData[m].inputs[j].defValue;
              };
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ scaleData[m].inputs[j].label+": </label>"
              +"<input type='color' id='"+scaleData[m].inputs[j].id+"' data-category='"
              +scaleData[m]["category"]+"' data-key='"+scaleData[m].inputs[j].key+"' dat-subcat='"+
              scaleData[m].subcategory +"' onchange='Modify_chart_scale(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='"+defaultVal+"'><br>";
            break;
            case("text") :
              var defaultVal= ''; 
              if (typeof scaleData[m].inputs[j].defValue != 'undefined' ) {
                defaultVal = scaleData[m].inputs[j].defValue;
              };
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ scaleData[m].inputs[j].label+": </label>"
              +"<input type='text' id='"+scaleData[m].inputs[j].id+"' data-category='"
              +scaleData[m]["category"]+"' data-key='"+scaleData[m].inputs[j].key+"' dat-subcat='"+
              scaleData[m].subcategory +"' onKeyUp='Modify_chart_scale(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='"+defaultVal+"'><br>";
            break;
            case ('select'):
              var options = ''
              var optionLable = '';
              for (var k=0; k<scaleData[m].inputs[j].values.length;k++) {
                if (scaleData[m].inputs[j].labels) {
                   optionLable = scaleData[m].inputs[j].labels[k];
                } else {
                  optionLable = scaleData[m].inputs[j].values[k];
                }
                options += "<option value='"+scaleData[m].inputs[j].values[k]+"'>"+optionLable +"</option>"
              };
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ scaleData[m].inputs[j].label+": </label>"
              +"<select id='"+scaleData[m].inputs[j].id+"' data-category='"+scaleData[m]["category"]
              +"' data-key='"+scaleData[m].inputs[j].key+"' dat-subcat='"+
              scaleData[m].subcategory 
              +"'onchange='Modify_chart_scale(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><option></option> "+options+"</select><br>";
            break;
            case ("range") :
            //oninput is for IE compatibility.
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ scaleData[m].inputs[j].label+": </label>"
              +"<input type='range' id='"+scaleData[m].inputs[j].id+"' data-category='"
              +scaleData[m]["category"]+"' data-key='"+scaleData[m].inputs[j].key+"' dat-subcat='"+
              scaleData[m].subcategory
              +"' min='"+scaleData[m].inputs[j].min+"' max='"+scaleData[m].inputs[j].max+"' step='"+scaleData[m].inputs[j].step
              +"' onchange='Modify_chart_scale(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'"
              +"  oninput='Modify_chart_scale(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("bgcolor") :
              seriesElement[i].innerHTML += linebreak +"<label> Background:</label>";//ID here represents category
              seriesElement[i].innerHTML += "<select id='backgroundType"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+
              scaleData[m]["subcategory"]+"' data-count='"+seriesConfigId
              +"'onchange='set_bg_type_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'>"
              +"<option value='solid'>Solid</option><option value='gradiant'>Gradiant</option></select><br>"
              +"<label> Background color 1 : </label> <input type='color' id='backgroundColor1"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]
              +"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onchange='set_bg_color_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>"
              +"<label> Background color 2 : </label> <input type='color' id='backgroundColor2"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]
              +"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onchange='set_bg_color_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' style='visibility :hidden'><br>";
            break;
            case ("border") :
              seriesElement[i].innerHTML += linebreak +"<label> Border :</label>";//ID here represents category
              seriesElement[i].innerHTML += "<input type='checkbox' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' id='border"+scaleData[m].inputs[j].id
              +"' onchange='set_border_series(this.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";  
              seriesElement[i].innerHTML += "<label> Border width :</label><input type='text' id='borderWidth"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"
              +scaleData[m]["subcategory"]+"' onKeyUp='set_border_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='1px'><br>";
              seriesElement[i].innerHTML += " <label> Border color:</label><input type='color' id='borderColor"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"
              +scaleData[m]["subcategory"]+"'onchange='set_border_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("line") :
              seriesElement[i].innerHTML += linebreak + "<label>Line color :</lable>";
              seriesElement[i].innerHTML += "<input type='color' id='lineColor"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onchange='set_line_series(this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              seriesElement[i].innerHTML += "<label>Line width :</label> <input type='text' id='lineWidth"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px'><br>";
              seriesElement[i].innerHTML += "<label> Line style :</label>"
              +"<select id='lineStyle"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' onchange='set_line_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='solid'> Solid</option>"
              +"<option value='dotted'> Dotted</option>"
              +"<option value='dashed'> Dashed</option>"
              +"</select><br>";
              seriesElement[i].innerHTML +="<label>Line gap size :</label> <input type='text' id='lineGapSize"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
              seriesElement[i].innerHTML +="<label>Line segment size :</label> <input type='text' id='lineSegmentSize"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
            break;
            case ("font") :
              seriesElement[i].innerHTML += linebreak+"<lable> Font color :</label>";
              seriesElement[i].innerHTML += " <input type='color' id='fontColor"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              seriesElement[i].innerHTML += "<lable> Font size :</lable><input type='text' id='fontSize"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]
              +"' dat-subcat='"+scaleData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='12px'><br>";
              seriesElement[i].innerHTML += "<lable>Font style: </lable>";
              seriesElement[i].innerHTML += "<select id='fontStyle"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value ='normal' > normal</option>"
              +"<option value ='italic' > italic</option>"
              +"<option value ='oblique'> oblique</option>"
              +"</select><br>";
              seriesElement[i].innerHTML += "<lable> Font family :</lable>"; // It should get converted to select sometime!!!
              seriesElement[i].innerHTML += "<input type='text' id='fontFamily"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onKeyUp='set_font(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' ><br>";
              seriesElement[i].innerHTML += "<lable> Text :</label>";
              seriesElement[i].innerHTML += "<input  type='text' id='text"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
              seriesElement[i].innerHTML += "<lable>Text align :</lable>"
              +"<select id='textAlign"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='center'> Center</option>"
              +"<option value='left'> Left</option>"
              +"<option value='right'> Right </option>"
              +"</select><br>";
              seriesElement[i].innerHTML += "<lable> Bold : </label> <input type='checkbox' id='fontBold"+scaleData[m].inputs[j].id+"' data-category ='"+scaleData[m]["category"]+"' dat-subcat='"+scaleData[m]["subcategory"]
              +"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
            break;
          };
        };
      };
    };
  };

/* ALL the series types will go here*/  
  var seriesElement = document.getElementsByClassName("series-el");
  var linebreak = "";
  for (var i = 0; i < seriesElement.length; i++) {
    for (var m=0; m <seriesData.length;m++) {
      if (seriesElement[i].getAttribute('data-category') == seriesData[m]["category"] && seriesElement[i].getAttribute('data-sub-category') == seriesData[m]["subcategory"]) {
        for (j=0; j<seriesData[m].inputs.length; j++) {
            linebreak = seriesData[m].inputs[j].divider ? "<hr>" :" ";
            switch(seriesData[m].inputs[j].type){
            case('checkbox') :
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ seriesData[m].inputs[j].label+": </label>"
              +"<input type='checkbox' id='"+seriesData[m].inputs[j].id+"' data-category='"
              +seriesData[m]["category"]+"' data-key='"+seriesData[m].inputs[j].key+"' dat-subcat='"+
              seriesData[m].subcategory
              +"' onchange='Modify_chart_series(this, this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case("text") :
              var defaultVal= ''; 
              if (typeof seriesData[m].inputs[j].defValue != 'undefined' ) {
                defaultVal = seriesData[m].inputs[j].defValue;
              };
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ seriesData[m].inputs[j].label+": </label>"
              +"<input type='text' id='"+seriesData[m].inputs[j].id+"' data-category='"
              +seriesData[m]["category"]+"' data-key='"+seriesData[m].inputs[j].key+"' dat-subcat='"+
              seriesData[m].subcategory +"' onKeyUp='Modify_chart_series(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='"+defaultVal+"'><br>";
            break;
            case ('select'):
              var options = ''
              var optionLable = '';
              for (var k=0; k<seriesData[m].inputs[j].values.length;k++) {
                if (seriesData[m].inputs[j].labels) {
                   optionLable = seriesData[m].inputs[j].labels[k];
                } else {
                  optionLable = seriesData[m].inputs[j].values[k];
                }
                options += "<option value='"+seriesData[m].inputs[j].values[k]+"'>"+optionLable +"</option>"
              };
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ seriesData[m].inputs[j].label+": </label>"
              +"<select id='"+seriesData[m].inputs[j].id+"' data-category='"+seriesData[m]["category"]
              +"' data-key='"+seriesData[m].inputs[j].key+"' dat-subcat='"+
              seriesData[m].subcategory 
              +"'onchange='Modify_chart_series(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><option></option> "+options+"</select><br>";
            break;
            case ("range") :
            //oninput is for IE compatibility.
              seriesElement[i].innerHTML += linebreak
              +"<label>"+ seriesData[m].inputs[j].label+": </label>"
              +"<input type='range' id='"+seriesData[m].inputs[j].id+"' data-category='"
              +seriesData[m]["category"]+"' data-key='"+seriesData[m].inputs[j].key+"' dat-subcat='"+
              seriesData[m].subcategory
              +"' min='"+seriesData[m].inputs[j].min+"' max='"+seriesData[m].inputs[j].max+"' step='"+seriesData[m].inputs[j].step
              +"' onchange='Modify_chart_series(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'"
              +"  oninput='Modify_chart_series(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("bgcolor") :
              seriesElement[i].innerHTML += linebreak +"<label> Background:</label>";//ID here represents category
              seriesElement[i].innerHTML += "<select id='backgroundType"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+
              seriesData[m]["subcategory"]+"' data-count='"+seriesConfigId
              +"'onchange='set_bg_type_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'>"
              +"<option value='solid'>Solid</option><option value='gradiant'>Gradiant</option></select><br>"
              +"<label> Background color 1 : </label> <input type='color' id='backgroundColor1"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]
              +"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onchange='set_bg_color_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>"
              +"<label> Background color 2 : </label> <input type='color' id='backgroundColor2"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]
              +"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onchange='set_bg_color_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' style='visibility :hidden'><br>";
            break;
            case ("border") :
              seriesElement[i].innerHTML += linebreak +"<label> Border :</label>";//ID here represents category
              seriesElement[i].innerHTML += "<input type='checkbox' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' id='border"+seriesData[m].inputs[j].id
              +"' onchange='set_border_series(this.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";  
              seriesElement[i].innerHTML += "<label> Border width :</label><input type='text' id='borderWidth"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"
              +seriesData[m]["subcategory"]+"' onKeyUp='set_border_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='1px'><br>";
              seriesElement[i].innerHTML += " <label> Border color:</label><input type='color' id='borderColor"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"
              +seriesData[m]["subcategory"]+"'onchange='set_border_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("line") :
              seriesElement[i].innerHTML += linebreak + "<label>Line color :</lable>";
              seriesElement[i].innerHTML += "<input type='color' id='lineColor"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onchange='set_line_series(this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              seriesElement[i].innerHTML += "<label>Line width :</label> <input type='text' id='lineWidth"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.nextElementSibling.nextElementSibling.nextElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px'><br>";
              seriesElement[i].innerHTML += "<label> Line style :</label>"
              +"<select id='lineStyle"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' onchange='set_line_series(this,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='solid'> Solid</option>"
              +"<option value='dotted'> Dotted</option>"
              +"<option value='dashed'> Dashed</option>"
              +"</select><br>";
              seriesElement[i].innerHTML +="<label>Line gap size :</label> <input type='text' id='lineGapSize"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
              seriesElement[i].innerHTML +="<label>Line segment size :</label> <input type='text' id='lineSegmentSize"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onKeyUp='set_line_series(this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
            break;
            case ("font") :
              seriesElement[i].innerHTML += linebreak+"<lable> Font color :</label>";
              seriesElement[i].innerHTML += " <input type='color' id='fontColor"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              seriesElement[i].innerHTML += "<lable> Font size :</lable><input type='text' id='fontSize"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]
              +"' dat-subcat='"+seriesData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='12px'><br>";
              seriesElement[i].innerHTML += "<lable>Font style: </lable>";
              seriesElement[i].innerHTML += "<select id='fontStyle"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value ='normal' > normal</option>"
              +"<option value ='italic' > italic</option>"
              +"<option value ='oblique'> oblique</option>"
              +"</select><br>";
              seriesElement[i].innerHTML += "<lable> Font family :</lable>"; // It should get converted to select sometime!!!
              seriesElement[i].innerHTML += "<input type='text' id='fontFamily"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onKeyUp='set_font(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' ><br>";
              seriesElement[i].innerHTML += "<lable> Text :</label>";
              seriesElement[i].innerHTML += "<input  type='text' id='text"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
              seriesElement[i].innerHTML += "<lable>Text align :</lable>"
              +"<select id='textAlign"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='center'> Center</option>"
              +"<option value='left'> Left</option>"
              +"<option value='right'> Right </option>"
              +"</select><br>";
              seriesElement[i].innerHTML += "<lable> Bold : </label> <input type='checkbox' id='fontBold"+seriesData[m].inputs[j].id+"' data-category ='"+seriesData[m]["category"]+"' dat-subcat='"+seriesData[m]["subcategory"]
              +"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
            break;
          };
        };
      };
    };
  };

/*Lables will go here */
  var lblArrayElemnt = document.getElementsByClassName("lbl-el");
  for (var i=  0 ; i< lblArrayElemnt.length;i++) { // This should be only one
    for (var j = 0; j<labelData.inputs.length; j++ ) {
      var linebreak = (labelData.inputs[j].divider) ? "<hr>" : "";
      switch(labelData.inputs[j].type){
            case('checkbox') :
              lblArrayElemnt[i].innerHTML += linebreak
              +"<label>"+ labelData.inputs[j].label+": </label>"
              +"<input type='checkbox' id='"+labelData.inputs[j].id+"' data-category='"
              +labelData["category"]+"' data-key='"+labelData.inputs[j].key+"' dat-subcat='"+
              labelData.subcategory+"' data-count='"+labelConfigId
              +"'onchange='Modify_chart_label(this.id, this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><br>";
            break;
            case("text") :
              var defaultVal= ''; 
              if (typeof labelData.inputs[j].defValue != 'undefined' ) {
                defaultVal = labelData.inputs[j].defValue;
              };
              lblArrayElemnt[i].innerHTML += linebreak
              +"<label>"+ labelData.inputs[j].label+": </label>"
              +"<input type='text' id='"+labelData.inputs[j].id+"' data-category='"
              +labelData["category"]+"' data-key='"+labelData.inputs[j].key+"' dat-subcat='"+
              labelData.subcategory+"' data-count='"+labelConfigId
              +"' onchange='Modify_chart_label(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))' value='"+defaultVal+"'><br>";
            break;
             case("color") :
              var defaultVal= ''; 
              if (typeof labelData.inputs[j].defValue != 'undefined' ) {
                defaultVal = labelData.inputs[j].defValue;
              };
              lblArrayElemnt[i].innerHTML += linebreak
              +"<label>"+ labelData.inputs[j].label+": </label>"
              +"<input type='color' id='"+labelData.inputs[j].id+"' data-category='"
              +labelData["category"]+"' data-key='"+labelData.inputs[j].key+"' dat-subcat='"+
              labelData.subcategory+"' data-count='"+labelConfigId
              +"' onchange='Modify_chart_label(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))' value='"+defaultVal+"'><br>";
            break;
            case ('select'):
              var options = ''
              var optionLable = '';
              for (var k=0; k<labelData.inputs[j].values.length;k++) {
                if (labelData.inputs[j].labels) {
                   optionLable = labelData.inputs[j].labels[k];
                } else {
                  optionLable = labelData.inputs[j].values[k];
                }
                options += "<option value='"+labelData.inputs[j].values[k]+"'>"+optionLable +"</option>"
              };
              lblArrayElemnt[i].innerHTML += linebreak
              +"<label>"+ labelData.inputs[j].label+": </label>"
              +"<select id='"+labelData.inputs[j].id+"' data-category='"+labelData["category"]
              +"' data-key='"+labelData.inputs[j].key+"' dat-subcat='"+labelData.subcategory+"' data-count='"+labelConfigId
              +"'onchange='Modify_chart_label(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><option></option> "+options+"</select><br>";
            break;
            case ("range") :
            //oninput is for IE compatibility.
              lblArrayElemnt[i].innerHTML += linebreak
              +"<label>"+ labelData.inputs[j].label+": </label>"
              +"<input type='range' id='"+labelData.inputs[j].id+"' data-category='"
              +labelData["category"]+"' data-key='"+labelData.inputs[j].key+"' dat-subcat='"+
              labelData.subcategory+"' min='"+labelData.inputs[j].min+"' max='"+labelData.inputs[j].max+"' step='"+labelData.inputs[j].step+"' data-count='"+labelConfigId
              +"'onchange='Modify_chart_label(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'"
              +"  oninput='Modify_chart_label(this.id,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><br>";
            break;
            case ("bgcolor") :
              lblArrayElemnt[i].innerHTML += linebreak +"<label> Background:</label>";
              lblArrayElemnt[i].innerHTML += "<select id='backgroundType"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' data-count='"+labelConfigId
              +"'dat-subcat='"+ labelData["subcategory"]+"'onchange='set_bg_type_label(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'>"
              +"<option value='solid'>Solid</option><option value='gradiant'>Gradiant</option></select><br>"
              +"<label> Background color 1 : </label> <input type='color' id='backgroundColor1"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]
              +"' dat-subcat='"+labelData["subcategory"]+"' data-count='"+labelConfigId
              +"'onchange='set_bg_color_label(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><br>"
              +"<label> Background color 2 : </label> <input type='color' id='backgroundColor2"+labelData.inputs[j].id+"' data-count='"+labelConfigId
              +"'data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]
              +"' onchange='set_bg_color_label(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))' style='visibility :hidden'><br>";
            break;
            case ("border") :
              lblArrayElemnt[i].innerHTML += linebreak +"<label> Border :</lable>";
              lblArrayElemnt[i].innerHTML += "<input type='checkbox' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' id='border"+labelData.inputs[j].id
              +"' data-count='"+labelConfigId
              +"'onchange='set_border_label(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><br>";  
              lblArrayElemnt[i].innerHTML += "<label> Border width :</label><input type='text' id='borderWidth"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"
              +labelData["subcategory"]+"' data-count='"+labelConfigId
              +"' oninput='set_border_label(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))' value='1px'><br>";
              lblArrayElemnt[i].innerHTML += " <label> Border color:</label><input type='color' id='borderColor"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"
              +labelData["subcategory"]+"' data-count='"+labelConfigId
              +"'onchange='set_border_label(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"),this.getAttribute(\"data-count\"))'><br>";
            break;
            case ("line") :
              lblArrayElemnt[i].innerHTML += linebreak + "<label>Line color :</lable>";
              lblArrayElemnt[i].innerHTML += "<input type='color' id='lineColor"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onchange='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              lblArrayElemnt[i].innerHTML += "<label>Line width :</lable> <input type='text' id='lineWidth"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px'><br>";
              lblArrayElemnt[i].innerHTML += "<lable> Line style :</lable>"
              +"<select id='lineStyle"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onchange='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='solid'> Solid</option>"
              +"<option value='dotted'> Dotted</option>"
              +"<option value='dashed'> Dashed</option>"
              +"</select><br>";
              lblArrayElemnt[i].innerHTML +="<label>Line gap size :</lable> <input type='text' id='lineGapSize"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
              lblArrayElemnt[i].innerHTML +="<label>Line segment size :</lable> <input type='text' id='lineSegmentSize"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onKeyUp='set_line(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='2px' ><br>";
            break;
            case ("font") :
              lblArrayElemnt[i].innerHTML += linebreak+"<lable> Font color :</label>";
              lblArrayElemnt[i].innerHTML += " <input type='color' id='fontColor"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='#000000'><br>";
              lblArrayElemnt[i].innerHTML += "<lable> Font size :</lable><input type='text' id='fontSize"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]
              +"' dat-subcat='"+labelData["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='12px'><br>";
              lblArrayElemnt[i].innerHTML += "<lable>Font style: </lable>";
              lblArrayElemnt[i].innerHTML += "<select id='fontStyle"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value ='normal' > normal</option>"
              +"<option value ='italic' > italic</option>"
              +"<option value ='oblique'> oblique</option>"
              +"</select><br>";
              lblArrayElemnt[i].innerHTML += "<lable> Font family :</lable>"; // It should get converted to select sometime!!!
              lblArrayElemnt[i].innerHTML += "<input type='text' id='fontFamily"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]
              +"' onKeyUp='set_font(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' ><br>";
              lblArrayElemnt[i].innerHTML += "<lable> Text :</label>";
              lblArrayElemnt[i].innerHTML += "<input  type='text' id='text"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
              lblArrayElemnt[i].innerHTML += "<lable>Text align :</lable>"
              +"<select id='textAlign"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='center'> Center</option>"
              +"<option value='left'> Left</option>"
              +"<option value='right'> Right </option>"
              +"</select><br>";
              lblArrayElemnt[i].innerHTML += "<lable> Bold : </label> <input type='checkbox' id='fontBold"+labelData.inputs[j].id+"' data-category ='"+labelData["category"]+"' dat-subcat='"+labelData["subcategory"]
              +"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
            break;
          };
      
    };

  }

/* ALL the generic types will go here*/  
  var element = document.getElementsByClassName("frm-el");
  var linebreak = "";
  for (var i = 0; i < element.length; i++) {
    for (var m=0; m <formData.length;m++) {
      if (element[i].getAttribute('data-category') == formData[m]["category"] 
        && element[i].getAttribute('data-sub-category') 
        == formData[m]["subcategory"]) {
        for (j=0; j<formData[m].inputs.length; j++) {
            linebreak = formData[m].inputs[j].divider ? "<hr>" :" ";
            switch(formData[m].inputs[j].type){
            case("color") :
              var defaultVal= ''; 
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='color' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory +"' onchange='Modify_chart(this,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='"+defaultVal+"'><br>";
            break;
            case('checkbox') :
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='checkbox' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"' onchange='Modify_chart(this,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case("text") :
              var defaultVal= ''; 
              if (typeof formData[m].inputs[j].defValue != 'undefined' ) {
                defaultVal = formData[m].inputs[j].defValue;
              };
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='text' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"'onKeyUp='Modify_chart(this,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='"+defaultVal+"'><br>";
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
              +"'onchange='Modify_chart(this,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><option></option> "+options+"</select><br>";
            break;
            case ("range") :
            //oninput is for IE compatibility.
              element[i].innerHTML += linebreak
              +"<label>"+ formData[m].inputs[j].label+": </label>"
              +"<input type='range' id='"+formData[m].inputs[j].id+"' data-category='"
              +formData[m]["category"]+"' data-key='"+formData[m].inputs[j].key+"' dat-subcat='"+
              formData[m].subcategory
              +"' min='"+formData[m].inputs[j].min+"' max='"+formData[m].inputs[j].max+"' step='"+formData[m].inputs[j].step
              +"' onchange='Modify_chart(this,this.type,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'"
              +"  oninput='Modify_chart(this,this.getAttribute(\"data-key\"),this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
            break;
            case ("bgcolor") :
              element[i].innerHTML += linebreak +"<label> Background:</label>";//ID here represents category
              element[i].innerHTML += "<select id='backgroundType"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+
              formData[m]["subcategory"]+"'onchange='set_bg_type(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value='solid'>Solid</option><option value='gradiant'>Gradiant</option></select><br>"
              +"<label> Background color 1 : </label> <input type='color' id='backgroundColor1"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]
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
              element[i].innerHTML += "<lable> Font size :</lable><input type='text' id='fontSize"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]
              +"' dat-subcat='"+formData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' value='12px'><br>";
              element[i].innerHTML += "<lable>Font style: </lable>";
              element[i].innerHTML += "<select id='fontStyle"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option value ='normal' > normal</option>"
              +"<option value ='italic' > italic</option>"
              +"<option value ='oblique'> oblique</option>"
              +"</select><br>";
              element[i].innerHTML += "<lable> Font family :</lable>"; // It should get converted to select sometime!!!
              element[i].innerHTML += "<input type='text' id='fontFamily"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]
              +"' onKeyUp='set_font(this.id,this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))' ><br>";
              element[i].innerHTML += "<lable> Text :</label>";
              element[i].innerHTML += "<input  type='text' id='text"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onKeyUp='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'><br>";
              element[i].innerHTML += "<lable>Text align :</lable>"
              +"<select id='textAlign"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]+"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
              +"<option></option>"
              +"<option value='center'> Center</option>"
              +"<option value='left'> Left</option>"
              +"<option value='right'> Right </option>"
              +"</select><br>";
              element[i].innerHTML += "<lable> Bold : </label> <input type='checkbox' id='fontBold"+formData[m].inputs[j].id+"' data-category ='"+formData[m]["category"]+"' dat-subcat='"+formData[m]["subcategory"]
              +"' onchange='set_font(this.getAttribute(\"data-category\"),this.getAttribute(\"dat-subcat\"))'>"
            break;
          };
        };
      };
    };
  };
};
function Modify_chart(element,key,category,subCategory) {
  var value = ''
  switch (element.type) {
    case("checkbox") :
      value = element.checked;
    break;
    case("select-one") :
      value  = element.options[element.selectedIndex].value;
    break;
    default:
    //default is for text,range
      value= element.value;
  }
  var dataObj = {};
  dataObj[category] = {};

  if (category === "preview" && !element.checked && element.id === "visiblePreview") {
    var tempobj = zingchart.exec(chartID,'getdata' );
      delete tempobj.graphset[0][category];
      zingchart.exec(chartID,'setdata', {
        data : tempobj
      });
      creat_json();
  } else {
    if (category != subCategory ) {
      dataObj[category][subCategory] ={};
      dataObj[category][subCategory][key] = value;
    } else {
      dataObj[category][key] = value;
    }
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj   
    });
    creat_json();}
  }
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
  creat_json();}
/*
 * Generic function for seting font
 */
function set_font(category,subCategory) { 

  var dataObj = {};
  dataObj[category] = {};
  if (category != subCategory) {
    var txtalgn = document.getElementById('textAlign'+subCategory+category);
    var selected = txtalgn.options[txtalgn.selectedIndex].value;
    var fontstls = document.getElementById('fontStyle'+subCategory+category);
    var style = fontstls.options[fontstls.selectedIndex].value;
    dataObj[category][subCategory] ={};
    dataObj[category][subCategory]["fontColor"] = document.getElementById('fontColor'+subCategory+category).value;
    dataObj[category][subCategory]["fontSize"] = document.getElementById('fontSize'+subCategory+category).value;
    dataObj[category][subCategory]["fontFamily"] = document.getElementById('fontFamily'+subCategory+category).value;
    if (document.getElementById('text'+subCategory+category).value !='') {
      dataObj[category][subCategory]["text"] = document.getElementById('text'+subCategory+category).value;
    } else {
      var tempobj = zingchart.exec(chartID,'getdata' );
      delete tempobj.graphset[0][category][subCategory]["text"];
      zingchart.exec(chartID,'setdata', {
        graphid: 0,
        data : tempobj.graphset[0]
      });
      creat_json();
    }
    dataObj[category][subCategory]["textAlign"] = selected;
    dataObj[category][subCategory]["fontStyle"] = style;
    dataObj[category][subCategory]["bold"] = document.getElementById('fontBold'+subCategory+category).checked;
  } else {
      dataObj[category]["fontColor"] = document.getElementById('fontColor'+category).value;
  } 
  zingchart.exec(chartID,'modify', {
    graphid : 0,
    data : dataObj
  });
  zingchart.exec(chartID,'update');
  creat_json();}
function new_label() {
  var ttl = document.getElementById("LabelsTitle");
  var lbl = document.getElementById("lableConfig");
  var clnlLbl = lbl.cloneNode(true);
  var clnttl = ttl.cloneNode(true);
  childs = clnlLbl.childNodes;
  labelConfigId++;
  for (var i= 0 , len = clnlLbl.childNodes.length ; i<len; i++) {
    if (childs[i].id) {
      childs[i].id += labelConfigId;
      childs[i].setAttribute("data-count",labelConfigId);
      if (childs[i].type == "select-one") {
        childs[i].value = "solid";
      };
      if (childs[i].id =="backgroundColor2labelslabels"+labelConfigId) {
        childs[i].style.visibility ="hidden";
      };
    };
  }
  clnttl.innerHTML += labelConfigId;
  document.querySelector("#labelsAccordion").appendChild(clnttl);
  document.querySelector("#labelsAccordion").appendChild(clnlLbl);
  jQuery(function($) {
    $('#labelsAccordion').accordion("refresh");  
  });
  if (labelConfigId == 1 ) {
    var chartDta = zingchart.exec(chartID, 'getdata');
    var chartLabels = chartDta['graphset'][0]['labels'];
    if( typeof chartLabels == "undefined") {
      var dataObj = {
        labels :[]
      };
      var vals ={}
      dataObj.labels.push(vals);
      dataObj.labels.push(vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
    } else {
      var vals ={};
      chartLabels.push(vals);
       zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "labels" : chartLabels
        }  
      });
    }

  } else {
    var chartDta = zingchart.exec(chartID, 'getdata');
    var chartLabels = chartDta['graphset'][0];
    var empty ={}
    chartLabels['labels'].push(empty);
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : chartLabels  
    });
  }
  creat_json();}
/*
 * Label Modify chart
 */
function Modify_chart_label(id,type,key,category,subcategory,count) {
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
  // Get chart JSON
  var chartDta = zingchart.exec(chartID, 'getdata');
  var chartLabels = chartDta['graphset'][0]['labels']; // Ternary operator to check to see if 'labels' exists
  if (typeof chartLabels  == "undefined" ){ //Empty array situation, creating a new label
    var dataObj = {
      labels :[],
    };
    var vals = {};
    if (key == 'callout-hook') {
        calloutHook =[];
      calloutHook.push(document.getElementById("callout-hooklabelsX").value);
      calloutHook.push(document.getElementById("callout-hooklabelsY").value);
      dataObj.labels.push(calloutHook);
    } else {
      vals[key] = value;
      dataObj.labels.push(vals);
    }
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
  } else { //Labels already exists, so we're modifying instead of creating 
    if (count == chartLabels.length) {//New elemnt case we hace to push it 
      if (key == 'callout-hook') {
        calloutHook =[];
        calloutHook.push(document.getElementById("callout-hooklabelsX").value);
        calloutHook.push(document.getElementById("callout-hooklabelsY").value);
        chartLabels.push(calloutHook);
      } else {
        var vals = {};
        vals[key] = value;
        chartLabels.push(vals);
      }
       zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "labels": chartLabels
        }
      });
    } else {
      chartLabels[count][key] = value;
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "labels": chartLabels
        }
      });
    }
  }
  creat_json();}
/*
 * functions for labels bg Color
 */ 
var bgTypelbl= [];
function set_bg_type_label(id,category,subCategory,count) {
  count = (count != 0) ? count : ''; 
  var typeLblIndex = (count == "" ) ? 0 : count;
  var type = document.getElementById(id);
  if (count == bgTypelbl.length) {
    bgTypelbl.push(type.options[type.selectedIndex].value);
  } else {
    bgTypelbl[typeLblIndex] = type.options[type.selectedIndex].value;
  }

  if (bgTypelbl[typeLblIndex] =="gradiant") {
    document.getElementById("backgroundColor2"+subCategory+category+count).style.visibility = "visible";
  } else {
    document.getElementById("backgroundColor2"+subCategory+category+count).style.visibility = "hidden";
  }
  set_bg_color_label(category,subCategory,count);}
function set_bg_color_label(category,subCategory,count) {
  count = (count != 0) ? count : ''; 
  var typeLblIndex = (count == "" ) ? 0 : count;
  // Get chart JSON
  var chartDta = zingchart.exec(chartID, 'getdata');
  var chartLabels = chartDta['graphset'][0]['labels']
  if (typeof chartLabels  == "undefined" ){ //Empty array situation, creating a new label
    console.log("We have to add label!!");
    var dataObj = {
      labels :[],
    };
    var vals = {};
    if (bgTypelbl[typeLblIndex] == "gradiant") {
      //Set background-color-1 attr
    vals['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
    vals['backgroundColor2'] =  document.getElementById('backgroundColor2'+subCategory+category+count).value;
    dataObj.labels.push (vals);
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj
    });
    } else {
    //Set background-color-1 attr
      vals['backgroundColor1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
      vals['backgroundColor2'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
      dataObj.labels.push (vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
    }  
  } else {
    if (count == chartLabels.length) {
      if (bgTypelbl[typeLblIndex] == "gradiant") {
        //Set background-color-1 attr
        var vals = {};
        vals['background-color-1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
        vals['background-color-2'] =  document.getElementById('backgroundColor2'+subCategory+category+count).value;
      } else {
        //Set background-color-1 attr
        vals['background-color-1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
        vals['background-color-2'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value; 
      } 
      chartLabels.push (vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "labels":chartLabels
        }
      }); 
    } else {
      if (bgTypelbl[typeLblIndex] == "gradiant") {
        //Set background-color-1 attr
        chartLabels[(count == "" ) ? 0 : count]['background-color-1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
        chartLabels[(count == "" ) ? 0 : count]['background-color-2'] =  document.getElementById('backgroundColor2'+subCategory+category+count).value;
      } else {
        //Set background-color-1 attr
        chartLabels[(count == "" ) ? 0 : count]['background-color-1'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value;
        chartLabels[(count == "" ) ? 0 : count]['background-color-2'] =  document.getElementById('backgroundColor1'+subCategory+category+count).value; 
      }
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "labels":chartLabels
        }
      }); 
    }
    
  }   
  creat_json();
 }
function set_border_label(category,subCategory,count) {

  count = (count != 0) ? count : ''; 
  // Get chart JSON
  var chartDta = zingchart.exec(chartID, 'getdata');
  var chartLabels = chartDta['graphset'][0]['labels']; 
  if (typeof chartLabels  == "undefined") { 
    var dataObj = {
      labels :[],
    };
    var vals = {};
    if (document.getElementById('border'+category+count).checked) {
      vals["border-width"] = document.getElementById('borderWidth'+category+count).value;
      vals["border-color"] = document.getElementById('borderColor'+category+count).value;
    } else {
      vals["border-width"] = 0;
    }
    dataObj.labels.push (vals);
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : dataObj  
    });
  } else {
    if (document.getElementById('border'+category+count).checked) {
      chartLabels[(count == "" ) ? 0 : count]["border-width"] = document.getElementById('borderWidth'+category+count).value;
      chartLabels[(count == "" ) ? 0 : count]["border-color"] = document.getElementById('borderColor'+category+count).value;
    } else {
       chartLabels[(count == "" ) ? 0 : count]["border-width"] = 0;
    }
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
        "labels":chartLabels
      }
    });
  } 
  creat_json();}
function new_series() {
  var title = document.getElementById("seriesTitle");
  var series = document.getElementById("seriesConfig");
  var clonedSeries = series.cloneNode(true);
  var clonedTitle = title.cloneNode(true);
  childs = clonedSeries.childNodes;
  seriesConfigId++;
  // THis for will add id and data count,
  // In our case this will be only the tabseris div
  for (var i= 0 , len = clonedSeries.childNodes.length ; i<len; i++) {
    //We only care about the elements that has id
    if (childs[i].id) {
      childs[i].id += seriesConfigId;
      childs[i].setAttribute("data-count",seriesConfigId);
      //This one checks for the childs of the cloned node
      //it checks for the childs of tabseries div
      for (var k= 0;k<childs[i].childNodes.length;k++ ) {
          //if the child has data-category == series and it is a elemnet 
        if (childs[i].childNodes[k].nodeName != "#text") {
          if (childs[i].childNodes[k].getAttribute("data-category") == "series") {
            childs[i].childNodes[k].innerHTML += seriesConfigId;
            childs[i].childNodes[k].setAttribute("data-count",seriesConfigId);
          };
        };
      };
    };
  }
  clonedTitle.innerHTML += seriesConfigId;
  document.querySelector("#seriesAccordion").appendChild(clonedTitle);
  document.querySelector("#seriesAccordion").appendChild(clonedSeries);
  //Refrreshing Ui toaccomedate new elemnts
  jQuery(function($) {
    $('#seriesAccordion').accordion("refresh"); 
    $("#"+childs[1].id).tabs(); 
  });
  if (seriesConfigId == 1 ) {
    var chartDta = zingchart.exec(chartID, 'getdata');
    var chartseries = chartDta['graphset'][0]['series'];
    if( typeof chartseries == "undefined") {
      var dataObj = {
        series :[]
      };
      var vals ={}
      dataObj.labels.push(vals);
      dataObj.labels.push(vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
    } else {
      var vals ={};
      chartseries.push(vals);
       zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "series" : chartseries
        }  
      });
    }

  } else {
    var chartDta = zingchart.exec(chartID, 'getdata');
    var chartseries = chartDta['graphset'][0];
    var empty ={}
    chartseries['series'].push(empty);
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : chartseries  
    });
  }
  creat_json();}
var bgTypeseries= [];
function set_bg_type_series(element,category,subCategory,count) {
  count = (element.parentElement.parentElement.dataset.count != 0) ? element.parentElement.parentElement.dataset.count : ''; 
  var typeSeriesIndex = (count == "" ) ? 0 : count;
  if (count == bgTypeseries.length) {
    bgTypeseries.push(element.options[element.selectedIndex].value);
  } else {
    bgTypeseries[typeSeriesIndex] = element.options[element.selectedIndex].value;
  }
  if (bgTypeseries[typeSeriesIndex] =="gradiant") {
    element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "visible";
  } else {
    element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "hidden";
  }
  set_bg_color_series(element.nextElementSibling.nextElementSibling.nextElementSibling,category,subCategory,count);}
function set_bg_color_series(element,category,subCategory) {
  count = (element.parentElement.parentElement.dataset.count != 0) ? element.parentElement.parentElement.dataset.count : ''; 
  var typeSeriesIndex = (count == "" ) ? 0 : count;
  // Get chart JSON
  var chartDta = zingchart.exec(chartID, 'getdata');
  var chartSeries = chartDta['graphset'][0]['series']
  if (typeof chartSeries  == "undefined" ){ //Empty array situation, creating a new label
    if (category == subcategory) {
      var dataObj = {
        series :[],
      };
      var vals = {};
      if (bgTypeseries[typeSeriesIndex] == "gradiant") {
        //Set background-color-1 attr
      vals['backgroundColor1'] =  element.value;
      vals['backgroundColor2'] =  element.nextElementSibling.nextElementSibling.nextElementSibling.value;
      dataObj.labels.push (vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj
      });
      } else {
      //Set background-color-1 attr
        vals['backgroundColor1'] =  element.value;
        vals['backgroundColor2'] =  element.value;
        dataObj.labels.push (vals);
        zingchart.exec(chartID,'modify', {
          graphid : 0,
          data : dataObj
        });
      }  
    } else {
      //TODO
    }

  } else {
    // We are short in series, so we have to add new sereis elment
    if (count == chartSeries.length) { 
      if (category == subCategory) {
        if (bgTypelbl[typeSeriesIndex] == "gradiant") {
          //Set background-color-1 attr
          var vals = {};
          vals['background-color-1'] =  element.value;
          vals['background-color-2'] =  element.nextElementSibling.nextElementSibling.nextElementSibling.value;
        } else {
          //Set background-color-1 attr
          vals['background-color-1'] =  element.value;
          vals['background-color-2'] =  element.value; 
        } 
      } else {
        //TODO : case that the 
      } 
      chartSeries.push (vals);
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "series":chartSeries
        }
      });
      // We are modifying the exisiting series
    } else {
      if (category == subCategory) {
        if (bgTypeseries[typeSeriesIndex] == "gradiant") {
          //Set background-color-1 attr
          chartSeries[(count == "" ) ? 0 : count]['background-color-1'] =  element.value;
          chartSeries[(count == "" ) ? 0 : count]['background-color-2'] =  element.nextElementSibling.nextElementSibling.nextElementSibling.value;
        } else {
          //Set background-color-1 attr
          chartSeries[(count == "" ) ? 0 : count]['background-color-1'] =  element.value;
          chartSeries[(count == "" ) ? 0 : count]['background-color-2'] =  element.value; 
        }
      } else {
        //If we have subcategory, then we only need to change it
        if (chartSeries[(count == "" ) ? 0 : count][subCategory]) {
          if (bgTypeseries[typeSeriesIndex] == "gradiant") {
            //Set background-color-1 attr
            chartSeries[(count == "" ) ? 0 : count][subCategory]['background-color-1'] =  element.value;
            chartSeries[(count == "" ) ? 0 : count][subCategory]['background-color-2'] =  element.nextElementSibling.nextElementSibling.nextElementSibling.value;
          } else {
            //Set background-color-1 attr
            chartSeries[(count == "" ) ? 0 : count][subCategory]['background-color-1'] =  element.value;
            chartSeries[(count == "" ) ? 0 : count][subCategory]['background-color-2'] =  element.value; 
          }
        // If we dont have the subcat, then we have to creat it and assing values to it.
        } else {
          
          var data = {};
          if (bgTypeseries[typeSeriesIndex] == "gradiant") {
            //Set background-color-1 attr
            data['background-color-1'] =  element.value;
            data['background-color-2'] =  element.nextElementSibling.nextElementSibling.nextElementSibling.value;
          } else {
            //Set background-color-1 attr
            data['background-color-1'] =  element.value;
            data['background-color-2'] =  element.value; 
          }
          chartSeries[(count == "" ) ? 0 : count][subCategory]  = data;
        }
      }

      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : {
          "series":chartSeries
        }
      }); 
    } 
  }   
  creat_json();}
function set_border_series(element,category,subCategory) {

  count = (element.parentElement.parentElement.dataset.count != 0) ? element.parentElement.parentElement.dataset.count : ''; 
  // Get chart JSON
  var chartData = zingchart.exec(chartID, 'getdata');
  var chartSeries = chartData['graphset'][0]['series']; 

  if (typeof chartSeries  == "undefined") { 
      // We are short in series we have to add one
      if (category ==  subCategory) {
        var dataObj = {
          series :[],
        };
        var vals = {};
        if (element.previousElementSibling.previousElementSibling.previousElementSibling.checked) {
          vals["border-width"] = element.value;
          vals["border-color"] = element.nextElementSibling.nextElementSibling.nextElementSibling.value;
        } else {
          vals["border-width"] = 0;
        }
        dataObj.labels.push (vals);
      } else {
        // Our category and subcategory is different
        // TODO
      }
      zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
  } else {
    if (category == subCategory) {
      if (element.previousElementSibling.previousElementSibling.previousElementSibling.checked) {
        chartSeries[(count == "" ) ? 0 : count]["border-width"] = element.value;
        chartSeries[(count == "" ) ? 0 : count]["border-color"] = element.nextElementSibling.nextElementSibling.nextElementSibling.value;
      } else {
         chartSeries[(count == "" ) ? 0 : count]["border-width"] = 0;
      }
    } else {
      var data = {};
      chartSeries[(count == "" ) ? 0 : count][subCategory] = data;
      if (element.previousElementSibling.previousElementSibling.previousElementSibling.checked) {
        chartSeries[(count == "" ) ? 0 : count][subCategory]["border-width"] = element.value;
        chartSeries[(count == "" ) ? 0 : count][subCategory]["border-color"] = element.nextElementSibling.nextElementSibling.nextElementSibling.value;
      } else {
         chartSeries[(count == "" ) ? 0 : count][subCategory]["border-width"] = 0;
      }
    }
    zingchart.exec(chartID,'modify', {
      graphid : 0,
      data : {
        "series":chartSeries
      }
    });
  } 
  creat_json();}
/*
 * series setting line
 */
function set_line_series(element,category,subCategory) {
  count = (element.parentElement.parentElement.dataset.count != 0) ? element.parentElement.parentElement.dataset.count : '';
  var chartData = zingchart.exec(chartID, 'getdata');
  var chartSeries = chartData['graphset'][0]['series']; 
  if (category != subCategory) {
    if (count == chartSeries.length ) {
      //TO DO
    } else  {
      var data = {}
      data["line-color"]        = element.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
      data["line-style"]        = element.options[element.selectedIndex].value;
      data["line-width"]        = element.previousElementSibling.previousElementSibling.previousElementSibling.value;
      data["line-gap-size"]     = element.nextElementSibling.nextElementSibling.nextElementSibling.value;
      data["line-segment-size"] = element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
      chartSeries[(count == "" ) ? 0 : count][subCategory] = data;
    }
  } else {//Same category and subcategory
    if (count == chartSeries.length ) {
      //TODO 
    } else {
       chartSeries[(count == "" ) ? 0 : count]["line-color"]        = element.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
       chartSeries[(count == "" ) ? 0 : count]["line-style"]        = element.options[element.selectedIndex].value;
       chartSeries[(count == "" ) ? 0 : count]["line-width"]        = element.previousElementSibling.previousElementSibling.previousElementSibling.value;
       chartSeries[(count == "" ) ? 0 : count]["line-gap-size"]     = element.nextElementSibling.nextElementSibling.nextElementSibling.value;
       chartSeries[(count == "" ) ? 0 : count]["line-segment-size"] = element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
    }
  }
  
  zingchart.exec(chartID,'modify', {
    graphid : 0,
    data : {
      "series" : chartSeries
    }
  });
  creat_json();}
/*
 * Series Modify chart
 */
function Modify_chart_series(element,type,key,category,subCategory) {
  count = element.parentElement.parentElement.dataset.count;
  var value = ''
  switch (type) {
    case("checkbox") :
      value = element.checked;
    break;
    case("select-one") :
      value  = element.options[element.selectedIndex].value;
    break;
    default:
    //default is for text,range
      value= element.value;
  }
  // Get chart JSON
  var chartDta = zingchart.exec(chartID, 'getdata');
  var chartSeries = chartDta['graphset'][0]['series']; // Ternary operator to check to see if 'labels' exists

  if (typeof chartSeries  == "undefined" ){ //Empty array situation, creating a new series
    var dataObj = {
      series :[],
    };
    var vals = {};
    vals[key] = value;
    if (category == subCategory) { // The same category part
      dataObj.series.push(vals);
    } else {
      var vals ={};
      dataObj[subCategory] = vals;
    }
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
  } else { //Labels already exists, so we're modifying instead of creating 
      if (category == subCategory) {
        if (count == chartSeries.length) {//New elemnt case we have to push it 
            var vals = {};
            vals[key] = value;
            chartLabels.push(vals);
           zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : {
              "series": chartSeries
            }
          });
        } else {
          chartSeries[count][key] = value;
          zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : {
              "series": chartSeries
            }
          });
        }
      } else {
        if (count == chartSeries.length) {//New elemnt case we have to push it 
            var vals = {};
            vals[key] = value;
            var sub = {}
            sub[subCategory] = vals;
            chartLabels.push(sub);
            zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : {
              "series": chartSeries
            }
          });
        } else {
          var vals = {};
          vals[key] = value;
          chartSeries[count][subCategory] = vals;
          zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : {
              "series": chartSeries
            }
          });
        }
      }

  }
  creat_json();}
function Modify_chart_scale(element,type,key,category,subCategory) {
  count = element.parentElement.parentElement.dataset.count
  var value = ''
  switch (type) {
    case("checkbox") :
      value = element.checked;
    break;
    case("select-one") :
      value  = element.options[element.selectedIndex].value;
    break;
    default:
    //default is for text,range
      value= element.value;
  }
  // Get chart JSON, see if it has our category or not
  var chartDta = zingchart.exec(chartID, 'getdata');
  var temp = (scaleXCounter == 0)?"": "-"+scaleXCounter;
  var scalename = "scale-x"+temp;
  var chartScale = chartDta['graphset'][0][scalename]; // Ternary operator to check to see if 'scale' exists

  if (typeof chartScale  == "undefined" ){ //Empty array situation, creating a new scale-x
    var dataObj = {};
    dataObj[scalename] ={};
    if (category == subCategory) { // The same category part
      dataObj[scalename][key] = value;
    } else {
      dataObj[scalename][subCategory] = {};
      dataObj[scalename][subCategory][key] = value;
    }
    zingchart.exec(chartID,'modify', {
        graphid : 0,
        data : dataObj  
      });
  } else { //Scale already exists, so we're modifying instead of creating 
      if (category == subCategory) {
        //Not sure when this case will happen
        if (count == chartScale.length) {//New elemnt case we have to push it 
            var vals = {};
            vals[key] = value;
            chartDta['graphset'][0][scalename].push(vals);
            ////TODO
           zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : chartDta['graphset'][0]
          });
        } else {
          //This should happen in general tabs in all categories
          chartDta['graphset'][0][scalename][key] = value;
          zingchart.exec(chartID,'setdata', {
            graphid : 0,
            data : chartDta['graphset'][0]
          });
        }
      } else {
        if (count == chartScale.length) {//New elemnt case we have to push it 
            var vals = {};
            vals[key] = value;
            var sub = {}
            sub[subCategory] = vals;
            chartLabels.push(sub);
            zingchart.exec(chartID,'modify', {
            graphid : 0,
            data : {
              "scale-x": chartScale
            }
          });
        } else {
          console.log(vals);
          chartDta['graphset'][0][scalename][subCategory][key] = value;
          zingchart.exec(chartID,'setdata', {
            graphid : 0,
            data : chartDta['graphset'][0] 
          });
        }
      }

  }
  creat_json();}
function new_scale_x() {
  var clonedTitle  = document.getElementById("scaleX").cloneNode(true);
  var clonedConfig = document.getElementById("scaleX").nextElementSibling.cloneNode(true);
  scaleXCounter ++;
  clonedTitle.id  = "scaleX"+scaleXCounter;
  clonedTitle.innerHTML = "scale-x-"+scaleXCounter;
  childs = clonedConfig.childNodes;
  for (var i= 0 , len = clonedConfig.childNodes.length ; i<len; i++) {
    //We only care about the elements that has id
    if (childs[i].id) {
      childs[i].id += scaleXCounter;
      childs[i].setAttribute("data-count",scaleXCounter);
      //This one checks for the childs of the cloned node
      //it checks for the childs of tabseries div
      for (var k= 0;k<childs[i].childNodes.length;k++ ) {
          //if the child has data-category == series and it is a elemnet 
        if (childs[i].childNodes[k].nodeName != "#text") {
          if (childs[i].childNodes[k].getAttribute("data-category") == "scale-x") {
            //childs[i].childNodes[k] += scaleXCounter;
            childs[i].childNodes[k].setAttribute("data-count",scaleXCounter);
          };
        };
      };
    };
  }
  clonedConfig.setAttribute("data-count",scaleXCounter);
  document.getElementById("scaleAccordion").appendChild(clonedTitle);
  document.getElementById("scaleAccordion").appendChild(clonedConfig);
  jQuery(function($) {
    $('#scaleAccordion').accordion("refresh"); 
    $("#"+childs[1].id).tabs(); 
  });
}
function new_scale_y() {
  var clonedTitle  = document.getElementById("scaleY").cloneNode(true);
  var clonedConfig = document.getElementById("scaleY").nextElementSibling.cloneNode(true);
  scaleYCounter ++;
  clonedTitle.innerHTML = "scale-y-"+scaleYCounter;
  clonedTitle.id  = "scaleY"+scaleYCounter;
  childs = clonedConfig.childNodes;
  for (var i= 0 , len = clonedConfig.childNodes.length ; i<len; i++) {
    //We only care about the elements that has id
    if (childs[i].id) {
      childs[i].id += scaleYCounter;
      childs[i].setAttribute("data-count",scaleYCounter);
      //This one checks for the childs of the cloned node
      //it checks for the childs of tabseries div
      for (var k= 0;k<childs[i].childNodes.length;k++ ) {
          //if the child has data-category == series and it is a elemnet 
        if (childs[i].childNodes[k].nodeName != "#text") {
          if (childs[i].childNodes[k].getAttribute("data-category") == "scale-x") {
            //childs[i].childNodes[k] += scaleXCounter;
            childs[i].childNodes[k].setAttribute("data-count",scaleYCounter);
          };
        };
      };
    };
  }
  clonedConfig.setAttribute("data-count",scaleYCounter);
  document.getElementById("scaleAccordion").appendChild(clonedTitle);
  document.getElementById("scaleAccordion").appendChild(clonedConfig);
  jQuery(function($) {
    $('#scaleAccordion').accordion("refresh"); 
    $("#"+childs[1].id).tabs(); 
  });
}

var jsonObject = '';
var chartTitle = '';
var chartType  = 'Bar';
var chartData = ''; 
var selectedChart = '';


var chartID = 'chartDiv';


/*****************************************************
 *                   Legend                          *
 *****************************************************/
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

/*****************************************************
 *                   Plot Area                       *
 *****************************************************/
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
function creat_json() {
  zingchart.exec(chartID,'update');
  // At some point we have to fix this this does not work correctly
  var jsonString = JSON.stringify(zingchart.exec(chartID,'getdata' ),null,"\t");
  //if (typeof jsonString != "undefined") {
    //document.getElementById('jsonData').innerHTML = "<em>"+jsonString+"</em>";
     document.getElementById('zingcharts-javaScript').value = jsonString;
  //} else {
   // alert("Please select your chart first!!!");
  //}
}
function chartRouter() {
  var charts = document.getElementById('whichChart');
  document.getElementById("accordion").style.display = "block";
  document.getElementById("dataTabs").style.display = "block";
  document.getElementById("chartSelector").style.display = "none";
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
