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
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>">
            <?php endif; ?>
        </a>

        <nav class="main-nav">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="<?php echo is_front_page() ? 'active' : ''; ?>">Startseite</a>
            <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>">Leistungen</a>
            <a href="<?php echo esc_url( home_url( '/projekte' ) ); ?>">Projekte</a>
            <a href="<?php echo esc_url( home_url( '/ueber-uns' ) ); ?>">Über uns</a>
            <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kontakt</a>
            <a href="tel:017643338686" class="btn btn-primary" style="margin-left:0.75rem;padding:0.5rem 1rem;font-size:0.8125rem;">
                📞 Jetzt anrufen
            </a>
        </nav>

        <button class="mobile-toggle" aria-label="Menü öffnen" aria-expanded="false">
            <span class="icon-menu">☰</span>
            <span class="icon-close" style="display:none;">✕</span>
        </button>
    </div>

    <nav class="mobile-nav">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Startseite</a>
        <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>">Leistungen</a>
        <a href="<?php echo esc_url( home_url( '/projekte' ) ); ?>">Projekte</a>
        <a href="<?php echo esc_url( home_url( '/ueber-uns' ) ); ?>">Über uns</a>
        <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kontakt</a>
        <a href="tel:017643338686" class="btn btn-primary" style="display:block;text-align:center;margin-top:0.5rem;">
            📞 0176 43338686
        </a>
    </nav>
</header>