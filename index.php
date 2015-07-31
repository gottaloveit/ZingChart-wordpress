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
  if(is_admin()) {
    wp_enqueue_script('jquery-ui','http://code.jquery.com/ui/1.11.4/jquery-ui.min.js');
    wp_enqueue_script('translate', ZING_PLUGIN_URL.'translate.js');
    wp_enqueue_style('jquery-style', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
  }
  wp_enqueue_script('Zing_chart','http://cdn.zingchart.com/zingchart.min.js');
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
  add_meta_box('zing_designer',__('Chart Designer','zingchart'),'zing_designer','zing_chart');
  add_meta_box('zing_javascript',__('Java Script','zingchart'),'zing_javascript','zing_chart');
}
add_action( 'add_meta_boxes', 'zingchart_meta_boxes' );
function zing_designer() {
?>
<script>
jQuery(document).ready(function($) {
  $('#tabs').tabs();
  $('#accordion').accordion({ autoHeight: false,collapsible: true,heightStyle: "content", active : 'none' });
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
  $("#scaleAccordion").accordion({
  heightStyle: "content",
  collapsible: true,
  });
  $("#scaleXTabs").tabs();
  $("#scaleYTabs").tabs();
  $("#legendTabs").tabs();
});
</script>
<style type="text/css">
#accordion{
float: left;
width: 60%;
display: none;
}
#dataTabs {
  display: none;
}
.ui-accordion .ui-accordion-header .ui-icon {
left: -0.25em;
}
</style>
<section id="chartSelector">
<label >Chart type:</label>
<select onchange="chartRouter()" id="whichChart">
  <option value=""></option>
  <option value="area">Area</option>
  <option value="bar">Bar</option>
  <option value="line">Line</option>
  <option value="pie">Pie</option>
  <option value = "scatter">Scatter</option>
</select>
</section>
<div style="clear:both"></div>

<div id="accordion">
  <h3>Title</h3>
  <div class="frm-el" data-category = "title" data-sub-category = "title">
  </div>
  <h3>Sub title</h3>
  <div class="frm-el" data-category = "subtitle" data-sub-category = "subtitle">
  </div>
  <h3> Legend</h3>
  <div>
    <div id="legendTabs">
      <ul>
        <li><a href="#legendTab1">General</a></li>
        <li><a href="#legendTab2">Item</a></li>
        <li><a href="#legendTab3">Marker</a></li>
      </ul>
      <div id="legendTab1" class="frm-el" data-category = "legend" data-sub-category = "legend"></div>
      <div id="legendTab2" class="frm-el" data-category = "legend" data-sub-category = "item"></div>
      <div id="legendTab3" class="frm-el" data-category = "legend" data-sub-category = "marker"></div>
    </div>
    <hr>
    Position:<br>
    X : <input type="text" id="xPositionLegend" onKeyUp ="set_xy_position_legend()" value = '0' ><br>
    Y : <input type="text" id="yPositionLegend" onKeyUp ="set_xy_position_legend()" value='0'><br>
  </div>
  <h3>Plotarea</h3>
  <div class="frm-el" data-category = "plotarea" data-sub-category = "plotarea">
    Background Position: <br>
    X : <input type="text" value='0' id="backgroundPositionXPlotArea" onKeyUp="set_background_position_plot_area()" ><br>
    Y : <input type="text" value='0' id="backgroundPositionYPlotArea" onKeyUp="set_background_position_plot_area()" ><hr>
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
  <h3>Scale</h3>
  <div class="frm-el" data-category = "scale" data-sub-category = "scaleX">
    <div id="scaleAccordion">
      <h3 id="scaleX"> Scale-x</h3>
      <div>
        <div id="scaleXTabs" data-count = "0">
          <ul>
            <li><a href="#scaleXGeneral">General</a></li>
            <li><a href="#scaleXGuid">Guid</a></li>
            <li><a href="#scaleXLabels">Label</a></li>
            <li><a href="#scaleXMarkers">Markers</a></li>
            <li><a href="#ScaleXRefLine">ref-line</a></li>
            <li><a href="#scaleXTransform">Transform</a></li>
            <li><a href="#scaleXTick">Tick</a></li>
            <li><a href="#scaleXItem">Item</a></li>
          </ul>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "scale-x" id="scaleXGeneral"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "guide"    id="scaleXGuid"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "label"  id="scaleXLabels"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "markers"   id="scaleXMarkers"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "ref-line"  id="ScaleXRefLine"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "transform" id="scaleXTransform"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "tick"    id="scaleXTick"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "item"    id="scaleXItem"></div>
        </div>
      </div>
      <h3 id="scaleY">Scale-y</h3>
      <div>
        <div id="scaleYTabs" data-count = "0">
          <ul>
            <li><a href="#scaleXGeneral">General</a></li>
            <li><a href="#scaleXGuid">Guid</a></li>
            <li><a href="#scaleXLabels">Label</a></li>
            <li><a href="#scaleXMarkers">Markers</a></li>
            <li><a href="#ScaleXRefLine">ref-line</a></li>
            <li><a href="#scaleXTransform">Transform</a></li>
            <li><a href="#scaleXTick">Tick</a></li>
            <li><a href="#scaleXItem">Item</a></li>
          </ul>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "scale-x" id="scaleXGeneral"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "guide"    id="scaleXGuid"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "label"  id="scaleXLabels"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "markers"   id="scaleXMarkers"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "ref-line"  id="ScaleXRefLine"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "transform" id="scaleXTransform"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "tick"    id="scaleXTick"></div>
          <div class = "scl-el" data-category = "scale-x" data-sub-category = "item"    id="scaleXItem"></div>
        </div>
      </div>
      <h3>Scale-r</h3>
      <div class="frm-el" data-category = "scale-r" data-sub-category = "scale-r"></div>
      <h3>Scale</h3>
      <div class="frm-el" data-category = "scale" data-sub-category = "scale"></div>
    </div>
    <button type="button" onclick="new_scale_x()">New Scale-X</button>
    <button type="button" onclick="new_scale_y()">New Scale-Y</button>
  </div> 
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
function zing_javascript($post) {
  wp_nonce_field( ZING_NOUNCE, 'zing_nounce' );
  $javaScript =  get_post_meta($post->ID,'zing_javascript_content',true);
  add_thickbox();
  ?>
    <textarea name="JavaScriptZing" class="widefat code code-html" id="zingcharts-javaScript"> <?php echo esc_textarea( $javaScript ); ?></textarea>
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
    //if (isset($_POST['zing_nounce'])&&!wp_verify_nonce($_POST['zing_nounce'],ZING_NOUNCE)) return;
    if (isset($_POST['JavaScriptZing'])) {
      update_post_meta($post_id,'zing_javascript_content',trim($_POST['JavaScriptZing']));
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
      $post = get_post($value);
      return "<div class='ZingChart' id='chartDiv".$value."'></div>
        <script type='text/javascript'>
        var chartData".$value."= ".(get_post_meta($value,'zing_javascript_content',true) != ''?get_post_meta($value,'zing_javascript_content',true) : 0).";
        window.addEventListener('load',draw_chart".$value." () ,false);
        function draw_chart".$value." () {
          zingchart.render({
            id:'chartDiv".$value."',
            height:400,
            width:600,
            data:chartData".$value."
          });
        }
        </script> ";
      
    }
  }
}
add_shortcode("zing","plot_it");
add_filter('widget_text', 'do_shortcode');