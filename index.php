<?php
/**
 * @package Hello_Dolly
 * @version 1.6
 */
/*
Plugin Name: Form Validation JS
Plugin URI: http://gauravrjoshi.com/plugins/
Description:This is a plugin for wordpress using for input feild telephone.Use class 'validaton' in input form telepone.
Author: Gaurav Joshi
Version: 1.0
Author URI: http://gauravrjoshi.com/
Text Domain: form-validation-js
*/
add_action('init', 'form_validation_js');
function form_validation_js() 
{
	$src = plugins_url('form-validation-js.js', __FILE__);
    wp_register_script( 'form-validation-js', $src ,array(),false,true);
	wp_enqueue_script( 'form-validation-js' );
}


