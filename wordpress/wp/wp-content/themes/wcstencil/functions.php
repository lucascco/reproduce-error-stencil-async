<?php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
function enqueue_parent_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

add_action( 'wp_enqueue_scripts', 'add_scripts' );
function add_scripts() {
    wp_enqueue_script('test-async-wp', get_theme_file_uri( '/scripts/stencil/test-async-wp/test-async-wp.js'));
    wp_enqueue_script('loader', get_theme_file_uri( '/scripts/loader.js'), array('test-async-wp'));
}