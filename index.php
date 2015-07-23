<?php
/* Plugin Name: Zing Charts
 * Plugin URI:http://www.zingchart.com/
 * Description: This plugin adds Zing charts to wordpress.
 * Author: Hamid Tavakoli
 * Version:1.0
 * Author URI: http://pint.com
 * Lisense :???
 */
/*
TO DOs:
* Internationalization Implimention 
* Get the Image for the icon!! Function zing_custompost
* Check user credentials before saving for zing_save
* Create a database tabel for charts and put defult values in them.
* Creat a editor button for inserting shortcodes
* Fixing the abspath issue
* Make sure the plugin loads only once
*/

/*if (!'defined( 'ABSPATH' )') {
  header( 'HTTP/1.0 404 Not Found', true, 404 );
  exit;
}*/
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);


define('ZING_PLUGIN_URL',plugin_dir_url(__FILE__));
define('ZING_PLUGIN_PATH',plugin_dir_path(__FILE__));
define('ZING_NOUNCE',plugin_dir_path(__FILE__));
require_once(ZING_PLUGIN_PATH.'Zing_lib.php');
require_once(ZING_PLUGIN_PATH.'Zing_help.php');
//require_once(ZING_PLUGIN_PATH.'zing_edit.php');

function zing_activate() {
  //Just a place holder
}
register_activation_hook(__FILE__,"zing_activate");
function zing_deactivate() {
  //Just another place holder
}
register_deactivation_hook(__FILE__,"zing_deactivate");

function zing_admin_menu() {
  add_options_page('Zing Charts setting','Zing Chart','manage_options','Zing-chart','zing_admin');

}
add_action('admin_menu','zing_admin_menu');

function zing_loadLib(){
  wp_enqueue_script('zing_chart','http://cdn.zingchart.com/zingchart.min.js',array(),'2.1.0',TRUE);
}
add_action('wp_enqueue_scripts','zing_loadLib');

/*
 * Register custom post type
 */
