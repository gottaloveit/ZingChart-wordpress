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
*/
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
function amcharts_meta_boxes () {
  add_meta_box('zing_html',__( 'HTML', 'zingchart' ),'zing_html','zing_chart');
  add_meta_box('zing_javascript',__('Java Script','zingchart'),'zing_javascript','zing_chart');
}
add_action( 'add_meta_boxes', 'amcharts_meta_boxes' );
function zing_html ( $post ) {
  wp_nonce_field( ZING_NOUNCE, 'zing_nounce' );
  $html = get_post_meta ($post->ID, 'zing_html_content', true );
  // get settings
  //$settings = get_option( 'amcharts_options', amcharts_get_defaults() );
  
  ?>
  
  <p>
    <textarea name="html" class="widefat code code-html" id="amcharts-html"><?php echo esc_textarea( $html ); ?></textarea>
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
  <textarea name="JavaScript" class="widefat code code-html" id="amcharts-html"> <?php echo esc_textarea( $javaScript ); ?></textarea>
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