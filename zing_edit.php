<?php 

add_action( 'add_meta_boxes', 'amcharts_meta_boxes' );

function amcharts_meta_boxes () {
	add_meta_box(
		'amcharts_resources_box',
		__( 'Resources', 'zingchart' ),
		'amcharts_resources_box',
		'zingchart'
	);
	
	add_meta_box(
		'amcharts_html_box',
		__( 'HTML', 'amcharts' ),
		'amcharts_html_box',
		'zingchart'
	);
	
	add_meta_box(
		'amcharts_javascript_box',
		__( 'JavaScript', 'amcharts' ),
		'amcharts_javascript_box',
		'amchart'
	);
	
	add_meta_box(
		'amcharts_defaults_box',
		__( 'Apply default code', 'amcharts' ),
		'amcharts_defaults_box',
		'amchart'
	);
	
	add_meta_box(
		'amcharts_misc_box',
		__( 'Chart tools', 'amcharts' ),
		'amcharts_misc_box',
		'amchart',
		'side'
	);
}

function amcharts_resources_box ( $post ) {
	// nonce field
	wp_nonce_field( AMCHARTS_NONCE, 'amcharts_nonce' );
	
	// get post data
	$post_resources = get_post_meta( $post->ID, '_amcharts_resources', true );
	
	// get available resources
	$settings = get_option( 'amcharts_options', amcharts_get_defaults() );
	
	// get libs
	$libs = amcharts_split_libs( $settings['resources'] );
	$libs = array_merge( $libs, amcharts_split_libs( $settings['custom_resources'] ) );
	
	// new?
	if ( amcharts_is_new_post() && $_GET['chart_type'] ) {
		$post_resources = $settings['chart_types'][$_GET['chart_type']]['default_resources'];
	}
	?>

	<fieldset class="amcharts-resource-group">	
		<p>
			<textarea name="resources" id="amcharts-resources" class="widefat amcharts-resources"><?php echo esc_textarea( $post_resources ); ?></textarea>
		</p>
	
		<select class="amcharts-select-resource">
			<option value=""><?php _e( 'Select a resource', 'amcharts' ); ?></option>
			<?php
			foreach( $libs as $lib ) {
				?><option value="<?php echo esc_attr( $lib ); ?>"><?php echo $lib; ?></option><?php
			}
			?>
		</select>
		<input type="button" class="button amcharts-add-resource" value="<?php _e( 'Add', 'amcharts' ) ; ?>" />
	</fieldset>
	<?php
}