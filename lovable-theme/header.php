<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container-narrow" style="display:flex;align-items:center;justify-content:space-between;height:80px;">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
            <?php if ( has_custom_logo() ) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <strong style="font-family:'Plus Jakarta Sans',sans-serif;font-size:1.25rem;">
                    <?php bloginfo( 'name' ); ?>
                </strong>
            <?php endif; ?>
        </a>

        <nav class="main-nav">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'items_wrap'     => '%3$s',
                'fallback_cb'    => false,
                'depth'          => 1,
            ) );
            ?>
            <a href="tel:017643338686" class="btn btn-primary" style="margin-left:0.75rem;padding:0.5rem 1rem;font-size:0.875rem;">
                📞 Jetzt anrufen
            </a>
        </nav>

        <button class="mobile-toggle" onclick="document.querySelector('.mobile-nav').classList.toggle('open')" aria-label="Menü">
            ☰
        </button>
    </div>

    <nav class="mobile-nav">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '%3$s',
            'fallback_cb'    => false,
            'depth'          => 1,
        ) );
        ?>
        <a href="tel:017643338686" class="btn btn-primary" style="display:block;text-align:center;margin-top:0.5rem;">
            📞 0176 43338686
        </a>
    </nav>
</header>
