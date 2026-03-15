<?php
/**
 * Lovable Theme - Home-tec functions and definitions
 *
 * @package Lovable_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue styles and scripts
 */
function lovable_theme_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'lovable-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap',
        array(),
        null
    );

    // Theme stylesheet
    wp_enqueue_style(
        'lovable-theme-style',
        get_stylesheet_uri(),
        array( 'lovable-google-fonts' ),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'lovable_theme_enqueue_assets' );

/**
 * Theme setup
 */
function lovable_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    register_nav_menus( array(
        'primary' => __( 'Hauptmenü', 'lovable-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'lovable_theme_setup' );
