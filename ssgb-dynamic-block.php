<?php
/**
 * Plugin Name: SoyebSalar Gutenberg Dynamic Block
 * Description: SoyebSalar Gutenberg Dynamic Block is a custom Gutenberg block for WordPress that allows you to create dynamic content including an image, title, subtitle, and button. Customize the block with settings for image size and alignment, title and subtitle font styles, button size, and alignment.
 * Version: 1.0.0
 * Author: Soyeb Salar
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ssgb-dynamic-block
 * Requires at least: 5.0
 * Tested up to: 6.3
 * Requires PHP: 7.0
 * Stable tag: 1.0.0
 * Contributors: Soyeb Salar
 * Donate link: https://soyebsalar.in/donate/
 */

defined('ABSPATH') || exit;

function ssgb_register_block()
{
    $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

    wp_register_script(
        'ssgb-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'ssgb-block-editor-style',
        plugins_url('src/editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'src/editor.css')
    );

    wp_register_style(
        'ssgb-block-style',
        plugins_url('src/style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'src/style.css')
    );

    register_block_type('ssgb/dynamic-block', array(
        'editor_script' => 'ssgb-block-editor-script',
        'editor_style' => 'ssgb-block-editor-style',
        'style' => 'ssgb-block-style',
    ));
}

add_action('init', 'ssgb_register_block');