function Zing_custompost() {
  wp_enqueue_script('jquery-ui','http://code.jquery.com/ui/1.11.4/jquery-ui.min.js');
   wp_enqueue_script('translate', ZING_PLUGIN_URL.'translate.js');
  wp_enqueue_script('Zing_chart','http://cdn.zingchart.com/zingchart.min.js');
  wp_enqueue_style('jquery-style', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
  register_post_type('zing_chart',
    array( 
    'labels'              => array( 
    'name'                => _x( 'Zing Charts', 'zingchart' ),
    'singular_name'       => _x( 'Zing Chart', 'zingchart' ),
    'add_new'             => _x( 'Add New', 'zingchart' ),
    'add_new_item'        => _x( 'Add New Chart', 'zingchart' ),
    'edit_item'           => _x( 'Edit Chart', 'zingchart' ),
    'new_item'            => _x( 'New Chart', 'zingchart' ),
    'view_item'           => _x( 'View Chart', 'zingchart' ),
    'search_items'        => _x( 'Search For Charts', 'zingchart' ),
    'not_found'           => _x( 'No charts found', 'zingchart' ),
    'not_found_in_trash'  => _x( 'No charts found in Trash', 'zingchart' ),
    'menu_name'           => _x( 'Charts', 'zingchart' ),
    ),
    //TO DO: I have to upload appropriate image for the icon
    'menu_icon'           => '/images/icon_charts2.png',
    'hierarchical'        => false,
    'supports'            => array( 'title' ),
    'taxonomies'          => array( 'category' ),
    'public'              => false,
    'show_ui'             => true,
    'menu_position'       => 20,
    'show_in_nav_menus'   => false,
    'publicly_queryable'  => false,
    'exclude_from_search' => true,
    'has_archive'         => false,
    'query_var'           => false,
    'can_export'          => true,
    'capability_type'     => 'post'
    )
  );
}
add_action('init','Zing_custompost');
function zingchart_meta_boxes () {
  add_meta_box('zing_designer',__('Chart Designer','zingchart'),'zing_designer','zing_chart','high');
  add_meta_box('zing_html',__( 'HTML', 'zingchart' ),'zing_html','zing_chart');
  add_meta_box('zing_javascript',__('Java Script','zingchart'),'zing_javascript','zing_chart');
  
}
add_action( 'add_meta_boxes', 'zingchart_meta_boxes' );
function zing_designer() {

  ?> 
  <script>
  jQuery(document).ready(function($) {
    $('#tabs').tabs();
    $('#accordion').accordion({ autoHeight: false,collapsible: true,heightStyle: "content" });
    $( "#slider" ).slider();
    $("#plotTabs").tabs();
    $("#labelsAccordion").accordion({
      heightStyle: "content",
      collapsible: true,
    });
    $("#seriesAccordion").accordion({
      heightStyle: "content",
      collapsible: true,
    });
    $(".seriesTabs").tabs();
    $("#plotJson").tabs();
    $("#dataTabs").tabs();
    
  });
  </script> 
  <style type="text/css">
  #accordion{
    float: left;
    width: 60%;
  }
  .ui-accordion .ui-accordion-header .ui-icon {
    left: -0.25em;
  }

  </style>


  Chart type:
  <select onchange="chartRouter()" id="whichChart">
     <option value=""></option>
    <option value="area">Area</option>
    <option value="bar">Bar</option>
    <option value="line">Line</option>
    <option value="pie">Pie</option>
    <option value = "scatter">Scatter</option>
  </select>

  <div style="clear:both"></div>

  <div id="accordion">
    <h3>Title</h3>
    <div>
      Visible : <input type="checkbox" onchange="showtitle()" id="visibleTitle">
      <hr>
      Text: <input type="text" id="titleText" onKeyUp="set_text_title()">
      <hr>
      Adjust layout:<input type="checkbox" onchange="adjast_layout_title()" id="adjustLayoutTitle">
      <hr>
      Background :
      <select id="backgroundTypeTitle" onchange="set_background_type_title()">
        <option value="solid"> Solid </option>
        <option value="gradiant"> Gradiant </option>
      </select><br>
      Background color 1 : <input type="color" id="backgroundColor1Title" onchange="set_background_color_title()"><br>
      Background color 2 : <input type="color" id="backgroundColor2Title" onchange="set_background_color_title()" style="visibility :hidden">
      <hr>
      Bold :  <input type="checkbox" id="boldTitle" onchange="set_bold_title()">
      <hr>
      Font Color : <input type="color" id= "fontColorTitle" onchange="set_font_color_title()"><br>
      Font Style : 
      <select type="text" id="fontStyleTitle"  onchange="set_font_style_title()">
        <option value = "normal" > normal</option>
        <option value = "italic" > italic</option>
        <option value = "oblique"> oblique</option>
      </select><br>
      <!-- Have to change it to select later -->
      Font Family :<input type="text" id="fontFamilyTitle" onKeyUp = "set_font_family_title()"><br>
      Text Align : 
      <select id="textAlignTitle" onchange="set_text_align_title()">
        <option value = 'center'> Center</option>
        <option value = 'left'> Left</option>
        <option value = 'right' > Right</option>
      </select>
      <hr>
        Border : <input type="checkbox" id="borderTitle" onchange="set_border_title()"><br>
        width :<input typpe= "text" id="borderWidthTitle" onKeyUp="set_border_title()"><br>
        Color: <input type="color" id="borderColorTitle" onchange="set_border_title()"><br>
      <hr>
      Margins: <br>
      Top:<input type="text" id="marginTopTitle" onKeyUp="set_margin_title()" value="10px"><br>
      Right:<input type="text" id="marginRightTitle" onKeyUp="set_margin_title()" value="0"><br>
      Bottom : <input type="text" id="marginBottomTitle" onKeyUp="set_margin_title()" value="10px"><br>
      Left :<input type="text" id="marginLeftTitle" onKeyUp="set_margin_title()" value="0"><br>
      <hr>
      Paddings: <br>
      Top:<input type="text" id="paddingTopTitle" onKeyUp="set_padding_title()" value="10px"><br>
      Right:<input type="text" id="paddingRightTitle" onKeyUp="set_padding_title()" value="0"><br>
      Bottom : <input type="text" id="paddingBottomTitle" onKeyUp="set_padding_title()" value="10px"><br>
      Left :<input type="text" id="paddingLeftTitle" onKeyUp="set_padding_title()" value="0"><br>
      <hr>
      x-string : <input type="text" id="xStringTitle" onKeyUp ="set_xy_string_title()" ><br>
      y-string : <input type="text" id="yStringTitle" onKeyUp ="set_xy_string_title()" ><br>
    </div>
    <h3>Sub title</h3>
    <div>
      Visible : <input type="checkbox" onchange="show_sub_title()" id="visibleSubTitle">
      <hr>
      Text: <input type="text" id="subTitleText" onKeyUp="set_text_sub_title()">
      <hr>
      Adjust layout:<input type="checkbox" onchange="adjast_layout_sub_title()" id="adjustLayoutSubTitle">
      <hr>
      Background :
      <select id="backgroundTypeSubTitle" onchange="set_background_type_sub_title()">
        <option value="solid"> Solid </option>
        <option value="gradiant"> Gradiant </option>
      </select><br>
      Background color 1 : <input type="color" id="backgroundColor1SubTitle" onchange="set_background_color_sub_title()"><br>
      Background color 2 : <input type="color" id="backgroundColor2SubTitle" onchange="set_background_color_sub_title()" style="visibility :hidden">
      <hr>
      Bold :  <input type="checkbox" id="boldSubTitle" onchange="set_bold_sub_title()">
      <hr>
      Font Color : <input type="color" id= "fontColorSubTitle" onchange="set_font_color_sub_title()"><br>
      Font Style : 
      <select type="text" id="fontStyleSubTitle"  onchange="set_font_style_sub_title()">
        <option value = "normal" > normal</option>
        <option value = "italic" > italic</option>
        <option value = "oblique"> oblique</option>
      </select><br>
      <!-- Have to change it to select later -->
      Font Family :<input type="text" id="fontFamilySubTitle" onKeyUp = "set_font_family_sub_title()"><br>
      Text Align : 
      <select id="textAlignSubTitle" onchange="set_text_align_sub_title()">
        <option value = 'center'> Center</option>
        <option value = 'left'> Left</option>
        <option value = 'right' > Right</option>
      </select>
      <hr>
        Border : <input type="checkbox" id="borderSubTitle" onchange="set_border_sub_title()"><br>
        width :<input typpe= "text" id="borderWidthSubTitle" onKeyUp="set_border_sub_title()"><br>
        Color: <input type="color" id="borderColorSubTitle" onchange="set_border_sub_title()"><br>
      <hr>
      Margins: <br>
      Top:<input type="text" id="marginTopSubTitle" onKeyUp="set_margin_sub_title()" value="10px"><br>
      Right:<input type="text" id="marginRightSubTitle" onKeyUp="set_margin_sub_title()" value="0"><br>
      Bottom : <input type="text" id="marginBottomSubTitle" onKeyUp="set_margin_sub_title()" value="10px"><br>
      Left :<input type="text" id="marginLeftSubTitle" onKeyUp="set_margin_sub_title()" value="0"><br>
      <hr>
      Paddings: <br>
      Top:<input type="text" id="paddingTopSubTitle" onKeyUp="set_padding_sub_title()" value="10px"><br>
      Right:<input type="text" id="paddingRightSubTitle" onKeyUp="set_padding_sub_title()" value="0"><br>
      Bottom : <input type="text" id="paddingBottomSubTitle" onKeyUp="set_padding_sub_title()" value="10px"><br>
      Left :<input type="text" id="paddingLeftSubTitle" onKeyUp="set_padding_sub_title()" value="0"><br>
      <hr>
      x-string : <input type="text" id="xStringSubTitle" onKeyUp ="set_x_string_sub_title()" ><br>
      y-string : <input type="text" id="yStringSubTitle" onKeyUp ="set_y_string_sub_title()" ><br>
    </div>
    <h3> Legend</h3>
    <div>
      Visible : <input type="checkbox" onchange="show_legend()" id="visibleLegend">
      <hr>
      Adjust layout:<input type="checkbox" onchange="adjast_layout_legend()" id="adjustLayoutLegend">
      <hr>
      Align:
      <select id="alignLegend" onchange="align_legend()">
        <option value = 'center'> Center</option>
        <option value = 'left'> Left</option>
        <option value = 'right' > Right</option>
      </select>
      <hr>
      Draggable:<input type="checkbox" onchange="draggable_legend()" id="draggableLegend">
      <hr>
      Layout : 
      <select id="layoutLegend" onchange="set_layout_legend()">
        <option value = "vertical"> Vertical</option>
        <option value = "horizontal"> Horizontal </option>
        <option value = "float" >Float </option>
        <option value = "colXrow" > Col X Row </option>
      </select><br>
      <span style="visibility :hidden" id="colRowLegend">
        Row : <input type= "text" id="rowsLayout" onKeyUp="set_layout_legend()"><br>
        Column :<input type="text" id="colsLayout" onKeyUp="set_layout_legend()"><br>
      </span>
      <hr>
      x-string : <input type="text" id="xStringLegend" onKeyUp ="set_x_string_legend()" ><br>
      y-string : <input type="text" id="yStringLegend" onKeyUp ="set_y_string_legend()" ><br>
      <hr>
      Minimize:<input type="checkbox" onchange="minimize_legend()" id="minimizeLegend">
      <hr>
      Toggle action:
      <select id="toggleActionLegend" onchange="toggle_action_legend()">
        <option value = ''> None</option>
        <option value = 'hide'> Hide</option>
        <option value = 'remove'> Remove</option>
        <option value = 'disabled' > Disabled</option>
      </select>
       <hr>
      Background :
      <select id="backgroundTypeLegend" onchange="set_background_type_legend()">
        <option value="solid"> Solid </option>
        <option value="gradiant"> Gradiant </option>
      </select><br>
      Background color 1 : <input type="color" id="backgroundColor1Legend" onchange="set_background_color_legend()"><br>
      Background color 2 : <input type="color" id="backgroundColor2Legend" onchange="set_background_color_legend()" style="visibility :hidden">
      <hr>
        Border : <input type="checkbox" id="borderLegend" onchange="set_border_legend()"><br>
        width :<input typpe= "text" id="borderWidthLegend" onKeyUp="set_border_legend()"><br>
        Color: <input type="color" id="borderColorLegend" onchange="set_border_legend()"><br>
      <hr>
      Margins: <br>
      Top:<input type="text" id="marginTopLegend" onKeyUp="set_margin_legend()" value="10px"><br>
      Right:<input type="text" id="marginRightLegend" onKeyUp="set_margin_legend()" value="0"><br>
      Bottom : <input type="text" id="marginBottomLegend" onKeyUp="set_margin_legend()" value="10px"><br>
      Left :<input type="text" id="marginLeftLegend" onKeyUp="set_margin_legend()" value="0"><br>
      <hr>
      Paddings: <br>
      Top:<input type="text" id="paddingTopLegend" onKeyUp="set_padding_legend()" value="10px"><br>
      Right:<input type="text" id="paddingRightLegend" onKeyUp="set_padding_legend()" value="0"><br>
      Bottom : <input type="text" id="paddingBottomLegend" onKeyUp="set_padding_legend()" value="10px"><br>
      Left :<input type="text" id="paddingLeftLegend" onKeyUp="set_padding_legend()" value="0"><br>
      <hr>
      Highlight plot : <input type="checkbox" onchange="set_highlight_plot()" id="highlightPlotLegend">
      <hr>
      Position:<br>
      X : <input type="text" id="xPositionLegend" onKeyUp ="set_xy_position_legend()" value = '0' ><br>
      Y : <input type="text" id="yPositionLegend" onKeyUp ="set_xy_position_legend()" value='0'><br>
      <hr>
      Item:<br>
      Bold:<input type="checkbox" onchange="set_item_bold_legend()" id="boldItemLegend"><br>
      Font Color: <input type="color" id="fontColorItemLegend" onchange="set_item_font_color_legend()"><br>
      Font Style : 
      <select type="text" id="fontStyleItemLegend"  onchange="set_font_style_item_legend()">
        <option value = "normal" > normal</option>
        <option value = "italic" > italic</option>
        <option value = "oblique"> oblique</option>
      </select><br>
      Font Family :<input type="text" id="fontFamilyItemLegend" onKeyUp = "set_font_family_item_legend()"><br>
      Text Align : 
      <select id="textAlignItemLegend" onchange="set_text_align_item_legend()">
        <option value = 'center'> Center</option>
        <option value = 'left'> Left</option>
        <option value = 'right' > Right</option>
      </select><br>
      Margins: <br>
      Top:<input type="text" id="marginTopItemLegend" onKeyUp="set_margin_item_legend()" value="10px"><br>
      Right:<input type="text" id="marginRightItemLegend" onKeyUp="set_margin_item_legend()" value="0"><br>
      Bottom : <input type="text" id="marginBottomitemLegend" onKeyUp="set_margin_item_legend()" value="10px"><br>
      Left :<input type="text" id="marginLeftItemLegend" onKeyUp="set_margin_item_legend()" value="0"><br>
      Paddings: <br>
      Top:<input type="text" id="paddingTopItemLegend" onKeyUp="set_padding_item_legend()" value="10px"><br>
      Right:<input type="text" id="paddingRightItemLegend" onKeyUp="set_padding_item_legend()" value="0"><br>
      Bottom : <input type="text" id="paddingBottomItemLegend" onKeyUp="set_padding_item_legend()" value="10px"><br>
      Left :<input type="text" id="paddingLeftItemLegend" onKeyUp="set_padding_item_legend()" value="0"><br>
      <hr>
      Marker:<br>
      Type:
      <select id="typeMarkerLegend" onchange="set_marker_type_legend()">
        <option value="triangle">Triangle</option>
        <option value="square"> Square</option>
        <option value="circle"> Circle</option>
        <option value="diamond"> Diamond</option>
        <option value="trapezoid"> Trapezoid</option>
        <option value="rectangle"> Rectangle</option>
        <option value="parallelogram"> Parallelogram</option>
        <option value="plus"> Plus</option>
        <option value="cross"> Cross</option>
        <option value="arrow"> arrow</option>
        <option value="ellipse"> Ellipse</option>
        <option value="arc"> Arc</option>
        <option value="pie"> Pie</option>
        <option value="star3">Star3</option>
        <option value="star4">Star4</option>
        <option value="star5">Star5</option>
        <option value="star6">Star6</option>
        <option value="star7">Star7</option>
        <option value="star8">Star8</option>
        <option value="star9">Star9</option>
        <option value="rpoly3">Rpoly3</option>
        <option value="rpoly4">Rpoly4</option>
        <option value="rpoly5">Rpoly5</option>
        <option value="rpoly6">Rpoly6</option>
        <option value="rpoly7">Rpoly7</option>
        <option value="rpoly8">Rpoly8</option>
        <option value="rpoly9">Rpoly9</option>
        <option value="gear3">Gear3</option>
        <option value="gear4">Gear4</option>
        <option value="gear5">Gear5</option>
        <option value="gear6">Gear6</option>
        <option value="gear7">Gear7</option>
        <option value="gear8">Gear8</option>
        <option value="gear9">Gear9</option>
      </select>
      <br>
      Alpha: <input type="text" value='1' id="alphaMarkerLegend" onKeyUp="set_alpha_marker_legend()" >
      <br>
      Background :
      <select id="backgroundTypeMarkerLegend" onchange="set_background_type_marker_legend()">
        <option value="solid"> Solid </option>
        <option value="gradiant"> Gradiant </option>
      </select>
      <br>
      Background color 1 : <input type="color" id="backgroundColor1MarkerLegend" onchange="set_background_color_marker_legend()"><br>
      Background color 2 : <input type="color" id="backgroundColor2MarkerLegend" onchange="set_background_color_marker_legend()" style="visibility :hidden">
      <br>
      Background Image: <input type="text" id="backgroundImageMarkerLegend" onKeyUp="set_background_image_marker_legend()">
      <br>
      Border : <input type="checkbox" id="borderMarkerLegend" onchange="set_border_marker_legend()"><br>
        width :<input typpe= "text" id="borderWidthMarkerLegend" onKeyUp="set_border_marker_legend()" value='1px'><br>
        Color: <input type="color" id="borderColorMarkerLegend" onchange="set_border_marker_legend()" value='#000000'><br>
    </div>
    <h3>Plotarea</h3>
    <div>
      Adjast Layout : <input type="checkbox" id="adjustLayoutPlotArea" onchange="adjust_layout_plot_area()"><hr>
      Alpha: <input type="text" value='1' id="alphaPlotArea" onKeyUp="set_alpha_plot_area()" ><hr>
      Background :
      <select id="backgroundTypePlotArea" onchange="set_background_type_plot_area()">
        <option value="solid"> Solid </option>
        <option value="gradiant"> Gradiant </option>
      </select>
      <br>
      Background color 1 : <input type="color" id="backgroundColor1PlotArea" onchange="set_background_color_plot_area()"><br>
      Background color 2 : <input type="color" id="backgroundColor2PlotArea" onchange="set_background_color_plot_area()" style="visibility :hidden">
      <hr>
       Background Image: <input type="text" id="backgroundImagePlotArea" onKeyUp="set_background_image_plot_area()">
       <hr>
       Background Fit:
       <select id="backgroundFitPlotArea" onchange="set_background_fir_plot_area()">
        <option value='x'>x</option>
        <option value='y'>y</option>
        <option value='xy'>xy</option>
       </select>
       <hr>
       Background Repeat: 
       <select id= "backgroundRepeatPlotArea" onchange="set_background_repeat_plot_area()">
        <option value="no-repeat">No Repeat</option>
        <option value="repaet">Repeat</option>
        <option value="repeat-x">Repeat X</option>
        <option value="repeat-y">Repeat Y</option>
       </select><br>
       Background Position: <br>
       X : <input type="text" value='0' id="backgroundPositionXPlotArea" onKeyUp="set_background_position_plot_area()" ><br>
       Y : <input type="text" value='0' id="backgroundPositionYPlotArea" onKeyUp="set_background_position_plot_area()" ><hr>
       Border : <input type="checkbox" id="borderPlotArea" onchange="set_border_plot_area()"><br>
        width :<input typpe= "text" id="borderWidthPlotArea" onKeyUp="set_border_plot_area()" value='1px'><br>
        Color: <input type="color"  id="borderColorPlotArea" onchange="set_border_plot_area()" value='#000000'><hr>
      Margins: <br>
      Top:<input type="text" id="marginTopPlotArea" onKeyUp="set_margin_plot_area()" value="10px"><br>
      Right:<input type="text" id="marginRightPlotArea" onKeyUp="set_margin_plot_area()" value="0"><br>
      Bottom : <input type="text" id="marginBottomPlotArea" onKeyUp="set_margin_plot_area()" value="10px"><br>
      Left :<input type="text" id="marginLeftPlotArea" onKeyUp="set_margin_item_plot_area()" value="0"><hr>
      Paddings: <br>
      Top:<input type="text" id="paddingTopPlotArea" onKeyUp="set_padding_plot_area()" value="10px"><br>
      Right:<input type="text" id="paddingRightPlotArea" onKeyUp="set_padding_plot_area()" value="0"><br>
      Bottom : <input type="text" id="paddingBottomPlotArea" onKeyUp="set_padding_plot_area()" value="10px"><br>
      Left :<input type="text" id="paddingLeftPlotArea" onKeyUp="set_padding_plot_area()" value="0"><br>
    </div>
    <h3>Plot</h3>
    <div>
      <div id="plotTabs">
        <ul>
          <li><a href="#plotTab1">General</a></li>
          <li><a href="#plotTab2">Animation</a></li>
          <li><a href="#plotTab3">Hover state</a></li>
          <li><a href="#plotTab4">Hover marker</a></li>
          <li><a href="#plotTab5">Marker</a></li>
          <li><a href="#plotTab6">Tool Tip</a></li>
          <li><a href="#plotTab7">Value Box</a></li>
        </ul>
        <div id="plotTab1" class="frm-el" data-category = "plot" data-sub-category = "plot"></div>
        <div id="plotTab2" class="frm-el" data-category = "plot" data-sub-category = "animation"></div>
        <div id="plotTab3" class="frm-el" data-category = "plot" data-sub-category = "hoverState"></div>
        <div id="plotTab4" class="frm-el" data-category = "plot" data-sub-category = "hoverMarker"></div>
        <div id="plotTab5" class="frm-el" data-category = "plot" data-sub-category = "marker"></div>
        <div id="plotTab6" class="frm-el" data-category = "plot" data-sub-category = "tooltip"></div>
        <div id="plotTab7" class="frm-el" data-category = "plot" data-sub-category = "value-box"></div>
      </div>
    </div>
    <h3>Scale R</h3>
    <div class="frm-el" data-category = "scale-r" data-sub-category = "scale-r"></div>
    <h3>Scale</h3>
    <div class="frm-el" data-category = "scale" data-sub-category = "scale"></div>
    <h3>Labels</h3>
      <div >
        <div id="labelsAccordion">
          <h3  id = "LabelsTitle" > Label </h3>
          <div id = "lableConfig" class="lbl-el" data-category = "labels" data-sub-category = "labels" data-count ="0"></div>
        </div>
        <button type="button" onclick="new_label(); return false;">New Label</button>
      </div>
    <h3>Preview </h3>
    <div id="preview" class="frm-el" data-category = "preview" data-sub-category = "preview">
    </div>
  </div>
  
  <div>
<span id='ttl'></span>
<div id='chartDiv'></div>




  <div style="clear:both"></div>

  <div id='dataTabs'> 
  <ul>
    <li><a href="#jsonString">Json</a></li>
    <li><a href="#series">data</a></li>
  </ul>
  <div id='jsonString'> 
    <textarea name="JavaScript" class="widefat code code-html" id="zingcharts-javaScript"> </textarea>
  </div>
  <div id="series">

    <div id="seriesAccordion">
        <h3 id="seriesTitle">Series </h3>
        <div id="seriesConfig">
          <div id="seriesTabs" class="seriesTabs" data-count = "0">
            <ul>
              <li><a href="#seriesTab0">Data</a></li>
              <li><a href="#seriesTab1">General</a></li>
              <li><a href="#seriesTab2">Animation</a></li>
              <li><a href="#seriesTab3">Hover state</a></li>
              <li><a href="#seriesTab4">Hover marker</a></li>
              <li><a href="#seriesTab5">Marker</a></li>
              <li><a href="#seriesTab6">Tool Tip</a></li>
              <li><a href="#seriesTab7">Value Box</a></li>
            </ul>
            <div id="seriesTab0" class="series-el" data-category = "series" data-sub-category = "data"></div>
            <div id="seriesTab1" class="series-el" data-category = "series" data-sub-category = "series"></div>
            <div id="seriesTab2" class="series-el" data-category = "series" data-sub-category = "animation"></div>
            <div id="seriesTab3" class="series-el" data-category = "series" data-sub-category = "hoverState"></div>
            <div id="seriesTab4" class="series-el" data-category = "series" data-sub-category = "hoverMarker"></div>
            <div id="seriesTab5" class="series-el" data-category = "series" data-sub-category = "marker"></div>
            <div id="seriesTab6" class="series-el" data-category = "series" data-sub-category = "tooltip"></div>
            <div id="seriesTab7" class="series-el" data-category = "series" data-sub-category = "value-box"></div>
          </div>
        </div>
      </div>
      <button type="button" onclick="new_series(); return false;">New Series</button>


  </div>
</div>
  <?php
}
function zing_html ( $post ) {
  wp_nonce_field( ZING_NOUNCE, 'zing_nounce' );
  $html = get_post_meta ($post->ID, 'zing_html_content', true );
  
  ?>
  
  <p>
    <textarea name="html" class="widefat code code-html" id="zingchart-html"><?php echo esc_textarea( $html ); ?></textarea>
  </p>
  
  <p class="description">
    <?php _e( 'Html tooltip ', 'zingchart' ); ?>
  </p>
  
  <?php
}

function zing_javascript($post) {
  wp_nonce_field( ZING_NOUNCE, 'zing_nounce' );
  $javaScript =  get_post_meta($post->ID,'zing_javascript_content',true);
  ?>
  <textarea name="JavaScript" class="widefat code code-html" id="zingcharts-javaScript"> <?php echo esc_textarea( $javaScript ); ?></textarea>
  <?php
}
/**
 * Save post metadata when a post is saved.
 * @param int $post_id The post ID.
 * @param post $post The post object.
 * @param bool $update Whether this is an existing post being updated or not.
 */
function zing_save_chart($post_id,$post,$update) {
  if ('zing_chart' ==$post->post_type && isset($_POST)) {
    if (isset($_POST['zing_nounce'])&&!wp_verify_nonce($_POST['zing_nounce'],ZING_NOUNCE)) return;
      if (isset($_POST['html'])&& isset($_POST['JavaScript'])) {
        update_post_meta($post_id,'zing_html_content',trim($_POST['html']));
        update_post_meta($post_id,'zing_javascript_content',trim($_POST['JavaScript']));
      }
  }
}
add_action('save_post_zing_chart','zing_save_chart',10,3);

/**
 * Plot the chart on the screen
 * @param array $atts Shortcode array attributes 
 */
function plot_it ($atts) {
  foreach ($atts as $key => $value) {
    if ($key== 'id') {
      $post = get_post('value');
      return get_post_meta($value,'zing_html_content',true).get_post_meta($value,'zing_javascript_content',true);
    }
  }
}
add_shortcode("zing","plot_it");